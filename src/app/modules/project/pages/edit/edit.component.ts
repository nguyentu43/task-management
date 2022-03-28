import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  project: Project = {
    participants: [],
    title: '',
  };

  constructor(private route: ActivatedRoute, private api: ApiService) {
    const project = this.route.snapshot.data['project'];
    if (project) {
      this.project = project;
    }
  }

  ngOnInit(): void {}
}
