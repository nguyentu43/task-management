import { createAction, props } from '@ngrx/store';
import { Tag } from 'src/app/api/models';

export type TagsState = Tag[];

export const loadProfileSuccess = createAction("[Tags] load success", props<{data: TagsState}>())
export const clearProfile = createAction("[Tags] clear")