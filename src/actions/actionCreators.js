// actions for homepage only
const SEARCH_PICTURES = 'SEARCH_PICTURES'

export function searchPictures (pictures) {
  return {
    type: SEARCH_PICTURES,
    pictures
  }
}

const FETCH_MORE_PICTURES = 'FETCH_MORE_PICTURES'

export function fetchMorePictures (pictures) {
  return {
    type: FETCH_MORE_PICTURES,
    pictures
  }
}

const LIKE_PICTURE = 'LIKE_PICTURE'

export function likePicture (favourites) {
  return {
    type: LIKE_PICTURE,
    favourites
  }
}

// action for both homepage and favourites
const UNLIKE_PICTURE = 'UNLIKE_PICTURE'

export function unlikePicture (favourites) {
  return {
    type: UNLIKE_PICTURE,
    favourites
  }
}
