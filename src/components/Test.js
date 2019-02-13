import React, { Component } from 'react';
import Seats from './Seats';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const SERVER_BOOKING_URL = 'https://moviebookingserver.herokuapp.com/bookings.json';
// const SERVER_URL = 'http://localhost:3000/showbookings/6.json';
// const SERVER_URL = 'http://localhost:3000/shows.json';
 const SERVER_URL = 'https://moviebookingserver.herokuapp.com/shows/';

 class Test extends Component{
   constructor(props){
     super(props);
     this.state = {
       seats: [],//Array(24).fill(null),
       data: [],
       user_id: "",
       message: ""
     };
     // this.handleClick = this.handleClick.bind(this);
     // this.bookSeat = this.bookSeat.bind(this);
     // this.componentDidMount = this.componentDidMount.bind(this);


     // console.log(SERVER_URL + this.props.match.params.show_id + '.json');
     // console.log( this.props.match.params.show_id );
 //     axios.get('http://localhost:3000/showbookings/', {
 //          show_id: this.props.match.params.show_id
 // ,
 //   }).then((results) => {
 //          console.log({results})
     const fetchSeats = () => {
       axios.get(SERVER_URL + this.props.match.params.show_id + '.json').then((results) => {
         let num = 0;
         let arr = Array(48).fill(null);
         // console.log(results.data.bookings);
         // console.log(arr);
         // while(num <= 23)
         for(let j=0;j<=arr.length-1;j++)
         {
               // arr = results.data.map( (b) => console.log(b.seat )//=== num ? b.seat : null

                         for(let i=0;i<=results.data.bookings.length-1;i++)
                         {
                           if(results.data.bookings[i].seat === j)
                           // arr.push(results.data[i].seat)
                           arr[j] = results.data.bookings[i].seat;
                         }

         // num++;
         }
         this.setState({data: arr });
         // console.log(this.state.data);
         setTimeout(fetchSeats,4000);
       });

     };
     fetchSeats();
   }
   renderSeats(i,val){
     // console.log(this.state.seats);val === null ? '' : val

     return <Seats value={this.state.data[i]}
         onClick={() => this.handleClick(i)}/>;
   }
    render(){
      return(
        <div className="container">
        <div className="board-row screen">
          <div className="col-10 center">Infront of the cinema</div>
        </div>
          <div className="row">
            <div className="col-4 seatdiv">
                <div className="row">
                    <div className="col-10 offset-md-3">
                          <div className="square">A</div>
                          {this.renderSeats(0,this.state.data[0])}
                          {this.renderSeats(1,this.state.data[1])}
                          {this.renderSeats(2,this.state.data[2])}

                           {this.renderSeats(3,this.state.data[3])}
                           {this.renderSeats(4,this.state.data[4])}
                           {this.renderSeats(5,this.state.data[5])}
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-10 offset-md-3">
                           <div className="square">B</div>
                           {this.renderSeats(6,this.state.data[6])}
                           {this.renderSeats(7,this.state.data[7])}
                           {this.renderSeats(8,this.state.data[8])}

                           {this.renderSeats(9,this.state.data[9])}
                           {this.renderSeats(10,this.state.data[10])}
                           {this.renderSeats(11,this.state.data[11])}
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-10 offset-md-3">
                            <div className="square">C</div>
                            {this.renderSeats(12,this.state.data[12])}
                            {this.renderSeats(13,this.state.data[13])}
                            {this.renderSeats(14,this.state.data[14])}

                            {this.renderSeats(15,this.state.data[15])}
                            {this.renderSeats(16,this.state.data[16])}
                            {this.renderSeats(17,this.state.data[17])}
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-10 offset-md-3">
                             <div className="square">D</div>
                             {this.renderSeats(18,this.state.data[18])}
                             {this.renderSeats(19,this.state.data[19])}
                             {this.renderSeats(20,this.state.data[20])}

                             {this.renderSeats(21,this.state.data[21])}
                             {this.renderSeats(22,this.state.data[22])}
                             {this.renderSeats(23,this.state.data[23])}
                        </div>
                    </div>


            </div>
            <div className="col-4 seatdiv">
            <div className="row">
                <div className="col-10">
                      {this.renderSeats(24,this.state.data[24])}
                      {this.renderSeats(25,this.state.data[25])}
                      {this.renderSeats(26,this.state.data[26])}

                      {this.renderSeats(27,this.state.data[27])}
                      {this.renderSeats(28,this.state.data[28])}
                      {this.renderSeats(29,this.state.data[29])}
                      <div className="square">E</div>

                 </div>
             </div>
             <div className="row">
                 <div className="col-10">
                       {this.renderSeats(30,this.state.data[30])}
                       {this.renderSeats(31,this.state.data[31])}
                       {this.renderSeats(32,this.state.data[32])}

                       {this.renderSeats(33,this.state.data[33])}
                       {this.renderSeats(34,this.state.data[34])}
                       {this.renderSeats(35,this.state.data[35])}
                       <div className="square">F</div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-10">
                      {this.renderSeats(36,this.state.data[36])}
                      {this.renderSeats(37,this.state.data[37])}
                      {this.renderSeats(38,this.state.data[38])}

                      {this.renderSeats(39,this.state.data[39])}
                      {this.renderSeats(40,this.state.data[40])}
                      {this.renderSeats(41,this.state.data[41])}
                      <div className="square">G</div>
                   </div>
               </div>

               <div className="row">
                   <div className="col-10">
                       {this.renderSeats(42,this.state.data[42])}
                       {this.renderSeats(43,this.state.data[43])}
                       {this.renderSeats(44,this.state.data[44])}

                       {this.renderSeats(45,this.state.data[45])}
                       {this.renderSeats(46,this.state.data[46])}
                       {this.renderSeats(47,this.state.data[47])}
                        <div className="square">I</div>
                    </div>
                </div>

            </div>

          </div>
          <input type="submit" value="Book" className="btn btn-primary mL30" onClick={this.bookSeat} />

          <p className="pmsg mL30">{this.state.message}</p>

        </div>
      )
    }
 }
 export default Test;
