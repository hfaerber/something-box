export const currentSeasonReducer = (state = 1, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_SEASON':
      return action.currentSeason;
    default:
      return state;
  }
}
