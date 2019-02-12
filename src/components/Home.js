import React, { Component } from 'react';
import './Home.css'
import City from './City';

class Home extends Component{
  render(){
    return(
      <div>
        <City onSelect={(v) => this.updateCity(v)}/>
      <div class="bannercontainer">

      <div class="banner">
        <h4>Movie Banner 1</h4>
      </div>

      <div class="banner">
        <h4>Movie Banner 2</h4>
      </div>

      <div class="banner">
        <h4>Movie Banner 3</h4>
      </div>

      <div class="banner">
        <h4>Movie Banner 4</h4>
      </div>

      </div>

      </div>
    );
  }
}
export default Home;
