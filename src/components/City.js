import React, { Component } from 'react';

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
      <div>
        <select onChange={this._handleChange}>
          <option value=""></option>
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Darwin">Darwin</option>
          <option value="Adelaide">Adelaide</option>

        </select>
      </div>
    );
  }
}

export default City;
