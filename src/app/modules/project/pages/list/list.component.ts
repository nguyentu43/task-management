import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading = false;
  projects: Project[] = [];
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.api.apiProjectsList().subscribe((data) => {
      this.loading = false;
      this.projects = data;
    });
  }
}
