import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Task, TodoItem } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoItems: TodoItem[] = []
  percentTodo = 0
  task: Task
  loading = false;
  
  constructor(private route:ActivatedRoute, private api:ApiService, private message:NzMessageService) {
    this.task = route.snapshot.data['task'];
  }

  ngOnInit(): void {
    this.loading = true;
    this.api.apiProjectsTasksTodoList({
      projectPk: this.task.project!.id + '',
      taskPk: this.task.id + ''
    })
    .subscribe(data => {
      this.todoItems = data;
      this.loading = false;
      this.calcProgress();
    });
  }

  addTodo = () => {
    this.api.apiProjectsTasksTodoCreate({
      projectPk: this.task.project?.id + '',
      taskPk: this.task.id + '',
      data: {
        title: 'New todo',
      }
    })
    .subscribe(todo => {
      this.message.success('New todo was created');
      this.todoItems = this.todoItems.concat(todo);
      this.calcProgress();
    });
  }

  removeTodo = (id:string) => {
    this.api.apiProjectsTasksTodoDelete({
      projectPk: this.task.project?.id + '',
      taskPk: this.task.id + '',
      id
    })
    .subscribe(_ => {
      this.message.success('New todo was deleted');
      this.todoItems = this.todoItems.filter(i => i.id + '' !== id);
      this.calcProgress();
    });
  }

  changeTodo(todo:TodoItem){
    const index = this.todoItems.findIndex(({id}) => id === todo.id)
    this.todoItems[index] = todo;
    this.calcProgress();
  }

  calcProgress(){
    const completedTodoItems = this.todoItems.reduce((pre, todo) => pre + (todo.is_done ? 1: 0), 0)
    this.percentTodo = Math.round((completedTodoItems / this.todoItems.length) * 100);
  }

}
