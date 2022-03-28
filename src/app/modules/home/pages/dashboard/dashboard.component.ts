import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, interval, Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity, Project, Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, OnInit {
  nowDateTime: Date = new Date();
  private nowSubscription: Subscription;

  projects: Project[] = [];
  tasks: Task[] = [];
  loading = false;

  constructor(public api: ApiService) {
    this.nowSubscription = interval(1000)
      .pipe(map(() => new Date()))
      .subscribe((dt) => {
        this.nowDateTime = dt;
      });
  }
  ngOnInit(): void {
    this.loading = true;

    forkJoin([this.api.apiProjectsList(), this.api.apiTasksList()]).subscribe(
      ([projects, tasks]) => {
        this.projects = projects;
        this.tasks = tasks;
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.nowSubscription.unsubscribe();
  }
}
