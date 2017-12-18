function picturesReducer (state = 0, action) {
  switch (action.type) {
    case 'SEARCH_PICTURES':
      state += 1
      return state
    case 'FETCH_MORE_PICTURES':
      console.log('fetch more')
      return state
    default:
      return state
  }
}

export default picturesReducer
