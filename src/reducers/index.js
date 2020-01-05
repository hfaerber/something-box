import { combineReducers } from 'redux';
import { quotesReducer } from '../reducers/quotesReducer';
import { isLoadingReducer } from '../reducers/isLoadingReducer';
import { isErrorReducer } from '../reducers/isErrorReducer';
import { searchMatchesReducer } from '../reducers/searchMatchesReducer';
import { currentSeasonReducer } from '../reducers/currentSeasonReducer';

export const rootReducer = combineReducers({
  quotes: quotesReducer,
  isLoading: isLoadingReducer,
  isError: isErrorReducer,
  searchMatches: searchMatchesReducer,
  currentSeason: currentSeasonReducer
})

export default rootReducer;
