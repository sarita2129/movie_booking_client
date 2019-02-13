import React, { Component } from 'react';
import Movies from './Movies';
// import './City.css'

class SelectCinema extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <Movies city={this.props.match.params.city}/>
    );
  }
}
export default SelectCinema;
