import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/api/models';
import { AppState } from 'src/app/store/app.reducer';
import { ProfileState } from 'src/app/store/profile/profile.reducer';
import { formatDistance, parseISO } from 'date-fns';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnChanges {
  @Input() comment!: Comment;
  isEdit = false;
  @Output('remove') removeComment = new EventEmitter();
  profileState$: Observable<ProfileState>;

  constructor(private store: Store<AppState>, private api: ApiService) {
    this.profileState$ = store.select((state) => state.profile);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.comment.created_at = formatDistance(
      parseISO(this.comment!.created_at!),
      new Date()
    );
  }

  ngOnInit(): void {}

  edit() {
    this.isEdit = true;
  }

  afterEdit(comment: Comment) {
    this.updateComment(comment);
    this.isEdit = false;
  }

  private updateComment(comment: Comment) {
    this.comment = comment;
    this.comment.created_at = formatDistance(
      parseISO(this.comment!.created_at!),
      new Date()
    );
  }

  remove() {
    this.removeComment.emit(this.comment);
  }

  like(id: string) {
    const data: any = {
      likes: this.comment.likes?.concat(id),
    };

    this.api
      .apiProjectsTasksCommentsPartialUpdate({
        taskPk: this.comment.task?.id + '',
        projectPk: this.comment.task?.project?.id + '',
        id: this.comment.id + '',
        data,
      })
      .subscribe((comment) => {
        this.updateComment(comment);
      });
  }

  unlike(removeId: string) {
    const data: any = {
      likes: this.comment.likes?.filter((id) => id !== removeId),
    };

    this.api
      .apiProjectsTasksCommentsPartialUpdate({
        taskPk: this.comment.task?.id + '',
        projectPk: this.comment.task?.project?.id + '',
        id: this.comment.id + '',
        data,
      })
      .subscribe((comment) => {
        this.updateComment(comment);
      });
  }
}
