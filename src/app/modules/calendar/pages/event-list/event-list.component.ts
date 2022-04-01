import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { isBefore, parseISO, format } from 'date-fns';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  todoMap: any = {};
  taskMap: any = {};
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.apiTodoItemsList().subscribe((data) => {
      const todoMap: any = {};
      for (let todo of data) {
        const date = format(
          parseISO(todo.due_datetime ?? todo.created_at!),
          'dd/MM/yyyy'
        );
        const month = format(
          parseISO(todo.due_datetime ?? todo.created_at!),
          'MM/yyyy'
        );
        if (!todoMap[date]) todoMap[date] = [];
        if (!todoMap[month]) todoMap[month] = [];
        todoMap[date].push(todo);
        todoMap[month].push(todo);
      }
      this.todoMap = todoMap;
    });

    this.api.apiTasksList().subscribe((data) => {
      const taskMap: any = {};
      for (let task of data) {
        const date = format(
          parseISO(task.due_datetime ?? task.created_at!),
          'dd/MM/yyyy'
        );
        const month = format(
          parseISO(task.due_datetime ?? task.created_at!),
          'MM/yyyy'
        );
        if (!taskMap[date]) taskMap[date] = [];
        if (!taskMap[month]) taskMap[month] = [];
        taskMap[date].push(task);
        taskMap[month].push(task);
      }
      this.taskMap = taskMap;
    });
  }

  getItemsFromMap(dataMap: any, date: Date, formatStr: string) {
    return dataMap[format(date, formatStr)];
  }

  goToTask(task: Task) {
    this.router.navigate([`/projects/${task?.project?.id}/tasks/${task?.id}`]);
  }

  public isBeforeNow(date?: string) {
    if (!date) return '';
    const dueDt = parseISO(date);
    return isBefore(dueDt, new Date()) ? ' (Overdue)' : '';
  }
}
