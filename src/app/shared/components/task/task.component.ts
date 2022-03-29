import {
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { parseISO, isBefore } from 'date-fns';
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

  public isBeforeNow(date:string){
    const dueDt = parseISO(date);
    return isBefore(dueDt, new Date());
  }
}
