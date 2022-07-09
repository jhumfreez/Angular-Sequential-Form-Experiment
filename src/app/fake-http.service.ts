import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DropdownItem, mockDropdownItems } from './models';

@Injectable()
export class FakeHttpService {
  getDropdowns(): Observable<DropdownItem[]> {
    return of(mockDropdownItems).pipe(delay(2000));
  }
}
