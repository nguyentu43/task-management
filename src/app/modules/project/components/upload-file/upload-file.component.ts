import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { from, mergeMap, of} from 'rxjs';
import {map,takeLast, tap} from 'rxjs/operators'; 
import { Task } from 'src/app/api/models';
import { StorageService } from 'src/app/api/services';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  attachments: NzUploadFile[] = []
  task: Task
  uploading = false
  loading = false

  constructor(private storage:StorageService, private message: NzMessageService, private route:ActivatedRoute) {
    this.task = this.route.snapshot.data['task'];
  }

  ngOnInit(): void {
    // this.getFiles();
  }

  beforeUpload = (file:NzUploadFile) => {
    this.attachments = this.attachments.concat(file);
    return false;
  }

  handleRemove = (file:NzUploadFile) => {
    this.message.loading(`"${file.name}" deleting`)
    return this.storage.storageFileDelete({
      filename: file.name,
      taskPk:this.task.id + '',
      projectPk:this.task.project!.id + ''
    })
    .pipe(
      tap((_) => {
        this.message.remove();
        this.message.success(`"${file.name}" has been deleted`);
      }),
      mergeMap((_) => {
        return of(true);
      })
    )
  }

  handleUpload = () => {
    this.uploading = true;
    const files = [...this.attachments];
    this.attachments = [];

    from(files)
    .pipe(
      mergeMap(file => {
        if(!(file instanceof File)){
          return of<Pick<NzUploadFile, 'uid'| 'name'>>(file)
        }
        return this.storage.storageCreate({
          taskPk: this.task.id + '',
          projectPk: this.task.project!.id + '',
          file: file
        }).pipe(map(file => ({
          uid: file.filename,
          name: file.filename,
          status: 'done',
          url: `${this.storage.rootUrl}/storage/${this.task.project!.id}/${this.task.id}/${file.filename}`
        })))
      }),
      tap(file => this.attachments = this.attachments.concat(file)),
      takeLast(1)
    )
    .subscribe((_) => {
      this.uploading = false;
    });
  }

  private getFiles() {
    this.loading = true;
    this.storage.storageRead({
      projectPk: this.task.project!.id + '',
      taskPk: this.task.id + ''
    })
      .subscribe(files => {
        this.attachments = files.map(f => ({
          uid: f.filename,
          name: f.filename,
          status: 'done',
          url: `${this.storage.rootUrl}/storage/${this.task.project!.id}/${this.task.id}/${f.filename}`
        }));
        this.loading = false;
      });
  }
}
