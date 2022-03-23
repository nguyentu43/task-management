import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/api/models';

@Component({
  selector: 'app-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss']
})
export class AvatarGroupComponent implements OnInit {

  @Input() participants: Profile[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
