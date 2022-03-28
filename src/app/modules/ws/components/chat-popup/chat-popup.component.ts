import { DOCUMENT } from '@angular/common';
import {
  Component,
  AfterViewChecked,
  Inject,
  AfterContentInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, Subscription } from 'rxjs';
import { Message } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { AuthService } from 'src/app/core/services/auth.service';
import { WebSocketService } from 'src/app/core/services/web-socket.service';
import { AppState } from 'src/app/store/app.reducer';
import { ProfileState } from 'src/app/store/profile/profile.reducer';

@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss'],
})
export class ChatPopupComponent implements OnDestroy, AfterViewInit {
  showButton = false;
  messageCount = 0;
  messageSubscription?: Subscription;
  messages: Message[] = [];
  content = '';
  isVisible = false;
  offset = 0;
  projectId = '';
  limit = 10;
  loading = false;
  profileState$: Observable<ProfileState>;
  isEnd = false;
  @ViewChildren('messages') viewMessages!: QueryList<any>;
  viewMessagesSubscription?: Subscription;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    @Inject(DOCUMENT) private document: Document,
    private auth: AuthService,
    private ref: ChangeDetectorRef,
    private ws: WebSocketService,
    private api: ApiService
  ) {
    this.profileState$ = store.select((state) => state.profile);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (!auth.isAuthenticated()) {
          return;
        }

        this.showButton = /^\/projects\/[0-9]+$/.test(event.url);
        if (!this.showButton) return;
        this.projectId = event.url.replace('/projects/', '');
        this.isEnd = false;

        this.ws.disconnectChatWs();
        this.offset = 0;
        this.ws.connectChatWs(this.projectId);
        this.getMessages();
        this.messageSubscription = this.ws
          .chatObservable()
          .subscribe((message) => {
            this.messages = this.messages.concat(message);
            if (!this.isVisible) this.messageCount++;
            this.subscribeChangeMessages();
          });
      });
  }

  ngAfterViewInit(): void {
    this.subscribeChangeMessages();
  }

  private subscribeChangeMessages() {
    this.viewMessagesSubscription = this.viewMessages.changes.subscribe((_) => {
      this.scrollToBottom();
    });
  }

  ngOnDestroy(): void {
    this.messageSubscription?.unsubscribe();
  }

  getMessages() {
    this.loading = true;
    this.viewMessagesSubscription?.unsubscribe();
    this.api
      .apiProjectsMessagesList({
        projectPk: this.projectId,
        offset: this.offset,
        limit: this.limit,
      })
      .subscribe((data) => {
        this.offset += data.results.length;
        this.messages = [...data.results.reverse(), ...this.messages];
        if (data.results.length === 0) {
          this.isEnd = true;
        }
        this.loading = false;
      });
  }

  send() {
    this.viewMessagesSubscription?.unsubscribe();
    this.ws.chatSend({ content: this.content });
    this.content = '';
  }

  scrollToBottom() {
    const lastItem = this.document.querySelector(
      '.chatbox nz-list-item:last-child'
    );
    lastItem?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  removeMessage(message: any) {
    this.api
      .apiProjectsMessagesUpdate({
        projectPk: this.projectId,
        id: message.id,
        data: {
          content: '***DELETE***',
        },
      })
      .subscribe((data) => {
        const index = this.messages.findIndex((ms) => ms.id === message.id);
        this.messages.splice(index, 1, data);
      });
  }
}
