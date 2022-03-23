import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Project, Tag } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { SectionWithTasks } from '../../section.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  project: Project
  sections?: SectionWithTasks[]
  tags?: Tag[]
  isLoading = true;

  constructor(private api:ApiService, private route:ActivatedRoute) {
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
      }).sort((s1, s2) => s1.order - s2.order);
      this.tags = tags;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
  }

}
