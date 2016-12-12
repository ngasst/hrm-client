import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { Book } from '../models/book';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';


/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromFilter from './filter';
import * as fromTables from './tables';
import * as fromLayout from './layout';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  filter: fromFilter.State;
  tables: fromTables.State;
  router: fromRouter.RouterState;
  layout: fromLayout.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  filter: fromFilter.reducer,
  tables: fromTables.reducer,
  router: fromRouter.routerReducer,
  layout: fromLayout.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (ENV === 'production') {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */
export const getTablesState = (state: State) => state.tables;

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * Once again our compose function comes in handy. From right to left, we
 * first select the books state then we pass the state to the book
 * reducer's getBooks selector, finally returning an observable
 * of search results.
 *
 * Share memoizes the selector functions and publishes the result. This means
 * every time you call the selector, you will get back the same result
 * observable. Each subscription to the resultant observable
 * is shared across all subscribers.
 */
 export const getTableEntities = createSelector(getTablesState, fromTables.getEntities);
 export const getTableNames = createSelector(getTablesState, fromTables.getTableNames);
 export const getSelectedTableName = createSelector(getTablesState, fromTables.getSelectedTableName);
 export const getSelectedTables = createSelector(getTablesState, fromTables.getSelected);


/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const getFilterState = (state: State) => state.filter;

export const getFilterTableNames = createSelector(getFilterState, fromFilter.getTableNames);
export const getFilterQuery = createSelector(getFilterState, fromFilter.getQuery);
export const getFilterLoading = createSelector(getFilterState, fromFilter.getLoading);


/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
export const getFilterResults = createSelector(getTableEntities, getFilterTableNames, (tables, filterNames: string[]) => {
  return filterNames.map(name => tables[name]);
});



/**
 * Layout Reducers
 */
export const getLayoutState = (state: State) => state.layout;

export const getShowLoadingModal = createSelector(getLayoutState, fromLayout.getShowLoadingModal);

export const getHightlighField = createSelector(getLayoutState, fromLayout.getHField);

export const getHighlightTable = createSelector(getLayoutState, fromLayout.getHTable);