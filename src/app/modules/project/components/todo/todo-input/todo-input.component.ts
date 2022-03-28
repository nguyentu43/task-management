import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, debounceTime, skipWhile, switchMap } from 'rxjs';
import { TodoItem, Profile } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  @Input() todo: TodoItem = {
    title: 'New todo',
  };
  @Output() remove = new EventEmitter();
  @Output() change = new EventEmitter();
  todoChange$ = new BehaviorSubject<TodoItem | null>(null);

  constructor(private api: ApiService, private message: NzMessageService) {
    this.todoChange$
      .pipe(
        skipWhile((todo) => todo === null),
        debounceTime(500),
        switchMap((todo) => {
          const data: any = todo!;
          const projectPk = data.task!.project!.id + '';
          const taskPk = data.task!.id + '';
          data.participants = data.participants?.map((p: Profile) => p.id);
          delete data['owner'];
          delete data['task'];
          return this.api.apiProjectsTasksTodoUpdate({
            projectPk,
            taskPk,
            id: todo!.id + '',
            data,
          });
        })
      )
      .subscribe((todo) => {
        this.todo = todo;
        this.message.success('Todo was saved');
        this.change.emit(todo);
      });
  }

  setTodo(props: Partial<TodoItem>): TodoItem {
    return { ...this.todo, ...props };
  }

  changeTodo(todo: TodoItem) {
    if (todo.title === '') {
      this.message.warning('Todo title is required');
      return;
    }
    this.todoChange$.next(todo);
  }

  ngOnInit(): void {}
}
