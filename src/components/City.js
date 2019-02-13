import React, { Component } from 'react';
import './City.css';

class City extends Component {
  constructor(props){
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(e){
    // alert(e.target.value);
    this.props.onSelect(e.target.value)
  }
  render(){
    return(
        <select onChange={this._handleChange}>
          <option value="" disabled selected></option>
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Darwin">Darwin</option>
          <option value="Adelaide">Adelaide</option>
        </select>
    );
  }
}

export default City;
