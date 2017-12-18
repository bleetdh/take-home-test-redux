import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './components/index'
import HomeContainer from './components/homepage/index'
import FavouritesContainer from './components/favourites/index'

export default (
  <BrowserRouter>
    <Index>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/favourites' component={FavouritesContainer} />
      </Switch>
    </Index>
  </BrowserRouter>

)
