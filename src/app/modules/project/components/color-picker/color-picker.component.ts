import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  colors: string[] = [ '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#533E85']
  @Input() color!: string
  @Output() colorChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
