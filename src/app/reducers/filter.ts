import { createSelector } from 'reselect';
import * as tables from '../actions/tables';
import { SearchObject } from '../models';


export interface State {
  names: string[];
  loading: boolean;
  query: SearchObject;
};

const initialState: State = {
  names: [],
  loading: false,
  query: {tname: '', fname: '', empty: true, sorta: true}
};

export function reducer(state = initialState, action: tables.Actions): State {
  switch (action.type) {
    case tables.ActionTypes.SEARCH: {
      const query = action.payload;

      return Object.assign({}, state, {
        query,
        loading: true
      });
    }

    case tables.ActionTypes.SEARCH_COMPLETE: {
      const tables: any = action.payload;

      return {
        names: tables.map(table => table.name),
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}


export const getTableNames = (state: State) => state.names;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;