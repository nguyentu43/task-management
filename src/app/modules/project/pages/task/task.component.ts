import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  Observable,
  BehaviorSubject,
  skipWhile,
  debounceTime,
  switchMap,
} from 'rxjs';
import { TodoItem, Tag, Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';
import { ProfileState } from 'src/app/store/profile/profile.reducer';
import { TagsState } from 'src/app/store/tags/tags.actions';
import { TASK_STATUS } from '../../../../shared/task-status.contants';

@Component({
  selector: 'app-task-page',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskPageComponent implements OnInit {
  task: Task;
  profileState$: Observable<ProfileState>;
  tagsState$: Observable<TagsState>;
  taskChange$ = new BehaviorSubject<Task | null>(null);
  range_date: string[] | null = null;

  constructor(
    private store: Store<AppState>,
    private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    @Inject(TASK_STATUS) public colors: any
  ) {
    this.task = route.snapshot.data['task'];
    
    this.setRangeDate(this.task);

    this.profileState$ = store.select((state) => state.profile);
    this.tagsState$ = store.select((state) => state.tags);

    this.taskChange$
      .pipe(
        skipWhile((task) => task === null),
        debounceTime(500),
        switchMap((task) => {
          const data: any = task;
          const projectPk = task?.project?.id + '';
          delete data['owner'];
          delete data['project'];
          data['section_id'] = data['section'].id;
          delete data['section'];
          data['tags'] = data['tags'].map((t: Tag) => t.id);
          return this.api.apiProjectsTasksUpdate({
            projectPk,
            id: task?.id + '',
            data,
          });
        })
      )
      .subscribe((task) => {
        this.task = task;
        this.setRangeDate(task);
        this.message.success('Task was saved');
      });
  }

  private setRangeDate(task:Task) {
    if (task.start_datetime && task.end_datetime) {
      this.range_date = [task.start_datetime, task.end_datetime];
    }
    else {
      this.range_date = null;
    }
  }

  ngOnInit(): void {}

  compareWithTagsSelect = (t1: Tag, t2: Tag) => t1?.id === t2?.id;

  setTask(props: Partial<Task>) {
    return { ...this.task, ...props };
  }

  changeTask(task: Task) {
    if (!task.title) {
      this.message.warning('This field is required');
      return;
    }
    this.taskChange$.next(task);
  }

  removeTask() {
    this.api
      .apiProjectsTasksDelete({
        projectPk: this.task.project?.id + '',
        id: this.task.id + '',
      })
      .subscribe((_) => {
        this.router.navigate(['/projects', this.task.project?.id]);
      });
  }

}
