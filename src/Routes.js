import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import App from './components/App';
import Home from './components/Home';
import Movies from './components/Movies';
import Booking from './components/Booking';
import SelectCinema from './components/SelectCinema';
import Footer from './components/Footer';



const Routes = (
  <Router>
    <div>
    <Nav />
    
      <Route exact path="/" component={ App } />
      <Route exact path="/home" component={ Home } />

      <Route path="/movies/:city" component={ SelectCinema } />
      <Route path="/booking/:show_id" component={ Booking } />
      <Footer />

    </div>
  </Router>
);

export default Routes;
