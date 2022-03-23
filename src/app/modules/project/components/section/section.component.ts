import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, debounceTime, skipWhile, switchMap, tap } from 'rxjs';
import { Section } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { SectionWithTasks } from '../../section.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section?: SectionWithTasks
  popupVisible = false
  colors: string[] = [ '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#533E85']
  @Input() projectPk = ''
  sectionChange$ = new BehaviorSubject<Partial<Section> | null>(null)

  constructor(private api:ApiService, private message: NzMessageService) {
    this.sectionChange$.pipe(
      skipWhile(section => section === null),
      debounceTime(500),
      switchMap(section => {
        this.message.loading('Section saving...');
        const data = Object.assign({}, this.section, section);
        delete data['project'];
        delete data['tasks'];
        return this.api.apiProjectsSectionsPartialUpdate({
          projectPk: this.projectPk,
          id: this.section?.id + '',
          data
        });
      }
    ))
    .subscribe(section => {
      this.section = Object.assign(this.section, section);
      this.message.remove();
      this.message.success('Section saved');
    });
  }

  ngOnInit(): void {
  }

  changeSection(section: Partial<Section>){
    if(section.name === ''){
      this.message.error('Section name is required');
      return;
    }
    this.sectionChange$.next(section);
  }

  removeSection(){
    if(this.section!.tasks!.length > 0){
      this.message.warning('All')
    }
  }

}
