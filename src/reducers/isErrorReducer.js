export const isErrorReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return action.isError;
    default:
      return state;
  }
}
