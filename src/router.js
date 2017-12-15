import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import Home from './components/homepage/Home'
import Favourites from './components/favourites/Favourites'

export default (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favourites' component={Favourites} />
      </Switch>
    </App>
  </BrowserRouter>

)
