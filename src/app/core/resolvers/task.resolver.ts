import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';
import *as TagsActions from 'src/app/store/tags/tags.actions';

@Injectable({
  providedIn: 'root'
})
export class TaskResolver implements Resolve<Task> {
  constructor(private api:ApiService, private store:Store<AppState>){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
    const id = route.paramMap.get('id');
    const task_id = route.paramMap.get('task_id');

    this.api.apiProjectsTagsList(id + '').subscribe(tags => {
      this.store.dispatch(TagsActions.loadProfileSuccess({data:tags}));
    });

    return this.api.apiProjectsTasksRead({
      projectPk: id + '',
      id: task_id + ''
    });
  }
}
