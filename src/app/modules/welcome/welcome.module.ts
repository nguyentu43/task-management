import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzButtonModule,
    NzImageModule,
    NzIconModule,
    NzDividerModule,
  ],
})
export class WelcomeModule {}
