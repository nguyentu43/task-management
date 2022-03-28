import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DndDropEvent } from 'ngx-drag-drop';
import {
  BehaviorSubject,
  debounceTime,
  forkJoin,
  skipWhile,
  switchMap,
} from 'rxjs';
import { Section, Task } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { SectionWithTasks } from '../../section.interface';

import { polyfill } from 'mobile-drag-drop';
import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() section!: SectionWithTasks;
  popupVisible = false;
  @Input() projectPk = '';
  sectionChange$ = new BehaviorSubject<Section | null>(null);
  @Output() remove = new EventEmitter();
  searchText = '';
  orignalTasks: Task[] = [];

  constructor(
    private api: ApiService,
    private router: Router,
    private message: NzMessageService
  ) {
    polyfill({
      dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride,
    });

    try {
      window.addEventListener('touchmove', function () {}, { passive: false });
    } catch (e) {}

    this.sectionChange$
      .pipe(
        skipWhile((section) => section === null),
        debounceTime(500),
        switchMap((section) => {
          this.message.loading('Section saving...');
          return this.api.apiProjectsSectionsUpdate({
            projectPk: this.projectPk,
            id: section!.id + '',
            data: section!,
          });
        })
      )
      .subscribe((section) => {
        this.section = Object.assign(this.section, section);
        this.message.remove();
        this.message.success('Section saved');
      });
  }

  ngOnInit(): void {
    this.orignalTasks = [...this.section.tasks];
  }

  setSection(props: Partial<Section>) {
    return { ...this.section, ...props };
  }

  changeSection(section: Section) {
    if (section.name === '') {
      this.message.error('Section name is required');
      return;
    }
    this.sectionChange$.next(section);
  }

  navigate(task: Task) {
    this.router.navigate(['/projects', task.project?.id, 'tasks', task.id]);
  }

  addTask() {
    const data: any = {
      order: this.section.tasks.length,
      title: 'New task',
      section_id: this.section.id,
    };

    this.api
      .apiProjectsTasksCreate({
        projectPk: this.section.project + '',
        data,
      })
      .subscribe((task) => {
        this.message.success('New task create');
        this.section.tasks = this.section.tasks.concat(task);
      });
  }

  changeSectionTask(index: number, task: Task) {
    if (task.section?.id === this.section.id) {
      this.section.tasks = this.section.tasks.filter((t) => t.id !== task.id);
    }

    task.order = index;
    task.section!.id = this.section.id;

    this.message.loading('Task change order');

    let afterTasks = this.section.tasks.slice(
      index,
      this.section.tasks.length - index + 1
    );
    afterTasks = afterTasks.map((t) => ({ ...t, order: t.order + 1 }));
    afterTasks.unshift(task);

    forkJoin([
      ...afterTasks.map((t) => {
        const data: any = {
          order: t.order,
          section_id: t.section?.id,
        };
        return this.api.apiProjectsTasksPartialUpdate({
          projectPk: this.section.project + '',
          id: t.id + '',
          data,
        });
      }),
    ]).subscribe((list) => {
      this.message.remove();
      this.message.success('Task save');
      this.section.tasks.splice(index, this.section.tasks.length - index + 1);
      this.section.tasks = [...this.section.tasks, ...list];
      this.orignalTasks = [...this.section.tasks];
    });
  }

  onDrop(event: DndDropEvent) {
    this.changeSectionTask(event.index!, event.data);
  }

  onEndDrag(task: Task) {
    this.section.tasks = this.section.tasks.filter((t) => t.id !== task.id);
  }

  onSearch(content: string) {
    this.searchText = content;
    if (content === '') {
      this.section.tasks = [...this.orignalTasks];
      return;
    }

    const regex = new RegExp(`.*${content}.*`, 'i');

    this.section.tasks = this.orignalTasks.filter((t) => {
      return (
        regex.test(t.title) ||
        regex.test(t.status!) ||
        t.tags!.filter((tag) => regex.test(tag.name)).length > 0
      );
    });
  }
}
