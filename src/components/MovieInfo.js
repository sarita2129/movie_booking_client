import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SERVER_MOVIE_URL = 'http://localhost:3000/movies/';
// const SERVER_SHOW_URL = 'http://localhost:3000/shows.json';
// const SERVER_SHOW_URL = 'http://localhost:3000/showsbycity/';

class MovieInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      movie: []
    }

    console.log(SERVER_MOVIE_URL + this.props.match.params.movie + '.json');
    const fetchMovie = () => {
      // alert('1')
        axios.get(SERVER_MOVIE_URL + this.props.match.params.movie + '.json').then((results) => {
          this.setState({movie: results.data})
          console.log(results.data);
          // setTimeout(fetchSeats,4000);
        });

    }
    fetchMovie();
    console.log("p" + this.state.movie);
  }
  render(){
    return(
      <div className="container">
        <div className="row form-group">
          <div className="col-8">
            <h1 >Movie Title</h1>
          </div>
          <div className="col-4">
            <Link to={"/cinemas/" + this.props.match.params.city} className="btn btn-primary mT10">Book</Link>
          </div>


        </div>
        <div className="row form-group">
        <div className="col-8">
        <h3>Synopsis</h3>
        </div>
        </div>
        <div className="row form-group">
        <div className="col-8">
            <p className="ptag">loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremlorem</p>
        </div>
        </div>
        <div className="row form-group">
          <div className="col-8">
            <h3>Director  </h3><p>DirectorName</p>
          </div>
        </div>
        <div>
        <div className="row form-group">
        <div className="col-8">
        <h3>Cast and Crew</h3>
        </div>
        </div>
        <div className="row form-group">
          <div className="col-3">
            <img src="http://www.fillmurray.com/400/700" alt="fillmurray" className="castimg"/>
            <p>Bill Murray</p>
          </div>
          <div className="col-3">
            <img src="http://www.fillmurray.com/400/700" alt="fillmurray" className="castimg"/>
            <p>Bill Murray</p>
          </div>
          <div className="col-3">
            <img src="http://www.fillmurray.com/400/700" alt="fillmurray" className="castimg"/>
            <p>Bill Murray</p>
          </div>
        </div>
        </div>

      </div>
    );
  }
}
export default MovieInfo;
