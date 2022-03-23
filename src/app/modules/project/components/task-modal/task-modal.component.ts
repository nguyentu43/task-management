import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/api/models';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  isVisible=false
  @Input() task?: Task
  constructor() { }

  ngOnInit(): void {
  }

  showModal(){
    this.isVisible=true;
  }

  handleCancel(){
    this.isVisible=false;
  }

  handleOk(){

  }

}
