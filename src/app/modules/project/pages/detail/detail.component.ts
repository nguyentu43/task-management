import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { Project, Tag } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';
import { SectionWithTasks } from '../../section.interface';
import * as TagsAction from 'src/app/store/tags/tags.actions';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProfileState } from 'src/app/store/profile/profile.reducer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  project: Project
  sections: SectionWithTasks[] = []
  tags: Tag[] = []
  isLoading = true;
  profileState$:Observable<ProfileState>

  constructor(private api:ApiService,
    private message: NzMessageService,
    private route:ActivatedRoute, 
    private store:Store<AppState>) {
      this.profileState$ = store.select(state=>state.profile);
    this.project = this.route.snapshot.data['project'];
    const id = this.project.id + '';
    forkJoin([
      api.apiProjectsSectionsList(id),
      api.apiProjectsTagsList(id),
      api.apiProjectsTasksList(id)
    ])
    .subscribe(([sections, tags, tasks]) => {
      this.sections = sections.map((section)=>{
        const filterTasks = tasks.filter(task => task.section?.id === section.id)
                            .sort((t1, t2) => t1.order - t2.order);
        return {
          ...section,
          tasks: filterTasks
        }
      })
      this.tags = tags;
      this.store.dispatch(TagsAction.loadProfileSuccess({ data: tags }));
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
  }

  removeSection(id:string){
    this.api.apiProjectsSectionsDelete({
      projectPk:this.project.id + '',
      id
    })
    .subscribe(_ => {
      this.sections = this.sections?.filter(i => i.id + '' !== id);
      this.message.success('Section was deleted');
    });
  }

  addSection(){
    const data : any = {
      name: 'New section',
      color: '#FF6B6B',
      project: this.project.id
    };
    
    this.api.apiProjectsSectionsCreate({
      projectPk: data['project'] + '',
      data
    })
    .subscribe(section => {
      this.message.success('New section was created');
      this.sections = this.sections?.concat({ ...section, tasks: [] });
    })
  }

}
