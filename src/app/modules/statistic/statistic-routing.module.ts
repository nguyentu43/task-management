import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './pages/event-list/event-list.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: EventListComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticRoutingModule {}
