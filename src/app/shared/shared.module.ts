import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './components/empty/empty.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AvatarGroupComponent } from './components/avatar-group/avatar-group.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RouterModule } from '@angular/router';
import { ProfileSelectComponent } from './components/profile-select/profile-select.component';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmptyComponent,
    AvatarGroupComponent,
    ProjectCardComponent,
    ProfileSelectComponent
  ],
  imports: [
    CommonModule,
    NzEmptyModule,
    NzButtonModule,
    NzAvatarModule,
    NzCardModule,
    NzDescriptionsModule,
    NzTypographyModule,
    RouterModule,
    NzSelectModule,
    NzAvatarModule,
    FormsModule
  ],
  exports: [EmptyComponent, AvatarGroupComponent, ProjectCardComponent, ProfileSelectComponent]
})
export class SharedModule { }
