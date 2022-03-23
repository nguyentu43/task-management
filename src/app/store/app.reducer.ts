import { profileReducer } from './profile/profile.reducer';
import { ProfileState } from "./profile/profile.reducer";

export interface AppState{
    profile: ProfileState
}

export const appReducer = {
    profile: profileReducer
};