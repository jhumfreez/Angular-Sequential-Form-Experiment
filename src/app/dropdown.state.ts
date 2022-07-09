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
  // Not storing a map based on style guide: https://www.ngxs.io/recipes/style-guide#flatten-deep-object-graphs
  dropdownMap: {
    [key in FieldType]: DropdownItem[];
  };
}
@State<DropdownStateModel>({
  name: 'dropdownContent',
  defaults: {
    dropdownMap: {
      0: [],
      1: [],
      2: [],
      3: [],
    },
  },
})
@Injectable()
export class DropdownState {
  constructor(private fakeHttpService: FakeHttpService) {}

  // FIXME
  @Selector()
  static getDropdowns(fieldType: FieldType) {
    return createSelector([DropdownState], (state: DropdownStateModel) => {
      return state.dropdownMap[fieldType] ?? [];
    });
  }

  @Selector()
  static getDropdownsA(state: DropdownStateModel) {
    return state.dropdownMap[FieldType.OptionA] ?? [];
  }

  @Selector()
  static getDropdownsB(state: DropdownStateModel) {
    return state.dropdownMap[FieldType.OptionB] ?? [];
  }

  @Selector()
  static getDropdownsC(state: DropdownStateModel) {
    return state.dropdownMap[FieldType.OptionC] ?? [];
  }

  @Selector()
  static getDropdownsD(state: DropdownStateModel) {
    return state.dropdownMap[FieldType.OptionD] ?? [];
  }

  @Action(UpdateDropdowns)
  add(ctx: StateContext<DropdownStateModel>, action: UpdateDropdowns) {
    const map = ctx.getState().dropdownMap;
    map[action.fieldType] = action.dropdownItems;
    ctx.patchState({ dropdownMap: map });
  }

  // Alternative fetch approach
  @Action(FetchDropdowns)
  fetch(ctx: StateContext<DropdownStateModel>, action: FetchDropdowns) {
    return this.fakeHttpService.getDropdowns().subscribe((response) => {
      const map = ctx.getState().dropdownMap;
      map[action.fieldType] = response;
      ctx.patchState({ dropdownMap: map });
    });
  }
}
