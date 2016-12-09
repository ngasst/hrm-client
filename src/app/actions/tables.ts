import { Action } from '@ngrx/store';
import { Table } from '../models/table';
import { type } from '../util';
import { SearchObject } from '../models';

export const ActionTypes = {
    SEARCH: type('[Table] Search'),
    SEARCH_COMPLETE: type('[Table] Search Complete'),
    LOAD: type('[Table] Load'),
    SELECT: type('[Table] Select')
};

export class SearchAction implements Action {
    type = ActionTypes.SEARCH;

    constructor(public payload: SearchObject) {
        //
    }
}

export class SearchCompleteAction implements Action {
  type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload: Table[]) { }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Table) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: string) { }
}

export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;