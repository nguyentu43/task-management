import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ProjectResolver } from '../../core/resolvers/project.resolver';
import { TaskPageComponent } from './pages/task/task.component';
import { TaskResolver } from 'src/app/core/resolvers/task.resolver';
import { EditProjectGuard } from 'src/app/core/guards/edit-project.guard';
import { PermissionProjectGuard } from 'src/app/core/guards/permission-project.guard';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create',
    component: EditComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
    canActivate: [PermissionProjectGuard],
    resolve: {
      project: ProjectResolver,
    },
  },
  {
    path: ':id/edit',
    component: EditComponent,
    canActivate: [EditProjectGuard],
    resolve: {
      project: ProjectResolver,
    },
  },
  {
    path: ':id/tasks/:task_id',
    component: TaskPageComponent,
    canActivate: [PermissionProjectGuard],
    resolve: {
      task: TaskResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
