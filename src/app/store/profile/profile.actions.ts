import { createAction, props } from '@ngrx/store';
import { Profile } from '../../api/models/profile';

export const loadProfile = createAction('[Profile] load');
export const loadProfileSuccess = createAction(
  '[Profile] load success',
  props<Profile>()
);
export const clearProfile = createAction('[Profile] clear');
