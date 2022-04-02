import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/app/store/app.reducer';
import { ProfileState } from 'src/app/store/profile/profile.reducer';
import * as ProfileActions from 'src/app/store/profile/profile.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  menu = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: '/home',
    },
    {
      title: 'Create a project',
      icon: 'plus-circle',
      link: '/projects/create',
    },
    {
      title: 'Your projects',
      icon: 'unordered-list',
      link: '/projects',
    },
    {
      title: 'Calendar',
      icon: 'calendar',
      link: '/calendar',
    },
    {
      title: 'Timeline',
      icon: 'pic-right',
      link: '/timeline',
    },
  ];

  profileState$: Observable<ProfileState> = this.store.select(
    (state) => state.profile
  );

  now = new Date();

  constructor(
    public auth: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    if (this.auth.isAuthenticated()) {
      this.auth.logout();
      this.store.dispatch(ProfileActions.clearProfile());
      this.router.navigate(['/']);
    }
  }
}
