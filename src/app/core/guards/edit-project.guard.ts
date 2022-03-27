import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin, map, Observable } from 'rxjs';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class EditProjectGuard implements CanActivate {

  constructor(private store:Store<AppState>, private api:ApiService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return forkJoin([
        this.store.select(state=>state.profile),
        this.api.apiProjectsRead(route.params['id'])
      ]).pipe(map(([profileState, project]) => {
        return project.owner?.id === profileState.data?.id
      }));
  }
  
}
