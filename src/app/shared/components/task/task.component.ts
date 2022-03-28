import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from 'src/app/api/models';
import { TASK_STATUS } from '../../task-status.contants';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  constructor(@Inject(TASK_STATUS) public colors: any) {}

  ngOnInit(): void {}
}
