import React, {Component} from 'react'

class HomeContainer extends Component {
  render () {
    return (
      <div>
        <h1>hello</h1>
        <button onClick={this.props.searchPictures}>HOMEPAGE</button>
      </div>
    )
  }
}

export default HomeContainer
