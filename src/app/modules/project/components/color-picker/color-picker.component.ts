import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  colors: string[] = [ '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#533E85', 
  "#002626","#0e4749","#95c623", '#E3170A',"#e55812", "#120309","#2e0f15","#70163c","#95b2b8","#307351"]
  @Input() color!: string
  @Output() colorChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
