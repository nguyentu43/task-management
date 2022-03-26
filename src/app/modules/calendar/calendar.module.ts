import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './pages/event-list/event-list.component';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import { CalendarRoutingModule } from './calendar-routing.module';


@NgModule({
  declarations: [
    EventListComponent
  ],
  imports: [
    CommonModule,
    NzBadgeModule,
    NzCalendarModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
