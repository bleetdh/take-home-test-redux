function favouritesReducer (state = 0, action) {
  switch (action.type) {
    case 'LIKE_PICTURE':
      state += 1
      return state
    case 'UNLIKE_PICTURE':
      console.log('unlike picture')
      return state
    default:
      return state
  }
}

export default favouritesReducer
