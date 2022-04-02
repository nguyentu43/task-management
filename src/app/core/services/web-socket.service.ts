import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NextObserver, Observable, timer } from 'rxjs';
import { retryWhen, tap, delayWhen } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private chatWs$?: WebSocketSubject<any>;
  private activitiesWs$?: WebSocketSubject<any>;
  retryTime = 1000 * 20;

  constructor(private message: NzMessageService) {}

  private getWebSocket = (
    url: string,
    closeObserver: NextObserver<CloseEvent>
  ) => {
    return webSocket({
      url,
      closeObserver,
    });
  };

  public connectActivitiesWs = () => {
    const url =
      environment.wsEndpoint + '/activities/?token=' + this.getToken();
    if (!this.activitiesWs$ || this.activitiesWs$.closed) {
      this.activitiesWs$ = this.getWebSocket(url, {
        next: () => {
          this.message.info('Reconnect activity ws');
          this.connectActivitiesWs();
        },
      });
    }
  };

  public activitiesObservable = (): Observable<any> => {
    if (!this.activitiesWs$ || this.activitiesWs$.closed) {
      throw Error('connect first');
    }
    return this.activitiesWs$?.pipe(
      retryWhen((errors) =>
        errors.pipe(
          tap((value) => this.message.warning('Activity ws disconnect')),
          delayWhen((value) => timer(this.retryTime))
        )
      )
    );
  };

  public connectChatWs = (project_id: string) => {
    const url =
      environment.wsEndpoint +
      '/chat/projects/' +
      project_id +
      '/?token=' +
      this.getToken();
    if (!this.chatWs$ || this.chatWs$.closed) {
      this.chatWs$ = this.getWebSocket(url, {
        next: () => {
          this.message.info('Chat ws reconnect');
          this.connectChatWs(project_id);
        },
      });
    }
  };

  public disconnectChatWs = () => {
    if (this.chatWs$ && this.chatWs$.closed) {
      this.chatWs$.complete();
      this.chatWs$ = undefined;
    }
  };

  public chatObservable = () => {
    if (!this.chatWs$ || this.chatWs$.closed) {
      throw Error('connect first');
    }
    return this.chatWs$?.pipe(
      retryWhen((errors) =>
        errors.pipe(
          tap((value) => this.message.warning('Chat ws disconnect')),
          delayWhen((value) => timer(this.retryTime))
        )
      )
    );
  };

  public chatSend = (data: any) => {
    if (!this.chatWs$ || this.chatWs$.closed) {
      throw Error('connect first');
    }
    this.chatWs$?.next(data);
  };

  private getToken = () => {
    return localStorage.getItem('access_token');
  };
}
