import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
  render(){
    return(
      <div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">

            <div class="col l4 offset-l2 s12">
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Locations</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Reel Careers</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Media Centre</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2019 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>


      </div>
    );
  }
}
export default Footer;
