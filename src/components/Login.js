import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';
import './Login.css'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {username: undefined, user: undefined}
    this._handleSubmit = this._handleSubmit.bind(this);
    // browserHistory.push('/home');
  }
  componentDidMount () {
  const token = window.localStorage.getItem('jwt');
  let nv;
  if (token) {
    nv = jwtDecode(token);
  }
  if (nv) {

    this.setState({user: `Welcome  ${nv.username}`})
  //  this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
   }

 }
  _handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.inputNode1.value);
    // console.log(this.inputNode2.value);
    var formData = new FormData();
    formData.append("username",this.inputNode1.value);
    formData.append("password",this.inputNode2.value);
    fetch("https://moviebookingserver.herokuapp.com/tokens",
         { method: 'POST',body: formData})
        .then(res => res.json()).then(res => (console.log(res.jwt),
           this.setState({username: this.inputNode1.value}),
           window.localStorage.setItem('jwt', res.jwt))
         // ).then(() => browserHistory.push('/home'))
       ).then(() => this.props.history.push('/home'))

       // )
         .catch(function(error) {
  console.log('There has been a problem with your fetch operation: ', error.message);
});
// console.log(this.props.history);

// let nv = jwtDecode(window.localStorage.getItem('jwt'));
//   this.setState({username: nv.username});
//     const {currentTarget} = event;
//   const formData = new FormData(currentTarget);
//   onSubmit({
//     email: formData.get('email'),
//     password: formData.get('password')
//   });
 }
  render(){
    return(
      <div class="wrapper fadeInDown">
        <div id="formContent">

          <div class="fadeIn first">
          </div>

          <form onSubmit={this._handleSubmit}>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" ref={node => {this.inputNode1 = node}}/>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" ref={node => {this.inputNode2 = node}}/>
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
          </div>

        </div>
      </div>

    );
  }
}
export default Login;
