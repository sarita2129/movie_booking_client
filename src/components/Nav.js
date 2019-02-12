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

            <ul id="nav-mobile" class="right hide-on-med-and-down">

              <li>

              <li><Link to='/home'>Home</Link></li>
              <li><Link to= { '/movies/'+ this.state.city }>Movies</Link></li>
              </li>
            </ul>
            <div class="seltag">
            <select className="browser-default"onChange={this._handleChange}>
              <option value="" disabled selected>Your Location</option>
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Darwin">Darwin</option>
              <option value="Adelaide">Adelaide</option>
            </select>
            </div>
          </div>
        </nav>
      </nav>


    );
  }
}
export default Nav;
