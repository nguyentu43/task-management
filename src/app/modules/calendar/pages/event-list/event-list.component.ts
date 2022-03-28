import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task, TodoItem } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  todoMap:any = {}
  taskMap:any={}
  constructor(private api:ApiService, @Inject(LOCALE_ID) private locale:string, private router:Router) {
    this.api.apiTodoItemsList().subscribe(
      data => {
        const todoMap:any = {};
        for(let todo of data){
          const date = formatDate(todo.due_datetime ?? todo.created_at!, 'dd/MM/YYYY', locale);
          const month = formatDate(todo.due_datetime ?? todo.created_at!, 'MM/YYYY', locale);
          if(!todoMap[date]) todoMap[date] = [];
          if(!todoMap[month]) todoMap[month] = [];
          todoMap[date].push(todo);
          todoMap[month].push(todo);
        }
        this.todoMap = todoMap;
      }
    );

    this.api.apiTasksList().subscribe(
      data => {
        const taskMap:any={};
        for(let task of data){
          const date = formatDate(task.due_datetime ?? task.created_at!, 'dd/MM/YYYY', locale);
          const month = formatDate(task.due_datetime ?? task.created_at!, 'MM/YYYY', locale);
          if(!taskMap[date]) taskMap[date] = [];
          if(!taskMap[month]) taskMap[month] = [];
          taskMap[date].push(task);
          taskMap[month].push(task);
        }
        this.taskMap = taskMap;
      }
    )
  }

  ngOnInit(): void {
  }

  getItemsFromMap(dataMap: any, date:string, format:string){
    return dataMap[formatDate(date, format, this.locale)];
  }

  goToTask(task:Task){
    this.router.navigate([`/projects/${task?.project?.id}/tasks/${task?.id}`]);
  }

}
