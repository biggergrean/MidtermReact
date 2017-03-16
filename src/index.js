import React from 'react';
import ReactDOM from 'react-dom';
import Manage from './Manage';
import './css/index.css';

import { Router, Route, browserHistory } from 'react-router'
import Home from './Pages/Home';
import Products from './Pages/Products';
import History from './Pages/History';
import President from './Pages/President';
import Philosophy from './Pages/Philosophy';
import Locations from './Pages/Locations';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Manage}>
      <Route path="home" component={Home}/>
      <Route path="products" component={Products}/>
      <Route path="history" component={History}/>
      <Route path="president" component={President}/>
      <Route path="philosophy" component={Philosophy}/>
      <Route path="locations" component={Locations}/>
      <Route path="*" component={Home}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
