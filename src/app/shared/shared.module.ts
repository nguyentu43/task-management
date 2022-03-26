import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './components/empty/empty.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AvatarGroupComponent } from './components/avatar-group/avatar-group.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RouterModule } from '@angular/router';
import { ProfileSelectComponent } from './components/profile-select/profile-select.component';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';


@NgModule({
  declarations: [
    EmptyComponent,
    AvatarGroupComponent,
    ProfileSelectComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    NzEmptyModule,
    NzButtonModule,
    NzAvatarModule,
    NzTypographyModule,
    RouterModule,
    NzSelectModule,
    NzGridModule,
    NzDividerModule,
    NzAvatarModule,
    FormsModule,
    NzIconModule,
    NzTagModule
  ],
  exports: [EmptyComponent, AvatarGroupComponent, ProfileSelectComponent, ProjectCardComponent]
})
export class SharedModule { }
