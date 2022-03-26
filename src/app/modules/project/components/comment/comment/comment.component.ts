import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/api/models';
import { AppState } from 'src/app/store/app.reducer';
import { ProfileState } from 'src/app/store/profile/profile.reducer';
import {formatDistance, parseISO} from 'date-fns';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comment
  isEdit = false
  @Output('remove') removeComment = new EventEmitter()
  profileState$:Observable<ProfileState>

  constructor(private store:Store<AppState>) {
    this.profileState$ = store.select(state=>state.profile);
   }

  ngOnInit(): void {
    this.comment.updated_at = formatDistance(parseISO(this.comment!.updated_at!), new Date());
  }

  edit(){
    this.isEdit = true;
  }

  afterEdit(comment:Comment){
    this.comment = comment;
    this.isEdit = false;
  }

  remove(){
    this.removeComment.emit(this.comment);
  }

}
