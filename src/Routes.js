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
import Login from './components/Login';
import Slider from './components/Slider';
import MovieInfo from './components/MovieInfo';
import Cinema from './components/Cinema';
import ControlledCarousel from './components/ControlledCarousel';



const Routes = (
  <Router>
    <div>
    <Nav />
    <Slider />

      <Route exact path="/home" component={ Home } />

      <Route path="/movies/:city" component={ SelectCinema } />
      <Route path="/booking/:show_id" component={ Booking } />
      <Route exact path="/login" component={ Login } />
      <Route path="/movieinfo/:movie/:city" component={ MovieInfo } />
      <Route path="/cinemas/:city" component={ Cinema } />

      <Footer />

    </div>
  </Router>
);

export default Routes;
