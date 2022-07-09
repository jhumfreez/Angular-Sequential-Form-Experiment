import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { DropdownState, UpdateDropdowns } from "./dropdown.state";
import { FakeHttpService } from "./fake-http.service";
import { DropdownItem, FieldType } from "./models";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  @Select(DropdownState.getDropdowns(FieldType.OptionA))
  dropdownA$: Observable<DropdownItem[]>;

  @Select(DropdownState.getDropdowns(FieldType.OptionB))
  dropdownB$: Observable<DropdownItem[]>;

  @Select(DropdownState.getDropdowns(FieldType.OptionC))
  dropdownC$: Observable<DropdownItem[]>;

  @Select(DropdownState.getDropdowns(FieldType.OptionD))
  dropdownD$: Observable<DropdownItem[]>;

  myForm: FormGroup;
  constructor(private store: Store, private fakeHttp: FakeHttpService) {
    this.myForm = new FormGroup({
      optionA: new FormControl(null, Validators.required),
      optionB: new FormControl(null, Validators.required),
      optionC: new FormControl(null, Validators.required),
      optionD: new FormControl(null, Validators.required),
    });
  }
}
