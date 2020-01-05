import { combineReducers } from 'redux';
import { quotesReducer } from '../reducers/quotesReducer';
import { isLoadingReducer } from '../reducers/isLoadingReducer';
import { isErrorReducer } from '../reducers/isErrorReducer';
import { searchMatchesReducer } from '../reducers/searchMatchesReducer';

export const rootReducer = combineReducers({
  quotes: quotesReducer,
  isLoading: isLoadingReducer,
  isError: isErrorReducer,
  searchMatches: searchMatchesReducer
})

export default rootReducer;
