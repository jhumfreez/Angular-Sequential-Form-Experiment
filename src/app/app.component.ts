import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateDropdowns } from './dropdown.state';
import { FakeHttpService } from './fake-http.service';
import { DropdownItem } from './models';

@Component({
  selector: 'my-app',
  template: `<my-child></my-child>`,
})
export class AppComponent {
  constructor(private store: Store, private fakeHttp: FakeHttpService) {}

  onClick() {
    this.fakeHttp.getDropdowns().subscribe((dropdownItems: DropdownItem[]) => {
      this.store.dispatch(new UpdateDropdowns(dropdownItems));
    });
  }
}
