import { createSelector } from 'reselect';
import { Table, ResultTable } from '../models';
import * as table from '../actions/tables';


export interface State {
  tableNames: string[];
  entities: {[name: string]: Table};
  selectedTableName: string | null;
  queriedTable: ResultTable | {};
};

const initialState: State = {
  tableNames: [],
  entities: {},
  selectedTableName: null,
  queriedTable: {}
};



export function reducer(state = initialState, action: table.Actions): State {
  switch (action.type) {
    case table.ActionTypes.SEARCH_COMPLETE: {
      const tables = action.payload;
      const newTables = tables.filter(t => !state.entities[t.name]);

      const newTableNames = newTables.map(t => t.id);
      const newTableEntities = newTables.reduce((entities: { [name: string]: Table }, table: Table) => {
        return Object.assign(entities, {
          [table.name]: table
        });
      }, {});

      return {
        tableNames: [ ...state.tableNames, ...newTableNames ],
        entities: Object.assign({}, state.entities, newTableEntities),
        selectedTableName: state.selectedTableName,
        queriedTable: state.queriedTable
      };
    }

    case table.ActionTypes.QUERY_COMPLETE: {
      const qt = action.payload;

      return {
        tableNames: state.tableNames,
        entities: state.entities,
        selectedTableName: state.selectedTableName,
        queriedTable: qt
      };
    }
    
    case table.ActionTypes.LOAD: {
      const table: Table = action.payload;

      return {
        tableNames: [...state.tableNames, table.name],
        entities: Object.assign({}, state.entities, {
          [table.name]: table
        }),
        selectedTableName: state.selectedTableName,
        queriedTable: state.queriedTable
      };
    }


    case table.ActionTypes.SELECT: {
      return {
        tableNames: state.tableNames,
        entities: state.entities,
        selectedTableName: action.payload,
        queriedTable: state.queriedTable
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

export const getQueriedTable = (state: State) => state.queriedTable;

export const getTableNames = (state: State) => state.tableNames;

export const getSelectedTableName = (state: State) => state.selectedTableName;

export const getSelected = createSelector(getEntities, getSelectedTableName, (entities, selectedTableName) => {
  return entities[selectedTableName];
});

export const getAll = createSelector(getEntities, getTableNames, (entities, names) => {
  return names.map(id => entities[id]);
});