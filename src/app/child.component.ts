import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DropdownState } from './dropdown.state';
import { DropdownItem } from './models';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Select(DropdownState) dropdown$: Observable<DropdownItem[]>;

  constructor() {}
}
