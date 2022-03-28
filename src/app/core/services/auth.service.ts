import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as auth0 from 'auth0-js';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../../store/profile/profile.actions';
import { ApiService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userProfile: any;
  requestedScopes: string = 'openid profile email';

  auth0 = new auth0.WebAuth({
    clientID: environment.auth0ClientId,
    domain: environment.auth0Domain,
    responseType: 'token',
    audience: environment.auth0Audience,
    redirectUri: environment.auth0RedirectUri,
    scope: this.requestedScopes,
  });

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private api: ApiService,
    private message: NzMessageService
  ) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult?.accessToken) {
        this.setSession(authResult);
        this.api.apiProfilesCreate().subscribe((profile) => {
          this.router.navigate(['/']);
          this.store.dispatch(ProfileActions.loadProfileSuccess(profile));
        });
      } else if (err) {
        this.router.navigate(['/']);
        this.message.error(err.error);
      }
    });

    if (!window.location.hash && this.isAuthenticated()) {
      this.store.dispatch(ProfileActions.loadProfile());
    }
  }

  private setSession(authResult: auth0.Auth0DecodedHash): void {
    const expiresAt = JSON.stringify(
      authResult.expiresIn! * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken!);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    this.removeToken();
    this.auth0.logout({
      clientID: environment.auth0ClientId,
      returnTo: environment.auth0RedirectUri,
    });
  }

  public removeToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at')!);
    return new Date().getTime() < expiresAt;
  }
}
