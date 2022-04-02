import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { ApiService } from 'src/app/api/services';
import { isSameMonth, parseISO } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { Task } from 'src/app/api/models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  month: Date = new Date();
  timelineChart: GoogleChartInterface = {
    chartType: GoogleChartType.Timeline,
    dataTable: [],
    options: {
      title: 'Tasks Timeline',
    },
  };

  sameMonthTasks: Task[] = [];

  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filterTasks();
  }

  filterTasks() {
    this.api.apiTasksList().subscribe((tasks) => {
      this.sameMonthTasks = tasks.filter((task) => {
        if (task.start_datetime && task.end_datetime) {
          return (
            isSameMonth(parseISO(task.start_datetime), this.month) ||
            isSameMonth(parseISO(task.end_datetime), this.month)
          );
        }
        return false;
      });

      if (this.sameMonthTasks.length === 0) {
        this.message.info('No tasks are in this month');
        return;
      }

      this.timelineChart.dataTable = this.sameMonthTasks.map((task) => [
        task.title,
        parseISO(task.start_datetime!),
        parseISO(task.end_datetime!),
      ]);
      this.timelineChart.dataTable.unshift(['Name', 'From', 'To']);
      this.timelineChart.component?.draw();
    });
  }

  clickTask(data: any) {
    const task = this.sameMonthTasks[data.row];
    this.router.navigate(['projects', task.project?.id, 'tasks', task.id]);
  }
}
