import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, debounceTime, skipWhile, switchMap } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Project, Tag } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { AppState } from 'src/app/store/app.reducer';
import * as TagsAction from 'src/app/store/tags/tags.actions';

@Component({
  selector: 'app-tags-management',
  templateUrl: './tags-management.component.html',
  styleUrls: ['./tags-management.component.scss']
})
export class TagsManagementComponent {

  isVisible = false
  tags: Tag[] = []
  project: Project
  tagChange$ = new BehaviorSubject<null | Tag>(null)

  constructor(
    private store:Store<AppState>,
    private message: NzMessageService,
    private api:ApiService, 
    private route:ActivatedRoute) {
    store.select(state=>state.tags).subscribe(data => {
      this.tags = data.map(item => Object.assign({}, item));
    });
    this.project = route.snapshot.data['project'];

    this.tagChange$.pipe(
      skipWhile(tag => tag === null),
      tap(_ => this.message.loading('Tag saving...')),
      debounceTime(500),
      switchMap(tag => api.apiProjectsTagsUpdate({
        projectPk: this.project.id + '',
        id: tag!.id + '',
        data: tag!
      }))
    )
    .subscribe(tag => {
      const index = this.tags.findIndex(v => v.id === tag.id);
      this.tags.splice(index, 1, tag);
      this.message.remove();
      this.message.success(`Tag "${tag.name}" saved`);
    });
  }

  showModal(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }

  setTag(tag: Tag, props: Partial<Tag>){
    return {...tag, ...props};
  }

  changeTag(tag: Tag){
    if(tag.name === ''){
      this.message.warning('Tag name is required');
      return;
    }
    this.tagChange$.next(tag);
  }

  addTag(){
    this.api.apiProjectsTagsCreate({
      projectPk: this.project.id + '',
      data: {
        name: 'New tag',
        color: '#FF6B6B'
      }
    })
    .subscribe(tag => {
      this.tags = this.tags.concat(tag);
      this.store.dispatch(TagsAction.loadProfileSuccess({data: this.tags}));
      this.message.success('New tag was added');
    });
  }

  removeTag(id:string){
    this.api.apiProjectsTagsDelete({
      projectPk: this.project.id + '',
      id
    })
    .subscribe(() => {
      this.tags = this.tags.filter(tag => tag.id + '' !== id);
      this.store.dispatch(TagsAction.loadProfileSuccess({data: this.tags}));
      this.message.success('Tag was deleted');
    });
  }

}
