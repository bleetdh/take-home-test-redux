import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import favouritesReducer from './favourites-reducer'
import picturesReducer from './pictures-reducer'

const rootReducer = combineReducers({
  picState: picturesReducer,
  favState: favouritesReducer,
  routing: routerReducer
})

export default rootReducer
