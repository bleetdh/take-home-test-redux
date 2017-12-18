import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to React</h2>
        </div>
        <ul>
          <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
          <li><NavLink to='favourites' activeClassName='active'>Favourites</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App
