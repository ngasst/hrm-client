import { createSelector } from 'reselect';
import * as layout from '../actions/layout';


export interface State {
  showLoadingModal: boolean;
  hField: string;
  hTable: string;
}

const initialState: State = {
  showLoadingModal: false,
  hField: '',
  hTable: ''
};


export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.HIDE_LOADING_MODAL:
      return {
        showLoadingModal: false,
        hField: state.hField,
        hTable: state.hTable
      };

    case layout.ActionTypes.SHOW_LOADING_MODAL:
      return {
        showLoadingModal: true,
        hField: state.hField,
        hTable: state.hTable
      };

    case layout.ActionTypes.HIGHLIGHT_TABLE:
      const hTable: string = action.payload;
      return {
        showLoadingModal: state.showLoadingModal,
        hField: state.hField,
        hTable: hTable
      };

    case layout.ActionTypes.HIGHLIGHT_FIELD:
      const hField: string = action.payload;
      return {
        showLoadingModal: state.showLoadingModal,
        hField: hField,
        hTable: state.hTable
      };

    default:
      return state;
  }
}

export const getShowLoadingModal = (state: State) => state.showLoadingModal;
export const getHField = (state: State) => state.hField;
export const getHTable = (state: State) => state.hTable;