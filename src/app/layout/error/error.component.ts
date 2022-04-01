import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzResultIconType, NzResultStatusType } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  errorCode: any = 'error';
  errorSubtitle: any = {
    '403': 'Sorry, you are not authorized to access this page.',
    '404': 'Sorry, the page you visited does not exist.',
    '500': 'Sorry, there is an error on server.',
    error:
      'Please check and modify the following information before resubmitting',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const error = this.route.snapshot.paramMap.get('error') ?? '404';
    if (!(error in ['404', '500', '403'])) {
      this.errorCode = error;
    }
  }
}
