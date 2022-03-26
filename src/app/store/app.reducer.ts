import { profileReducer } from './profile/profile.reducer';
import { ProfileState } from "./profile/profile.reducer";
import { TagsState } from './tags/tags.actions';
import { tagsReducer } from './tags/tags.reducers';

export interface AppState{
    profile: ProfileState,
    tags: TagsState
}

export const appReducer = {
    profile: profileReducer,
    tags: tagsReducer
};