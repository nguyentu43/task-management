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
import { ProjectFormComponent } from './forms/project-form/project-form.component';
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
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    DetailComponent,
    ProjectFormComponent,
    SectionComponent,
    TaskComponent,
    TaskModalComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzTypographyModule,
    NzGridModule,
    SharedModule,
    NzSkeletonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzButtonModule,
    NzMessageServiceModule,
    NzCardModule,
    NzDividerModule,
    NzIconModule,
    NzPopoverModule,
    NzAvatarModule,
    FormsModule,
    NzModalModule,
    NzToolTipModule
  ]
})
export class ProjectModule { }
