import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzImageModule,
    NzIconModule,
    NzDividerModule,
    NzTypographyModule
  ]
})
export class WelcomeModule {
}
