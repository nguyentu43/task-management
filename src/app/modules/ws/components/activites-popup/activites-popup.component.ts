import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { AuthService } from 'src/app/core/services/auth.service';
import { WebSocketService } from 'src/app/core/services/web-socket.service';
import { taskStatus } from 'src/app/shared/task-status.contants';

@Component({
  selector: 'app-activites-popup',
  templateUrl: './activites-popup.component.html',
  styleUrls: ['./activites-popup.component.scss'],
})
export class ActivitesPopupComponent implements OnInit, OnDestroy {
  activites: Activity[] = [];
  loading = true;
  activitesSubscription!: Subscription;
  activityCount = 0;
  isVisible = false;

  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private ws: WebSocketService,
    private auth: AuthService
  ) {
    if (!auth.isAuthenticated()) {
      return;
    }

    this.api.apiActivitiesList().subscribe((data) => {
      this.loading = false;
      this.activites = data;
    });

    ws.connectActivitiesWs();
    this.activitesSubscription = ws
      .activitiesObservable()
      .subscribe((activity) => {
        this.activites = this.activites.concat({
          ...activity,
          task: { id: activity.task },
        });
        this.activityCount++;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.activitesSubscription?.unsubscribe();
  }
}
