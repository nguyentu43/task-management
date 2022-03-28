import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, debounceTime, skipWhile, switchMap } from 'rxjs';
import { Profile } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ProfileSelectComponent),
    },
  ],
})
export class ProfileSelectComponent implements ControlValueAccessor {
  isLoading = false;
  @Input() profiles: Profile[] = [];
  @Output() profilesChange = new EventEmitter();
  searchChange$ = new BehaviorSubject('');
  onChange = (value: Profile[]) => {};
  @Input() project_id: string = '';

  constructor(private api: ApiService) {
    this.searchChange$
      .pipe(
        skipWhile((v) => v === ''),
        debounceTime(500),
        switchMap((v) => {
          this.isLoading = true;
          if (this.project_id) {
            return this.api.apiProfilesSearchList({
              nickname: v,
              email: v,
              project: this.project_id,
            });
          }
          return this.api.apiProfilesSearchList({ nickname: v, email: v });
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.isLoading = false;
      });
  }

  onModelChange(profiles: Profile[]) {
    this.onChange(profiles);
    this.profilesChange.emit(profiles);
  }

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onSearch(value: string) {
    this.searchChange$.next(value);
  }

  compareProfile = (p1: Profile, p2: Profile) => p1?.id === p2?.id;
}
