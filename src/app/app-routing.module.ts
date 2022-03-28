import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutModule } from './layout/layout.module';
import { MainComponent } from './layout/main/main.component';
import { ErrorComponent } from './layout/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/welcome/welcome.module').then(
            (m) => m.WelcomeModule
          ),
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'projects',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/project/project.module').then(
            (m) => m.ProjectModule
          ),
      },
      {
        path: 'calendar',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },
      {
        path: ':error',
        component: ErrorComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    LayoutModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
