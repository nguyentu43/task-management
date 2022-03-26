import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  @Input() task!: Task
  activities: Activity[] = []
  loading = false

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.api.apiProjectsTasksGetActivities({
      projectPk: this.task.project?.id + '',
      id: this.task.id + ''
    })
    .subscribe(data => {
      this.activities = data;
      this.loading = false;
    });
  }

}
