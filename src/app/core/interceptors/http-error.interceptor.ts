import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private message:NzMessageService, private auth:AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err);
      switch(err.status){
        case 401:
          this.message.error(err.statusText);
          this.auth.removeToken();
          break;
        case 406:
          this.message.error(err.error, { nzDuration: 5000 });
          setTimeout(() => {
            this.auth.logout();
          }, 5000);
          break;
        case 404:
          this.router.navigate(['/404']);
          break;
        default:
          this.message.error('Server error. Try again');
      }
      return new Observable<HttpEvent<any>>();
    }));
  }
}
