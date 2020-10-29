import produce from 'immer';
import actions from '../constants/actions/simple-action';
import data from '../constants/mocks/menu.json';
import {
  filterProductsByName,
  filterProductsWithoutAllergens,
} from '../helpers/menu/filters';

export const defaultState = {
  data,
  filteredItems: [],
  selectedAllergens: [],
  showModal: false,
};

const mainReducer = produce((draft, action) => {
  switch (action.type) {
  case actions.SEARCH:
    draft.filteredItems = filterProductsByName(draft.data, action.payload);
    break;
  case actions.TOGGLE_MODAL:
    draft.showModal = !draft.showModal;
    break;
  case actions.FILTER_ALLERGEN:
    // Check if element exists in array
    draft.selectedAllergens.includes(action.payload)
      ? // if true then delete it with splice(index of element, 1)
      draft.selectedAllergens.splice(
        draft.selectedAllergens.indexOf(action.payload),
        1,
      )
      : // else add it
      draft.selectedAllergens.push(action.payload);

    filterProductsWithoutAllergens(draft.data, action);
    break;
  default:
    return draft;
  }
}, defaultState);
export default mainReducer;
