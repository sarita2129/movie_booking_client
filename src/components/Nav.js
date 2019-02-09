import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/booking'>Booking</Link>

      </div>
    );
  }
}
export default Nav;
