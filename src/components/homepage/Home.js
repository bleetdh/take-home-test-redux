import React, {Component} from 'react'

class HomeContainer extends Component {
  render () {
    return (
      <div>
        <h1>hello</h1>
        <button onClick={this.props.searchPictures}>HOMEPAGE +1</button>
        <h2>home: {this.props.picState}</h2>
        <h2>fav: {this.props.favState}</h2>
      </div>
    )
  }
}

export default HomeContainer
