import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { ProjectRoutingModule } from './project-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { DetailComponent } from './pages/detail/detail.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageServiceModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SectionComponent } from './components/section/section.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { TaskComponent } from './components/task/task.component'
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import { taskStatus, TASK_STATUS } from './task-status.contants';
import { TodoInputComponent } from './components/todo/todo-input/todo-input.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import { TagsManagementComponent } from './components/tags-management/tags-management.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import { CommentComponent } from './components/comment/comment/comment.component';
import { EditCommentComponent } from './components/comment/edit-comment/edit-comment.component';
import { BoxCommentComponent } from './components/comment/box-comment/box-comment.component';
import { TaskPageComponent } from './pages/task/task.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import {NzCommentModule} from 'ng-zorro-antd/comment';
import {NzListModule} from 'ng-zorro-antd/list';


@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    DetailComponent,
    ProjectFormComponent,
    SectionComponent,
    TaskComponent,
    UploadFileComponent,
    ActivitiesComponent,
    TodoInputComponent,
    TagsManagementComponent,
    ColorPickerComponent,
    TaskPageComponent,
    CommentComponent,
    EditCommentComponent,
    BoxCommentComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzTypographyModule,
    NzGridModule,
    NzUploadModule,
    SharedModule,
    NzCheckboxModule,
    NzSkeletonModule,
    NzCommentModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzProgressModule,
    NzSelectModule,
    NzTimelineModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageServiceModule,
    NzCardModule,
    NzDividerModule,
    NzSpaceModule,
    NzSpinModule,
    NzIconModule,
    NzPopoverModule,
    NzAvatarModule,
    FormsModule,
    NzModalModule,
    NzToolTipModule,
    NzTagModule,
    NzListModule
  ],
  providers: [
    {provide: TASK_STATUS, useValue: taskStatus}
  ]
})
export class ProjectModule { }
