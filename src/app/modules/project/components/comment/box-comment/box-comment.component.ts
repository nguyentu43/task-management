import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, Comment } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-box-comment',
  templateUrl: './box-comment.component.html',
  styleUrls: ['./box-comment.component.scss'],
})
export class BoxCommentComponent implements OnInit {
  task: Task;
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.task = route.snapshot.data['task'];
  }

  ngOnInit(): void {
    this.api
      .apiProjectsTasksCommentsList({
        taskPk: this.task.id + '',
        projectPk: this.task.project?.id + '',
      })
      .subscribe((data) => (this.comments = data));
  }

  removeComment(comment: Comment) {
    this.api
      .apiProjectsTasksCommentsDelete({
        projectPk: comment.task?.project?.id + '',
        taskPk: comment.task?.id + '',
        id: comment.id + '',
      })
      .subscribe((_) => {
        this.comments = this.comments.filter((c) => c.id !== comment.id);
      });
  }

  addComment(comment: Comment) {
    this.comments = this.comments.concat(comment);
  }
}
