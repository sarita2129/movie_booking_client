import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Movies from './components/Movies';
import Booking from './components/Booking';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/movies" component={ Movies } />
      <Route exact path="/booking" component={ Booking } />

    </div>
  </Router>
);

export default Routes;
