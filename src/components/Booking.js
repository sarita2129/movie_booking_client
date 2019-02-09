import React, { Component } from 'react';
import Seats from './Seats';
import axios from 'axios';
const SERVER_URL = 'http://localhost:3000/bookings.json';

class Booking extends Component{
  constructor(){
    super();
    this.state = {
      seats: [],//Array(24).fill(null),
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.bookSeat = this.bookSeat.bind(this);

    const fetchSeats = () => {
      axios.get(SERVER_URL).then((results) => {
        // this.setState({secrets: results.data });
        // setTimeout(fetchSecrets,4000);
        let num = 0;
        let arr = Array(24).fill(null);
        console.log(results.data);
        // while(num <= 23)
        for(let j=0;j<=23;j++)
        {
              // arr = results.data.map( (b) => console.log(b.seat )//=== num ? b.seat : null

                        for(let i=0;i<=results.data.length-1;i++)
                        {
                          if(results.data[i].seat === j)
                          // arr.push(results.data[i].seat)
                          arr[j] = results.data[i].seat;
                        }

        // num++;
        }
        this.setState({data: arr });
        console.log(this.state.data);
        setTimeout(fetchSeats,4000);
      });

    };
    fetchSeats();
  }
  bookSeat(){
    alert('1');
    let axiosArray = []
    for (let j=0;j<=this.state.seats.length-1;j++) {
      let postData = {}
      postData['show_id'] = 6
      postData['user_id'] = 1
      postData['seat'] = this.state.seats[j]

      let newPromise = axios({
          method: 'post',
          url: SERVER_URL,
          data: postData
        })
      axiosArray.push(newPromise)
    }
    console.log(axiosArray);
    axios
    .all(axiosArray)
    .then(() => {
    console.log('submitted all axios calls')
    })
    // .then(axios.spread((...axiosArray) => {
    //     for (let i = 0; i < axiosArray.length; i++) {
    //         console.log(axiosArray[i]);
    //     }
    // }))
    .catch(error => {})
    // console.log(this.state.data.filter(item => item != null ));
    // for(let j=0;j<=this.state.seats;j++)
    // {
    //   axios.post(SERVER_URL , {
    //     show_id: 6,
    //     user_id: 1,
    //     seat: this.state.seats[j]
    //   }).then((results) => {
    //     console.log({results})
    //   });
    // }

  }
  handleClick(i) {
    // const squares = this.state.seats.slice();
    // squares[i] = this.state.seats;
    // this.setState({seats: squares});
    const seats = this.state.data.slice();
    if(seats[i] != null)
    return;

    seats[i] = i;
    this.setState({data: seats});
    this.setState({seats: [...this.state.seats, i]});

    console.log(this.state.data);
  }
  renderSeats(i,val){
    // console.log(this.state.seats);val === null ? '' : val

    return <Seats value={this.state.data[i]}
        onClick={() => this.handleClick(i)}/>;
  }
  // CallrenderSeats(){
  //   let i = 0;
  //   while (i <= 23) {
  //     this.renderSeats(i,this.state.data[i])
  //     i++;
  //   }
  // }

  render(){
    return(
      <div>
          Please select your seat:
          <br />

        <div className="board-row">

          {this.renderSeats(0,this.state.data[0])}
          {this.renderSeats(1,this.state.data[1])}
          {this.renderSeats(2,this.state.data[2])}

          {this.renderSeats(3,this.state.data[3])}
          {this.renderSeats(4,this.state.data[4])}
          {this.renderSeats(5,this.state.data[5])}
        </div>
        <div className="board-row">
          {this.renderSeats(6,this.state.data[6])}
          {this.renderSeats(7,this.state.data[7])}
          {this.renderSeats(8,this.state.data[8])}

          {this.renderSeats(9,this.state.data[9])}
          {this.renderSeats(10,this.state.data[10])}
          {this.renderSeats(11,this.state.data[11])}
        </div>
        <div className="board-row">
          {this.renderSeats(12,this.state.data[12])}
          {this.renderSeats(13,this.state.data[13])}
          {this.renderSeats(14,this.state.data[14])}

          {this.renderSeats(15,this.state.data[15])}
          {this.renderSeats(16,this.state.data[16])}
          {this.renderSeats(17,this.state.data[17])}

        </div>
        <div className="board-row">
          {this.renderSeats(18,this.state.data[18])}
          {this.renderSeats(19,this.state.data[19])}
          {this.renderSeats(20,this.state.data[20])}

          {this.renderSeats(21,this.state.data[21])}
          {this.renderSeats(22,this.state.data[22])}
          {this.renderSeats(23,this.state.data[23])}

        </div>
        <input type="submit" value="Book" onClick={this.bookSeat} />
      </div>
    );
  }
}
// function Seats(props) {
// return (
//   <button onClick={() => this.setState({seats: 'X'})}>
//     { this.state.seats }
//   </button>
// );
// }
export default Booking;
