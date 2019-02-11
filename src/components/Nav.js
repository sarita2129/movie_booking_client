import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import City from './City';

class Nav extends Component{
  constructor(){
    super();
    this.state = {
      city: ""
    }
    this.updateCity = this.updateCity.bind(this);
  }
  updateCity(city){
    this.setState({city:city});
    // alert(this.state.city);
  }
  render(){
    return(
      <div>
        <Link to='/home'>Home</Link>
        <Link to= { '/movies/'+ this.state.city }>Movies</Link>
        <Link to='/booking'>Booking</Link>
        <City onSelect={(v) => this.updateCity(v)}/>
      </div>
    );
  }
}
export default Nav;
