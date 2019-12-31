import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Todo } from './components/Todo'


export default props => (
  <BrowserRouter>
    <Switch>
      <Route path='/todos' component={Todo} />
      <Redirect from='*' to='/todos' />
    </Switch>
  </BrowserRouter>
)
