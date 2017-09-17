import React from 'react';
import { Route } from 'react-router-dom'
import App from './App';
import Splash from './Splash';
import LoginCallback from './LoginCallback';


const routes = (
    <div>
      <Route exact path='/' component={Splash}/>
      <Route path='/callback' component={LoginCallback}/>
    </div>
);

export default routes;
