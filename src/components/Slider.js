import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class Slider extends Component{
  constructor(){
    super();
    this.state = {
      index: 0
    }
    this._handleCarousel = this._handleCarousel.bind(this);
    setInterval(() => {
      this._handleCarousel()
    },5000)
  }
  componentDidMount = () => {
    // setInterval(() => {
    //   $('.carousel').carousel({
    //         interval: 3000
    //     });
    //
    //     $('.carousel').carousel('cycle');
    // },2000);
  }
  _handleCarousel () {
    // setInterval(() => {
    //   alert('123');
    // },1000)
    this.setState({index: (this.state.index < 2) ? this.state.index + 1 : 0});
    // alert(this.state.index);

  }


  render(){
    return(
      <div>

      <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel" >
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleInterval" data-slide-to="0" className={this.state.index === 0 ? " active" : ""} onClick={this._handleCarousel}></li>
        <li data-target="#carouselExampleInterval" data-slide-to="1" className={this.state.index === 1 ? " active" : ""} onClick={this._handleCarousel}></li>
        <li data-target="#carouselExampleInterval" data-slide-to="2" className={this.state.index === 2 ? " active" : ""} onClick={this._handleCarousel}></li>
      </ol>
        <div className="carousel-inner">
          <div className={"carousel-item" + (this.state.index === 0 ? " active" : "")} data-interval="10000">
            <img src="images/banner1.jpg" className="d-block w-100" alt="banner1" />
          </div>
          <div className={"carousel-item" + (this.state.index === 1 ? " active" : "")} data-interval="2000">
            <img src="images/banner-2.jpg" className="d-block w-100" alt="banner2" />
          </div>
          <div className={"carousel-item" + (this.state.index === 2 ? " active" : "")}>
            <img src="images/banner3.jpg" className="d-block w-100" alt="banner3" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev"  >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        </div>
      </div>
    );
  }
}
export default Slider;
