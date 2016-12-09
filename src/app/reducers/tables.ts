import { createSelector } from 'reselect';
import { Table } from '../models';
import * as table from '../actions/tables';


export interface State {
  tableNames: string[];
  entities: { [name: string]: Table };
  selectedTableName: string | null;
};

const initialState: State = {
  tableNames: [],
  entities: {},
  selectedTableName: null,
};



export function reducer(state = initialState, action: table.Actions): State {
  switch (action.type) {
    case table.ActionTypes.SEARCH_COMPLETE:
    
    case table.ActionTypes.LOAD: {
      const table: any = action.payload;

      if (state.tableNames.indexOf(table.tableNames) > -1) {
        return state;
      }

      return {
        tableNames: [ ...state.tableNames, table.tableNames ],
        entities: Object.assign({}, state.entities, {
          [table.name]: table
        }),
        selectedTableName: state.selectedTableName
      };
    }

    case table.ActionTypes.SELECT: {
      return {
        tableNames: state.tableNames,
        entities: state.entities,
        selectedTableName: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getTableNames = (state: State) => state.tableNames;

export const getSelectedTableName = (state: State) => state.selectedTableName;

export const getSelected = createSelector(getEntities, getSelectedTableName, (entities, selectedTableName) => {
  return entities[selectedTableName];
});

export const getAll = createSelector(getEntities, getTableNames, (entities, names) => {
  return names.map(id => entities[id]);
});