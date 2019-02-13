import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
// import {browserHistory} from 'react-router';
import $ from 'jquery';
import { Link } from 'react-router-dom';

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
    if (nv) {

      this.setState({user: `Welcome  ${nv.username}`});
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
    alert('signout');
    // this.props.history.push('/home');
  }
  updateCity(city){
    this.setState({city:city});
    // alert(this.state.city);
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark navbarbg" >

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

            {this.state.user} |
            <Link to='/login' onClick={this.state.user ? this.signout : null} className="navbar-brand">{this.state.user ? "Logout" : "Login"}</Link>

          </span>

          <div class="modal" tabindex="-1" role="dialog" id="myModal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
