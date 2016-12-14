import { createSelector } from 'reselect';
import * as layout from '../actions/layout';


export interface State {
  showLoadingModal: boolean;
}

const initialState: State = {
  showLoadingModal: false
};


export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.HIDE_LOADING_MODAL:
      return {
        showLoadingModal: false
      };

    case layout.ActionTypes.SHOW_LOADING_MODAL:
      return {
        showLoadingModal: true
      };

    default:
      return state;
  }
}

export const getShowLoadingModal = (state: State) => state.showLoadingModal;