import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {
  constructor(private api:ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
    const id = route.paramMap.get('id');
    return this.api.apiProjectsRead(id!);
  }
}
