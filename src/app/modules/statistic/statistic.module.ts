import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './pages/event-list/event-list.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { StatisticRoutingModule } from './statistic-routing.module';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageServiceModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [EventListComponent, TimelineComponent],
  imports: [
    CommonModule,
    NzBadgeModule,
    NzCalendarModule,
    NzDatePickerModule,
    StatisticRoutingModule,
    Ng2GoogleChartsModule,
    FormsModule,
    NzButtonModule,
    NzMessageServiceModule,
  ],
})
export class StatisticModule {}
