import { Injectable } from '@angular/core';
import {
  State,
  Action,
  Selector,
  createSelector,
  StateContext,
} from '@ngxs/store';
import { FakeHttpService } from './fake-http.service';
import { DropdownItem, FieldType } from './models';

export class UpdateDropdowns {
  static readonly type = '[Dropdown] Update Content';
  dropdownItems: DropdownItem[] = [];
  fieldType: FieldType;
  constructor(dropdowns: DropdownItem[], fieldType: FieldType) {
    this.dropdownItems = dropdowns;
    this.fieldType = fieldType;
  }
}
export class FetchDropdowns {
  static readonly type = '[Dropdown] Fetch Content';
  fieldType: FieldType;
  constructor(fieldType: FieldType) {
    this.fieldType = fieldType;
  }
}

export interface DropdownStateModel {
  dropdownMap: Map<FieldType, DropdownItem[]>;
}
@State<DropdownStateModel>({
  name: 'dropdownContent',
  defaults: {
    dropdownMap: new Map<FieldType, DropdownItem[]>(),
  },
})
@Injectable()
export class DropdownState {
  constructor(private fakeHttpService: FakeHttpService) {}

  @Selector()
  static getDropdowns(fieldType: FieldType) {
    return createSelector([DropdownState], (state: DropdownStateModel) => {
      return state.dropdownMap.get(fieldType) ?? [];
    });
  }

  @Action(UpdateDropdowns)
  add(ctx: StateContext<DropdownStateModel>, action: UpdateDropdowns) {
    const map = ctx.getState().dropdownMap;
    map.set(action.fieldType, action.dropdownItems);
    ctx.setState({ dropdownMap: map });
  }

  // Alternative fetch approach
  @Action(FetchDropdowns)
  fetch(ctx: StateContext<DropdownStateModel>, action: FetchDropdowns) {
    return this.fakeHttpService.getDropdowns().subscribe((response) => {
      const map = ctx.getState().dropdownMap;
      map.set(action.fieldType, response);
      ctx.setState({ dropdownMap: map });
    });
  }
}
