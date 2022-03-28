import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, forkJoin, map, mergeMap, Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EditProjectGuard implements CanActivate {

  constructor(private store:Store<AppState>, private api:ApiService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(state => state.profile).pipe(
        filter(state => state.isLogin),
        mergeMap(state => forkJoin([this.api.apiProjectsRead(route.paramMap.get('id')!), of(state)])),
        map(([project, state]) => project.owner?.id === state.data?.id)
      );
  }
  
}
