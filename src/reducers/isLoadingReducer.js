export const isLoadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'UPDATE_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
