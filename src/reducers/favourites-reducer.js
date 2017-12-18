function favouritesReducer (state = [], action) {
  switch (action.type) {
    case 'LIKE_PICTURE':
      console.log('like picture')
      return state
    case 'UNLIKE_PICTURE':
      console.log('unlike picture')
      return state
    default:
      return state
  }
}

export default favouritesReducer
