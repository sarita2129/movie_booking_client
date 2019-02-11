
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SERVER_MOVIE_URL = 'http://localhost:3000/movies.json';
// const SERVER_SHOW_URL = 'http://localhost:3000/shows.json';
const SERVER_SHOW_URL = 'http://localhost:3000/showsbycity/';

class Movies extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies : [],
      shows : []
    }
    console.log(SERVER_SHOW_URL + this.props.city + '.json');
    const fetchMovies = () => {

        axios.get(SERVER_MOVIE_URL).then((results) => {
          this.setState({movies: results.data})
          // console.log(results.data);
          // setTimeout(fetchSeats,4000);
        });
        if(this.props.city !== "")
        {
          axios.get(SERVER_SHOW_URL + this.props.city + '.json').then((results) => {
            this.setState({shows: results.data})
            console.log(results.data);
            // setTimeout(fetchSeats,4000);
          });
        }
    }
    fetchMovies();
  }
  render(){
    return(
      <div>
           { this.state.movies.map( (movie) => <div key={movie.id + 'moviediv'}><div key={movie.id} className="moviediv">
            <h2 key={'h1' + movie.id}>{movie.name}</h2>
            <img src={movie.image} alt={movie.name} className="movieimg" key={'img' + movie.id}/>
            <button>Movie Info</button>
            <button>Watch trailer</button>
            </div>
            <div className="movieshow" key={movie.id + 'movieshow'}>{this.props.city === "" ?
            <p key={'p' + movie.id}>To find movie sessions and times you will need to selection a cinema location.</p> :
            this.state.shows.map( (show) =>  <Link to={'/booking/'+ show.id} >{show.movie_id === movie.id ? show.time : null}</Link>)}</div>
            </div>) }
      </div>
    );
  }
}
export default Movies;
