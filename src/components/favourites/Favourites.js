import React, {Component} from 'react'

class Favourites extends Component {
  render () {
    return (
      <div>
        <h1>favvvvvvv</h1>
        <button onClick={this.props.searchPictures}>HOMEPAGE +1</button><br />
        <button onClick={this.props.likePicture}>FAVOURITE +1</button>
        <h2>home: {this.props.picState}</h2>
        <h2>fav: {this.props.favState}</h2>
      </div>
    )
  }
}

export default Favourites
