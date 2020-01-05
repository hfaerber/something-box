export const searchMatchesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_MATCHES':
      return action.searchMatches;
    default:
      return state;
  }
}
