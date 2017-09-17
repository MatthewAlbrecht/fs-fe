import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
import './index.css'
ReactDOM.render((
  <BrowserRouter>
    {routes}
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
