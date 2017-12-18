function picturesReducer (state = [], action) {
  switch (action.type) {
    case 'SEARCH_PICTURES':
      console.log('search pics')
      return state
    case 'FETCH_MORE_PICTURES':
      console.log('fetch more')
      return state
    default:
      return state
  }
}

export default picturesReducer
