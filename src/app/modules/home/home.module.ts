import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTypographyModule,
    NzGridModule,
    SharedModule,
    NzSkeletonModule
  ]
})
export class HomeModule { }
