import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SERVER_SHOW_URL = 'http://localhost:3000/showsbycity/';

class Cinema extends Component{
  constructor(props){
    super(props);
    this.state = {
      cinema : [],
      shows : []
    }
    const fetchCinema = () => {
      axios.get(SERVER_SHOW_URL + this.props.match.params.city + '.json').then((results) => {
        this.setState({shows: results.data})
        console.log(results.data);
        // setTimeout(fetchSeats,4000);
      });
      // let array = [
      //   { "name": "Joe", "age": 17 },
      //   { "name": "Bob", "age": 17 },
      //   { "name": "Carl", "age": 35 }
      // ];
      const cinema = this.state.shows.map(item => item.name)
        .filter((value, index, self) => self.indexOf(value) === index)
        this.setState({cinema: cinema});
    }
    fetchCinema();

}
      render(){
        return(
          <div className="container">
            { this.state.shows.map( (cinemas) =>
              <div className="row cinemadiv mT10">
                <div className="col-3 br"><h3>Event Cinemas</h3></div>
                <div className="col-8">
                 {this.state.shows.map( (show) =>  <Link to={'/booking/'+ show.id} className="btn btn-secondary mT10">{show.time}</Link>)}
                </div>
              </div>
            )}
          </div>
        );
      }
}
export default Cinema;
