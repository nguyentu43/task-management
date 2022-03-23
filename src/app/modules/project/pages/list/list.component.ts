import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
  }

}
