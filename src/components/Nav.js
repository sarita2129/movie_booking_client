import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
// import {browserHistory} from 'react-router';

import { Link } from 'react-router-dom';

class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {
      city: "",
      username: undefined,
      user: undefined
    };
    this.updateCity = this.updateCity.bind(this);
  }
    componentDidMount () {
    const token = window.localStorage.getItem('jwt');
    let nv;
    if (token) {
      nv = jwtDecode(token);
    }
    if (nv) {

      this.setState({user: `Welcome  ${nv.username}`});
      // browserHistory.push('/home');
    //  this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
   }
  }
  signout(){
    alert('signout');
    // this.props.history.push('/home');
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
  <City onSelect={(v) => this.updateCity(v)}/>
  <Link to='/login' onClick={this.state.user ? this.signout : null}>{this.state.user ? "Logout" : "Login"}</Link>

  <p>{this.state.user} </p>
</div>
</nav>


          </div>
          </nav>
        </nav>


    );
  }
}
export default Nav;
