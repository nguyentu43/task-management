import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.scss'],
})
export class MdEditorComponent implements OnInit {
  @Input() content?: string;
  @Output() onChangeContent = new EventEmitter();

  isEditting = false;

  options = {
    lang: 'en_US',
    mode: 'ir',
    toolbar: [
      'emoji',
      'br',
      'bold',
      '|',
      'line',
      'headings',
      'code',
      'indent',
      'link',
      'table',
      'code',
      'redo',
      'undo',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
