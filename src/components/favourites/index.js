import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/actionCreators'

import Favourites from './Favourites'

function mapStateToProps (state) {
  return {
    picState: state.picState,
    favState: state.favState
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const FavouritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favourites)

export default FavouritesContainer
