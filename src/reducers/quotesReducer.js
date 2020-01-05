export const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTES':
      return action.quotes;
    default:
      return state;
  }
}
