export const addQuotes = quotes => ({
  type: 'ADD_QUOTES',
  quotes: quotes
})

export const updateLoading = status => ({
  type: 'UPDATE_LOADING',
  isLoading: status
})

export const updateError = status => ({
  type: 'UPDATE_ERROR',
  isError: status
})

export const updateSearchMatches = matches => ({
  type: 'UPDATE_SEARCH_MATCHES',
  searchMatches: matches
})
