import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile, Project } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnChanges {

  @Input() project!: Project
  form!: FormGroup
  isSubmitting = false

  constructor(
    private fb:FormBuilder, 
    private api:ApiService, 
    private router:Router,
    private message: NzMessageService
  ) {
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.form = this.fb.group({
      title: [this.project?.title, [Validators.required]],
      description: [this.project?.description],
      participants: [this.project?.participants]
    });
  }

  submit(){
    if(this.form.valid){
      this.isSubmitting = true;
      const validDate = this.form.value;
      validDate.participants = validDate.participants.map((p:Profile) => p.id);
      if(!this.project){
        this.api.apiProjectsCreate(validDate).subscribe(this.handleSave);
      }
      else{
        this.api.apiProjectsUpdate({ id: this.project.id + '', data: validDate }).subscribe(this.handleSave);
      }
    }else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleSave = (project:Project) => {
    this.message.success('Project save', { nzDuration: 5000 });
    this.router.navigate(['/projects', project.id]);
  }

  handleRemove = () => {
    this.api.apiProjectsDelete(this.project.id + '').subscribe((_) => {
      this.router.navigate(['/projects']);
    });
  }
}
