import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ProjectResolver } from './project.resolver';

const routes:Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: EditComponent
    },
    {
        path: ':id',
        component: DetailComponent,
        resolve: {
            project: ProjectResolver
        }
    },
    {
        path: ':id/edit',
        component: EditComponent,
        resolve: {
            project: ProjectResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule{}