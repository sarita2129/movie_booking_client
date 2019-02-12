import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
// import {browserHistory} from 'react-router';

import { Link } from 'react-router-dom';
import City from './City';
import Login from './Login';
import jwtDecode from 'jwt-decode';

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
      <div>
        <Link to='/home'>Home</Link>
        <Link to= { '/movies/'+ this.state.city }>Movies</Link>
        <Link to='/booking'>Booking</Link>
        <City onSelect={(v) => this.updateCity(v)}/>
        <Link to='/login' onClick={this.state.user ? this.signout : null}>{this.state.user ? "Logout" : "Login"}</Link>

        <p>{this.state.user} </p>
      </div>
    );
  }
}
export default Nav;
