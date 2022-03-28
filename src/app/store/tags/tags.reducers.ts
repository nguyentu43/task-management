import { createReducer, on } from '@ngrx/store';
import { Tag } from 'src/app/api/models';
import * as TagsAction from './tags.actions';

export const initialState: Tag[] = [];

export const tagsReducer = createReducer(
  initialState,
  on(TagsAction.loadProfileSuccess, (state, { data }) => [...data]),
  on(TagsAction.clearProfile, (state) => initialState)
);
