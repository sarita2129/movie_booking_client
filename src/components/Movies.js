import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SERVER_MOVIE_FILTER_URL = 'https://moviebookingserver.herokuapp.com/getmoviesbycity/';
const SERVER_MOVIE_ALL_URL = 'https://moviebookingserver.herokuapp.com/movies.json';
// const SERVER_SHOW_URL = 'http://localhost:3000/shows.json';
const SERVER_SHOW_URL = 'https://moviebookingserver.herokuapp.com/showsbycity/';

class Movies extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies : []
      // shows : []
    }
    // console.log(SERVER_SHOW_URL + this.props.city + '.json');
    const fetchMovies = () => {
      // alert('1');

      axios.get(this.props.city === "all" ? SERVER_MOVIE_ALL_URL : SERVER_MOVIE_FILTER_URL + this.props.city + '.json').then((results) => {
        this.setState({movies: results.data})
        console.log(results.data);
        // setTimeout(fetchSeats,4000);
      });
        // if(this.props.city !== "")
        // {
        //   axios.get(SERVER_SHOW_URL + this.props.city + '.json').then((results) => {
        //     this.setState({shows: results.data})
        //     // console.log(results.data);
        //     // setTimeout(fetchSeats,4000);
        //   });
        // }
    }
    fetchMovies();
  }
  render(){
    return(
      <div className="container">
           { this.state.movies.map( (movie) => <div key={movie.id + 'moviediv'} className="row d-inline-block">
           <div className="col-md-4">
           <Link to={"/movieinfo/"+movie.id + "/" + this.props.city} className="btn btn-light">
           <div key={movie.id} className="moviediv">
            <img src={'../../' + movie.image} alt={movie.name} className="movieimg" key={'img' + movie.id}/>
            </div>
            </Link>
            </div>
            </div>) }
      </div>
    );
  }
}
export default Movies;
