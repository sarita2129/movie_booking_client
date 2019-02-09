import React, { Component } from 'react';
// import Seats from './Seats';
// import '../App.css';

class Seats extends Component{
  render() {
    return (
      <div
        className={this.props.value === null ? "square-red" : "square"}
        onClick={() => this.props.onClick()}>

      </div>
    );
  }
}
export default Seats;
