import React, {Component} from 'react'

class Favourites extends Component {
  render () {
    return (
      <div>
        <h1>favvvvvvv</h1>
        <button onClick={this.props.likePicture}>FAVOURITE</button>
      </div>
    )
  }
}

export default Favourites
