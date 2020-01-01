import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './screens/Home';
import Experience from './screens/Experience';
import Course from './screens/Course';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/experiences' component={Experience} />
      <Route exact path='/courses' component={Course} />
    </Switch>
  </BrowserRouter>
)

export default Routes;