import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy{

  nowDateTime: Date = new Date()
  private nowSubscription: Subscription

  constructor(public api: ApiService) {
    this.nowSubscription = interval(1000 * 60)
    .pipe(map(() => new Date()))
    .subscribe(dt => {
      this.nowDateTime = dt;
    });
  }

  ngOnDestroy(): void {
    this.nowSubscription.unsubscribe();
  }
}
