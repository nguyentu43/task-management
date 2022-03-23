import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, debounceTime, skipWhile, switchMap } from 'rxjs';
import { Profile } from 'src/app/api/models';
import { ApiService } from 'src/app/api/services';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ProfileSelectComponent)
    }
  ]
})
export class ProfileSelectComponent implements ControlValueAccessor, OnChanges{
  isLoading = false
  profiles: Profile[] = []
  searchChange$ = new BehaviorSubject('')
  selectedProfiles?: string[]
  onChange = (value: string[]) => {};
  @Input() initialProfiles?: Profile[]

  constructor(private api:ApiService) {
    this.searchChange$.pipe(
      skipWhile(v => v === ''),
      debounceTime(500),
      switchMap(v => {
        this.isLoading = true;
        return this.api.apiProfilesSearchList({nickname:v, email:v});
      })
    )
    .subscribe(profiles => {
      this.profiles = profiles;
      this.isLoading = false;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.profiles = this.initialProfiles ?? [];
    this.selectedProfiles = this.initialProfiles?.map(p => p.id);
  }

  onModelChange(data:string[]){
    this.onChange(data);
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  onSearch(value:string){
    this.searchChange$.next(value);
  }
}
