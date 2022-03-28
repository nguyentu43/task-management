import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { MainComponent } from './main/main.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RouterModule } from '@angular/router';
import { WsModule } from '../modules/ws/ws.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NzResultModule } from 'ng-zorro-antd/result';

@NgModule({
  declarations: [MainComponent, NotFoundComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzTypographyModule,
    NzMenuModule,
    NzGridModule,
    NzIconModule,
    NzDropDownModule,
    NzButtonModule,
    NzToolTipModule,
    NzAvatarModule,
    RouterModule,
    WsModule,
    NzResultModule,
  ],
})
export class LayoutModule {}
