import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comment, Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';
import { ProfileState } from 'src/app/store/profile/profile.reducer';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  @Input() comment:Comment = {
    content: ''
  }
  profileState$: Observable<ProfileState>
  submitting = false
  @Output() afterSubmit = new EventEmitter()
  task: Task

  constructor(private store:Store<AppState>, private api:ApiService, private route:ActivatedRoute) {
    this.profileState$ = store.select(state=>state.profile);
    this.task = route.snapshot.data['task'];
  }

  ngOnInit(): void {
  }

  handleSubmit(){
    if(this.comment.id){
      this.api.apiProjectsTasksCommentsUpdate({
        taskPk: this.task?.id + '',
        projectPk: this.task?.project + '',
        id: this.comment.id + '',
        data: {
          content: this.comment.content
        }
      })
      .subscribe(comment => {
        this.afterSubmit.emit(comment);
      });
    }
    else{
      this.api.apiProjectsTasksCommentsCreate({
        taskPk: this.task?.id + '',
        projectPk: this.task?.project + '',
        data: {
          content: this.comment.content
        }
      })
      .subscribe(comment => {
        this.comment.content = '';
        this.afterSubmit.emit(comment);
      });
    }
  }

}
