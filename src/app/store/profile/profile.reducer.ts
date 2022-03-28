import { state } from '@angular/animations';
import { createReducer, on, State } from '@ngrx/store';
import { Profile } from 'src/app/api/models';
import * as ProfileActions from './profile.actions';

export interface ProfileState {
  isLogin: boolean;
  data: Profile | null;
}

export const initialState: ProfileState = {
  isLogin: false,
  data: null,
};

export const profileReducer = createReducer<ProfileState>(
  initialState,
  on(ProfileActions.loadProfileSuccess, (state, data) => ({
    ...state,
    isLogin: true,
    data,
  })),
  on(ProfileActions.clearProfile, (state) => ({ ...initialState }))
);
