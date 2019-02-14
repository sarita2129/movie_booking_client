import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SERVER_MOVIE_URL = 'https://moviebookingserver.herokuapp.com/movies/';
// const SERVER_SHOW_URL = 'http://localhost:3000/shows.json';
// const SERVER_SHOW_URL = 'http://localhost:3000/showsbycity/';

class MovieInfo extends Component{
 constructor(props){
   super(props);
   this.state = {
     movie: []
   }

   // console.log(SERVER_MOVIE_URL + this.props.match.params.movie + '.json');
   const fetchMovie = async () => {
     // alert('1')
       await axios.get(SERVER_MOVIE_URL + this.props.match.params.movie + '.json')
       .then((results) => {
         this.setState({movie: results.data})
         // debugger;
         // console.log(this.state.movie.id);
         // console.log(this.state.movie.name);
         // console.log(this.state.movie.image);

         // setTimeout(fetchSeats,4000);
       });

   }

   fetchMovie();
   //console.log("p" + this.state.movie);

 //  console.log(this.state);
 }


 render(){
   return(
     <div className="container">
        <div className="row form-group">
          <div className="col-8">
          <h1>{this.state.movie.name}</h1>
          </div>
          <div className="col-4">
            <Link to={"/cinemas/" + this.props.match.params.city} className="btn btn-primary mT10">Book</Link>
          </div>


        </div>

        <div className="row form-group">
        <div className="col-8">
            <h4>Synopsis</h4>
        </div>
        </div>
        <div className="row form-group">
        <div className="col-8">
            <p className="ptag">{this.state.movie.description}</p>
        </div>
        </div>
        <div className="row form-group">
          <div className="col-8">
            <h4>Director</h4><p>{this.state.movie.director}</p>
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
            <img src={this.state.movie.castimage1} alt={this.state.movie.castname1} className="castimg"/>
            <p>{this.state.movie.castname1}</p>
          </div>
          <div className="col-3">
            <img src={this.state.movie.castimage2} alt={this.state.movie.castname2} className="castimg"/>
            <p>{this.state.movie.castname2}</p>

          </div>
          <div className="col-3">
            <img src={this.state.movie.castimage3} alt={this.state.movie.castname3} className="castimg"/>
            <p>{this.state.movie.castname3}</p>
          </div>
        </div>
        </div>

      </div>
    );
  }
}
export default MovieInfo;
