import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPopupComponent } from './components/chat-popup/chat-popup.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import{NzBadgeModule} from 'ng-zorro-antd/badge';
import{NzListModule} from 'ng-zorro-antd/list';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import { ActivitesPopupComponent } from './components/activites-popup/activites-popup.component';
import {NzTagModule} from 'ng-zorro-antd/tag';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import {NzSpinModule} from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    ChatPopupComponent,
    ActivitesPopupComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzSpinModule,
    NzTagModule,
    RouterModule,
    NzBadgeModule,
    NzPopoverModule,
    NzListModule,
    NzInputModule,
    FormsModule
  ],
  exports: [ChatPopupComponent, ActivitesPopupComponent]
})
export class WsModule { }
