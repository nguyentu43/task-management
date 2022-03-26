import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItem } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  todoMap:any = {}
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
    )
  }

  ngOnInit(): void {
  }

  getTodos(date:string, format:string){
    return this.todoMap[formatDate(date, format, this.locale)];
  }

  goToTask(todo:TodoItem){
    this.router.navigate([`/projects/${todo.task?.project?.id}/tasks/${todo.task?.id}`]);
  }

}
