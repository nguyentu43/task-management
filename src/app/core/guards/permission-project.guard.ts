import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, forkJoin, map, mergeMap, Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class PermissionProjectGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private api: ApiService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store
      .select((state) => state.profile)
      .pipe(
        filter((state) => state.isLogin),
        mergeMap((state) =>
          forkJoin([
            of(state),
            this.api.apiProjectsRead(route.paramMap.get('id')!),
          ])
        ),
        map(([profileState, project]) => {
          if (
            project.owner?.id === profileState.data?.id ||
            project.participants!.filter((p) => p.id === profileState.data?.id)
              .length > 0
          ) {
            return true;
          }
          this.router.navigate(['/403']);
          return false;
        })
      );
  }
}
