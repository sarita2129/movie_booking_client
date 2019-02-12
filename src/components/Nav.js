import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <nav>
      <nav class="nav-extended">

        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Reelsplex</a>



<ul id="dropdown1" class="dropdown-content">
<li><a href="#!">one</a></li>
<li><a href="#!">two</a></li>
<li class="divider"></li>
<li><a href="#!">three</a></li>
</ul>
<nav>
<div class="nav-wrapper">
  <ul class="right hide-on-med-and-down">
    <li><Link to='/home'>Home</Link></li>
    <li><Link to= { '/movies/'+ this.state.city }>Movies</Link></li>
    <li><Link to='/booking'>Booking</Link></li>

    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
  </ul>
</div>
</nav>


          </div>
          </nav>
        </nav>


    );
  }
}
export default Nav;
