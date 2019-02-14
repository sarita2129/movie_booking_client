import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
// import {browserHistory} from 'react-router';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import City from './City';
import Login from './Login';
import jwtDecode from 'jwt-decode';
import './Nav.css'

class Nav extends Component{
  constructor(){
    super();
    this.state = {
      city: "",
      username: undefined,
      user: undefined
    };
    $('#myModal').on('shown.bs.modal', function () {
       $('#myInput').trigger('focus')
     })
    this.updateCity = this.updateCity.bind(this);
  }
    componentDidMount () {
    const token = window.localStorage.getItem('jwt');
    let nv;
    if (token) {
      nv = jwtDecode(token);
    }
    // console.log(nv)
    if (nv) {

      this.setState({user: `Welcome,  ${nv.username}`});
      // browserHistory.push('/home');
    //  this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
   }
   if(this.state.city === "")
   {
     $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
   }
  }
  signout(){
    // alert('signout');
    localStorage.clear();
    window.location.href = '/';
    // this.props.history.push('/home');
  }
  updateCity(city){
    this.setState({city:city});

    // alert(this.state.city);
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark navbarbg" >
          <img style={{width: '200px', height: '100px'}} src="images/logo.png" />
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/home' className="navbar-brand">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to={ '/movies/'+ (this.state.city === "" ? "all" : this.state.city) } className="navbar-brand">Movies</Link>
            </li>

            <li className="nav-item active">
              <City onSelect={(v) => this.updateCity(v)} className="navbar-brand"/>
            </li>

          </ul>
          <span className="navbar-text">

          <img style={{width: '30px', height: '30px'}} src="images/user.png" />
          {this.state.user ? this.state.user + '|' : null}
            <Link to='/login' onClick={this.state.user ? this.signout : null} className="navbar-brand">{this.state.user ? "Logout" : "Login"}</Link>
          </span>

          <div className="modal" tabindex="-1" role="dialog" id="myModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </nav>

    );
  }
}
export default Nav;
