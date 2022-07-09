import { State, Action, Selector } from '@ngxs/store';
import { StateContext } from '@ngxs/store/src/public_api';
import { DropdownItem } from './models';

export class UpdateDropdowns {
  static readonly type = 'Update Dropdown Content';
  dropdownItems: DropdownItem[] = [];
  constructor(dropdowns: DropdownItem[]) {
    this.dropdownItems = dropdowns;
  }
}
export interface DropdownStateModel {
  dropdownContent: DropdownItem[];
}
@State<DropdownStateModel>({
  name: 'dropdownContent',
  defaults: {
    dropdownContent: [],
  },
})
export class DropdownState {

  @Selector()
  getDropdowns(state: DropdownStateModel){
    return state.dropdownContent;
  }

  @Action(UpdateDropdowns)
  add(ctx: StateContext<DropdownStateModel>, action: UpdateDropdowns) {
    ctx.setState({ dropdownContent: action.dropdownItems });
  }
}
