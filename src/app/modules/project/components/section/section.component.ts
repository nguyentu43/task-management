import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, debounceTime, skipWhile, switchMap } from 'rxjs';
import { Section, Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { SectionWithTasks } from '../../section.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section!: SectionWithTasks
  popupVisible = false
  @Input() projectPk = ''
  sectionChange$ = new BehaviorSubject<Section | null>(null)
  @Output() remove = new EventEmitter();

  constructor(private api:ApiService, private router:Router, private message: NzMessageService) {
    this.sectionChange$.pipe(
      skipWhile(section => section === null),
      debounceTime(500),
      switchMap(section => {
        this.message.loading('Section saving...');
        return this.api.apiProjectsSectionsUpdate({
          projectPk: this.projectPk,
          id: section!.id + '',
          data: section!
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

  setSection(props: Partial<Section>){
    return { ...this.section, ...props};
  }

  changeSection(section: Section){
    if(section.name === ''){
      this.message.error('Section name is required');
      return;
    }
    delete section['project'];
    this.sectionChange$.next(section);
  }

  navigate(task:Task){
    this.router.navigate(['/projects', task.project?.id, 'tasks', task.id]);
  }

  addTask(){
    const data:any = {
      order: this.section.tasks.length + 1,
      title: 'New task',
      section_id: this.section.id
    };
    
    this.api.apiProjectsTasksCreate({
      projectPk: this.section.project?.id + '',
      data
    })
    .subscribe(task => {
      this.section.tasks = this.section.tasks.concat(task);
    })
  }
}
