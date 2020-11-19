import React from 'react'
import { Route, Router, Switch } from 'react-router'

import { history } from '../history'

import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </Router>
)

export default Routes
