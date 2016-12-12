import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  SHOW_LOADING_MODAL:   type('[Layout] Show Loading Modal'),
  HIDE_LOADING_MODAL:   type('[Layout] Hide Loading Modal'),
  HIGHLIGHT_TABLE:      type('[Layout] Highlight Table'),
  HIGHLIGHT_FIELD:      type('[Layout] Highlight Field')
};


export class ShowLoadingModal implements Action {
  type = ActionTypes.SHOW_LOADING_MODAL;
}

export class HideLoadingModal implements Action {
  type = ActionTypes.HIDE_LOADING_MODAL;
}

export class HighlightTable implements Action {
  type = ActionTypes.HIGHLIGHT_TABLE;

  constructor(public payload: string) {

  }
}


export class HighlightField implements Action {
  type = ActionTypes.HIGHLIGHT_FIELD;

  constructor(public payload: string) {

  }
}


export type Actions
  = ShowLoadingModal
  | HideLoadingModal
  | HighlightTable
  | HighlightField;