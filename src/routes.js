import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/views/Home'
import Nav from './components/shared/Nav'

const routes = (
    <div>
      <Nav />
      <Route path='/' component={Home}/>
    </div>
);

export default routes;
