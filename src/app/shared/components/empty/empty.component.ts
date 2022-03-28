import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-data',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
})
export class EmptyComponent {
  @Input() link?: string[];
  @Input() title?: string;
  @Input() description: string = '';
  @Output() readonly clickButton = new EventEmitter();
  constructor(private router: Router) {}
}
