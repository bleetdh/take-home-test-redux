import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import * as actionCreators from '../actions/actionCreators'

import App from './App'

function mapStateToProps (state) {
  return {
    picState: state.picState,
    favState: state.favState
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Index = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default Index
