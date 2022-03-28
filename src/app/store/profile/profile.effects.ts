import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/api/services';
import * as ProfileActions from './profile.actions';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.loadProfile.type),
      mergeMap(() =>
        this.api.apiProfilesMeList().pipe(
          map((profile) => ({
            type: ProfileActions.loadProfileSuccess.type,
            ...profile,
          }))
        )
      )
    )
  );

  constructor(private action$: Actions, private api: ApiService) {}
}
