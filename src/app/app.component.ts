import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  DropdownState,
  FetchDropdowns,
  UpdateDropdowns,
} from './dropdown.state';
import { FakeHttpService } from './fake-http.service';
import { DropdownItem, FieldType } from './models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @Select(DropdownState.getDropdowns(FieldType.OptionA))
  @Select(DropdownState.getDropdownsA)
  dropdownA$: Observable<DropdownItem[]>;

  // @Select(DropdownState.getDropdowns(FieldType.OptionB))
  @Select(DropdownState.getDropdownsB)
  dropdownB$: Observable<DropdownItem[]>;

  // @Select(DropdownState.getDropdowns(FieldType.OptionC))
  @Select(DropdownState.getDropdownsC)
  dropdownC$: Observable<DropdownItem[]>;

  // @Select(DropdownState.getDropdowns(FieldType.OptionD))
  @Select(DropdownState.getDropdownsD)
  dropdownD$: Observable<DropdownItem[]>;

  @Select(DropdownState)
  debugState$;

  myForm: FormGroup;

  constructor(private store: Store, private fakeHttp: FakeHttpService) {
    // TODO: Transform into dynamic FormArray, for funsies mostly
    // https://netbasal.com/angular-reactive-forms-the-ultimate-guide-to-formarray-3adbe6b0b61a
    this.myForm = new FormGroup({
      optionA: new FormControl(null, Validators.required),
      optionB: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      optionC: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      optionD: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
    });

    this.fakeHttp.getDropdowns().subscribe((res) => {
      this.store.dispatch(new UpdateDropdowns(res, FieldType.OptionA));
    });
  }

  onSelectionA() {
    for (let [name, control] of Object.entries(this.myForm.controls)) {
      switch (name) {
        case 'optionA':
          break;
        case 'optionB':
        case 'optionC':
        case 'optionD':
          control.reset(null);
          control.disable();
          break;
      }
    }
    this.fakeHttp.getDropdowns().subscribe((res) => {
      this.store.dispatch(new UpdateDropdowns(res, FieldType.OptionB));
      this.myForm.get('optionB').enable();
    });
  }

  onSelectionB() {
    for (let [name, control] of Object.entries(this.myForm.controls)) {
      switch (name) {
        case 'optionA':
        case 'optionB':
          break;
        case 'optionC':
        case 'optionD':
          control.reset(null);
          control.disable();
          break;
      }
    }
    this.fakeHttp.getDropdowns().subscribe((res) => {
      this.store.dispatch(new UpdateDropdowns(res, FieldType.OptionC));
      this.myForm.get('optionC').enable();
    });
  }

  onSelectionC() {
    this.myForm.get('optionD').reset(null);
    this.myForm.get('optionD').disable();
    this.fakeHttp.getDropdowns().subscribe((res) => {
      this.store.dispatch(new UpdateDropdowns(res, FieldType.OptionD));
      this.myForm.get('optionD').enable();
    });
  }
}
