import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  SHOW_LOADING_MODAL:   type('[Layout] Show Loading Modal'),
  HIDE_LOADING_MODAL:   type('[Layout] Hide Loading Modal')
};


export class ShowLoadingModal implements Action {
  type = ActionTypes.SHOW_LOADING_MODAL;
}

export class HideLoadingModal implements Action {
  type = ActionTypes.HIDE_LOADING_MODAL;
}


export type Actions
  = ShowLoadingModal
  | HideLoadingModal;