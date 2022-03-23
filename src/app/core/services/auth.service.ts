import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as auth0 from 'auth0-js';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../../store/profile/profile.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {

  userProfile: any;
  requestedScopes: string = 'openid profile read:timesheets create:timesheets';

  auth0 = new auth0.WebAuth({
    clientID: environment.auth0ClientId,
    domain: environment.auth0Domain,
    responseType: 'token id_token',
    audience: environment.auth0Audience,
    redirectUri: environment.auth0RedirectUri,
    scope: this.requestedScopes
  });

  constructor(private router: Router, private store:Store<AppState>) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
        this.store.dispatch(ProfileActions.loadProfile())
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
        alert('Error: <%= "${err.error}" %>. Check the console for further details.');
      }
    });

    if(this.isAuthenticated()){
      this.store.dispatch(ProfileActions.loadProfile());
    }
  }

  private setSession(authResult: auth0.Auth0DecodedHash): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn! * 1000) + new Date().getTime());

    // If there is a value on the scope param from the authResult,
    // use it to set scopes in the session for the user. Otherwise
    // use the scopes as requested. If no scopes were requested,
    // set it to nothing
    const scopes = authResult.scope || this.requestedScopes || '';

    localStorage.setItem('access_token', authResult.accessToken!);
    localStorage.setItem('id_token', authResult.idToken!);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at')!);
    return new Date().getTime() < expiresAt;
  }

  public userHasScopes(scopes: Array<string>): boolean {
    const grantedScopes = JSON.parse(localStorage.getItem('scopes')!).split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }
}