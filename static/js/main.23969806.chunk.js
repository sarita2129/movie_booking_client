(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(37),l=a.n(r),c=(a(85),a(3)),i=a(4),o=a(6),m=a(5),d=a(7),u=a(8),h=a(20),v=a.n(h),p=a(186),b=(a(87),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e)))._handleChange=a._handleChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_handleChange",value:function(e){this.props.onSelect(e.target.value)}},{key:"render",value:function(){return s.a.createElement("select",{class:"selc",onChange:this._handleChange},s.a.createElement("option",{value:"",disabled:!0,selected:!0}),s.a.createElement("option",{value:"Sydney"},"Sydney"),s.a.createElement("option",{value:"Melbourne"},"Melbourne"),s.a.createElement("option",{value:"Brisbane"},"Brisbane"),s.a.createElement("option",{value:"Darwin"},"Darwin"),s.a.createElement("option",{value:"Adelaide"},"Adelaide"))}}]),t}(n.Component)),E=(a(184),a(24)),g=a.n(E),f=(a(101),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e)))._handleSubmit=function(e){e.preventDefault();var t=new FormData;t.append("username",a.inputNode1.value),t.append("password",a.inputNode2.value),fetch("https://moviebookingserver.herokuapp.com/tokens",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){return console.log(e.jwt),a.setState({username:a.inputNode1.value}),window.localStorage.setItem("jwt",e.jwt)}).then(function(){return a.props.history.push("/home")}).then(function(){return window.location.reload()}).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})},a.state={username:void 0,user:void 0},a._handleSubmit=a._handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=window.localStorage.getItem("jwt");t&&(e=g()(t)),e&&this.setState({user:"Welcome  ".concat(e.username)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{class:"wrapper fadeInDown"},s.a.createElement("div",{id:"formContent"},s.a.createElement("div",{class:"fadeIn first"}),s.a.createElement("form",{onSubmit:this._handleSubmit},s.a.createElement("input",{type:"text",id:"login",class:"fadeIn second",name:"login",placeholder:"login",ref:function(t){e.inputNode1=t}}),s.a.createElement("input",{type:"password",id:"password",class:"fadeIn third passwordinput",name:"login",placeholder:"password",ref:function(t){e.inputNode2=t}}),s.a.createElement("input",{type:"submit",class:"fadeIn fourth",value:"Log In"})),s.a.createElement("div",{id:"formFooter"},s.a.createElement("a",{class:"underlineHover",href:"#"},"Forgot Password?"))))}}]),t}(n.Component)),w=(a(103),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={city:"",username:void 0,user:void 0},v()("#myModal").on("shown.bs.modal",function(){v()("#myInput").trigger("focus")}),e.updateCity=e.updateCity.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=window.localStorage.getItem("jwt");t&&(e=g()(t)),e&&this.setState({user:"Welcome,  ".concat(e.username)}),""===this.state.city&&v()("#myModal").on("shown.bs.modal",function(){v()("#myInput").trigger("focus")})}},{key:"signout",value:function(){localStorage.clear(),window.location.hash="home",window.location.reload()}},{key:"updateCity",value:function(e){this.setState({city:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark navbarbg"},s.a.createElement("img",{style:{width:"200px",height:"100px"},src:"images/logo.png"}),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement(p.a,{to:"/home",className:"navbar-brand"},"Home")),s.a.createElement("li",{className:"nav-item active"},s.a.createElement(p.a,{to:"/movies/"+(""===this.state.city?"all":this.state.city),className:"navbar-brand"},"Movies")),s.a.createElement("li",{className:"nav-item active"},s.a.createElement(b,{onSelect:function(t){return e.updateCity(t)},className:"navbar-brand"}))),s.a.createElement("span",{className:"navbar-text"},s.a.createElement("img",{style:{width:"30px",height:"30px"},src:"images/user.png"}),this.state.user?this.state.user+"|":null,this.state.user?s.a.createElement("a",{href:"#",onClick:this.signout,className:"navbar-brand"},"Logout"):s.a.createElement(p.a,{to:"/login",className:"navbar-brand"},"Login")),s.a.createElement("div",{className:"modal",tabindex:"-1",role:"dialog",id:"myModal"},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},"Modal title"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("p",null,"Modal body text goes here.")),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-primary"},"Save changes"),s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))))))}}]),t}(n.Component)),y=(a(105),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("footer",{class:"container-fluid bg-grey py-5"},s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-md-6"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-md-6 "},s.a.createElement("div",{class:"logo-part"},s.a.createElement("img",{style:{width:"200px",height:"100px"},src:"images/logo.png"}))),s.a.createElement("div",{class:"col-md-6 px-4"},s.a.createElement("a",{href:"#",class:"btn-footer"}," More Info "),s.a.createElement("a",{href:"#",class:"btn-footer"}," Contact Us")))),s.a.createElement("div",{class:"col-md-6"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-md-6 px-4"},s.a.createElement("div",{class:"row "},s.a.createElement("div",{class:"col-md-6"},s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement("a",{href:"#"}," Home")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#"}," About")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#"}," Careers")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#"}," Policy")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#"}," Refunds")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#"}," Help")," "),s.a.createElement("li",null," ",s.a.createElement("a",{href:"#"}," Contact")," "))))),s.a.createElement("div",{class:"col-md-6 "},s.a.createElement("h6",null," Newsletter"),s.a.createElement("div",{class:"social"},s.a.createElement("a",{href:"#"},s.a.createElement("img",{style:{width:"50px",height:"50px"},src:"images/facebook.png"})),s.a.createElement("a",{href:"#"},s.a.createElement("img",{style:{width:"40px",height:"40px"},src:"images/instagram.png"})),s.a.createElement("a",{href:"#"},s.a.createElement("img",{style:{width:"40px",height:"40px"},src:"images/googleplus.png"})),s.a.createElement("a",{href:"#"},s.a.createElement("img",{style:{width:"40px",height:"40px"},src:"images/twitter.png"}))),s.a.createElement("form",{class:"form-footer my-3"},s.a.createElement("input",{type:"text",placeholder:"search here....",name:"search"}),s.a.createElement("input",{type:"button",value:"Go"})),s.a.createElement("p",null,"Copyrights Reelsplex 2019"))))))))}}]),t}(n.Component));n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(187),j=a(188),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).componentDidMount=function(){},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{class:"album py-5 bg-light"},s.a.createElement("div",{class:"container"},s.a.createElement("h1",null,"Coming Soon"),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-md-4"},s.a.createElement("div",{class:"card mb-4 box-shadow"},s.a.createElement("img",{class:"card-img-top",src:"images/Collete.jpg","data-holder-rendered":"true"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),s.a.createElement("div",{class:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{class:"btn-group"},s.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"View")))))),s.a.createElement("div",{class:"col-md-4"},s.a.createElement("div",{class:"card mb-4 box-shadow"},s.a.createElement("img",{class:"card-img-top",src:"images/Alita.jpg","data-holder-rendered":"true"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),s.a.createElement("div",{class:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{class:"btn-group"},s.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"View")))))),s.a.createElement("div",{class:"col-md-4"},s.a.createElement("div",{class:"card mb-4 box-shadow"},s.a.createElement("img",{class:"card-img-top",src:"images/TheFavorite.jpg","data-holder-rendered":"true"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),s.a.createElement("div",{class:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{class:"btn-group"},s.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"View")))))),s.a.createElement("div",{class:"col-md-4"},s.a.createElement("div",{class:"card mb-4 box-shadow"},s.a.createElement("img",{class:"card-img-top",src:"images/Frontrunner.jpg","data-holder-rendered":"true"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),s.a.createElement("div",{class:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{class:"btn-group"},s.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"View")))))),s.a.createElement("div",{class:"col-md-4"},s.a.createElement("div",{class:"card mb-4 box-shadow"},s.a.createElement("img",{class:"card-img-top",src:"images/Bohemian.jpg","data-holder-rendered":"true"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),s.a.createElement("div",{class:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{class:"btn-group"},s.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"View")))))),s.a.createElement("div",{class:"col-md-4"},s.a.createElement("div",{class:"card mb-4 box-shadow"},s.a.createElement("img",{class:"card-img-top",src:"images/Bumblebee.jpg","data-holder-rendered":"true"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),s.a.createElement("div",{class:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{class:"btn-group"},s.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"View"))))))))))}}]),t}(n.Component),x=a(12),O=a.n(x),k="https://moviebookingserver.herokuapp.com/getmoviesbycity/",C="https://moviebookingserver.herokuapp.com/movies.json",_=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={movies:[]};return O.a.get("all"===a.props.city?C:k+a.props.city+".json").then(function(e){a.setState({movies:e.data}),console.log(e.data)}),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.state.movies.map(function(t){return s.a.createElement("div",{key:t.id+"moviediv",className:"row d-inline-block"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement(p.a,{to:"/movieinfo/"+t.id+"/"+e.props.city,className:"btn btn-light"},s.a.createElement("div",{key:t.id,className:"moviediv"},s.a.createElement("img",{src:t.image,alt:t.name,className:"movieimg",key:"img"+t.id})))))}))}}]),t}(n.Component),I=a(78),M=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:null===this.props.value?"square":"square-red",onClick:function(){return e.props.onClick()}})}}]),t}(n.Component),T="https://moviebookingserver.herokuapp.com/shows/",D=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={seats:[],data:[],user_id:"",message:""},a.handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a.bookSeat=a.bookSeat.bind(Object(u.a)(Object(u.a)(a))),a.componentDidMount=a.componentDidMount.bind(Object(u.a)(Object(u.a)(a)));return function e(){O.a.get(T+a.props.match.params.show_id+".json").then(function(t){for(var n=Array(48).fill(null),s=0;s<=n.length-1;s++){for(var r=0;r<=t.data.bookings.length-1;r++)t.data.bookings[r].seat===s&&(n[s]=t.data.bookings[r].seat);if(null!=a.state.seats&&a.state.seats.length>0)for(var l=0;l<=a.state.seats.length-1;l++)a.state.seats[l]===s&&(n[s]=a.state.seats[l])}a.setState({data:n}),setTimeout(e,4e3)})}(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=window.localStorage.getItem("jwt");t&&(e=g()(t)),e&&this.setState({user_id:e.id})}},{key:"bookSeat",value:function(){var e=this;this.componentDidMount();for(var t=[],a=0;a<=this.state.seats.length-1;a++){var n={};n.show_id=this.props.match.params.show_id,n.user_id=this.state.user_id,n.seat=this.state.seats[a];var s=O()({method:"post",url:"https://moviebookingserver.herokuapp.com/bookings.json",data:n});t.push(s)}O.a.all(t).then(function(){e.setState({message:"Seats booked Succesfully."})}).catch(function(t){e.setState({message:t.message})})}},{key:"handleClick",value:function(e){var t=this.state.data.slice();null==t[e]&&(t[e]=e,this.setState({data:t}),this.setState({seats:[].concat(Object(I.a)(this.state.seats),[e])}))}},{key:"renderSeats",value:function(e,t){var a=this;return s.a.createElement(M,{value:this.state.data[e],onClick:function(){return a.handleClick(e)}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"board-row screen center"},"Infront of the cinema"),s.a.createElement("div",{className:"row divcenter"},s.a.createElement("div",{className:"col-8 offset-md-2"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cinemarowtext"},"A"),this.renderSeats(0,this.state.data[0]),this.renderSeats(1,this.state.data[1]),this.renderSeats(2,this.state.data[2]),this.renderSeats(3,this.state.data[3]),this.renderSeats(4,this.state.data[4]),this.renderSeats(5,this.state.data[5])),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cinemarowtext"},"B"),this.renderSeats(6,this.state.data[6]),this.renderSeats(7,this.state.data[7]),this.renderSeats(8,this.state.data[8]),this.renderSeats(9,this.state.data[9]),this.renderSeats(10,this.state.data[10]),this.renderSeats(11,this.state.data[11])),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cinemarowtext"},"C"),this.renderSeats(12,this.state.data[12]),this.renderSeats(13,this.state.data[13]),this.renderSeats(14,this.state.data[14]),this.renderSeats(15,this.state.data[15]),this.renderSeats(16,this.state.data[16]),this.renderSeats(17,this.state.data[17])),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"cinemarowtext"},"D"),this.renderSeats(18,this.state.data[18]),this.renderSeats(19,this.state.data[19]),this.renderSeats(20,this.state.data[20]),this.renderSeats(21,this.state.data[21]),this.renderSeats(22,this.state.data[22]),this.renderSeats(23,this.state.data[23]))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"row"},this.renderSeats(24,this.state.data[24]),this.renderSeats(25,this.state.data[25]),this.renderSeats(26,this.state.data[26]),this.renderSeats(27,this.state.data[27]),this.renderSeats(28,this.state.data[28]),this.renderSeats(29,this.state.data[29]),s.a.createElement("div",{className:"cinemarowtext"},"E")),s.a.createElement("div",{className:"row"},this.renderSeats(30,this.state.data[30]),this.renderSeats(31,this.state.data[31]),this.renderSeats(32,this.state.data[32]),this.renderSeats(33,this.state.data[33]),this.renderSeats(34,this.state.data[34]),this.renderSeats(35,this.state.data[35]),s.a.createElement("div",{className:"cinemarowtext"},"F")),s.a.createElement("div",{className:"row"},this.renderSeats(36,this.state.data[36]),this.renderSeats(37,this.state.data[37]),this.renderSeats(38,this.state.data[38]),this.renderSeats(39,this.state.data[39]),this.renderSeats(40,this.state.data[40]),this.renderSeats(41,this.state.data[41]),s.a.createElement("div",{className:"cinemarowtext"},"G")),s.a.createElement("div",{className:"row"},this.renderSeats(42,this.state.data[42]),this.renderSeats(43,this.state.data[43]),this.renderSeats(44,this.state.data[44]),this.renderSeats(45,this.state.data[45]),this.renderSeats(46,this.state.data[46]),this.renderSeats(47,this.state.data[47]),s.a.createElement("div",{className:"cinemarowtext"},"H")))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-4 offset-md-4"},s.a.createElement("input",{type:"submit",value:"Book",className:"btn btn-primary mL30",onClick:this.bookSeat}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-4 offset-md-4"},s.a.createElement("p",{className:"pmsg"},this.state.message))))}}]),t}(n.Component),B=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(_,{city:this.props.match.params.city})}}]),t}(n.Component),A=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){},e.state={index:0},e._handleCarousel=e._handleCarousel.bind(Object(u.a)(Object(u.a)(e))),setInterval(function(){e._handleCarousel()},5e3),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_handleCarousel",value:function(){this.setState({index:this.state.index<2?this.state.index+1:0})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"carouselExampleInterval",className:"carousel slide","data-ride":"carousel"},s.a.createElement("ol",{className:"carousel-indicators"},s.a.createElement("li",{"data-target":"#carouselExampleInterval","data-slide-to":"0",className:0===this.state.index?" active":"",onClick:this._handleCarousel}),s.a.createElement("li",{"data-target":"#carouselExampleInterval","data-slide-to":"1",className:1===this.state.index?" active":"",onClick:this._handleCarousel}),s.a.createElement("li",{"data-target":"#carouselExampleInterval","data-slide-to":"2",className:2===this.state.index?" active":"",onClick:this._handleCarousel})),s.a.createElement("div",{className:"carousel-inner"},s.a.createElement("div",{className:"carousel-item"+(0===this.state.index?" active":""),"data-interval":"10000"},s.a.createElement("img",{src:"images/banner1.jpg",className:"d-block w-100",alt:"banner1"})),s.a.createElement("div",{className:"carousel-item"+(1===this.state.index?" active":""),"data-interval":"2000"},s.a.createElement("img",{src:"images/banner-2.jpg",className:"d-block w-100",alt:"banner2"})),s.a.createElement("div",{className:"carousel-item"+(2===this.state.index?" active":"")},s.a.createElement("img",{src:"images/banner3.jpg",className:"d-block w-100",alt:"banner3"}))),s.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleInterval",role:"button","data-slide":"prev"},s.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"sr-only"},"Previous")),s.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleInterval",role:"button","data-slide":"next"},s.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"sr-only"},"Next"))))}}]),t}(n.Component),F="http://localhost:3000/movies/",V=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={movie:[]},console.log(F+a.props.match.params.movie+".json");return O.a.get(F+a.props.match.params.movie+".json").then(function(e){a.setState({movie:e.data}),console.log(e.data)}),console.log("p"+a.state.movie),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row form-group"},s.a.createElement("div",{className:"col-8"},s.a.createElement("h1",null,"Movie Title")),s.a.createElement("div",{className:"col-4"},s.a.createElement(p.a,{to:"/cinemas/"+this.props.match.params.city,className:"btn btn-primary mT10"},"Book"))),s.a.createElement("div",{className:"row form-group"},s.a.createElement("div",{className:"col-8"},s.a.createElement("h3",null,"Synopsis"))),s.a.createElement("div",{className:"row form-group"},s.a.createElement("div",{className:"col-8"},s.a.createElement("p",{className:"ptag"},"loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremloremlorem"))),s.a.createElement("div",{className:"row form-group"},s.a.createElement("div",{className:"col-8"},s.a.createElement("h3",null,"Director  "),s.a.createElement("p",null,"DirectorName"))),s.a.createElement("div",null,s.a.createElement("div",{className:"row form-group"},s.a.createElement("div",{className:"col-8"},s.a.createElement("h3",null,"Cast and Crew"))),s.a.createElement("div",{className:"row form-group"},s.a.createElement("div",{className:"col-3"},s.a.createElement("img",{src:"http://www.fillmurray.com/400/700",alt:"fillmurray",className:"castimg"}),s.a.createElement("p",null,"Bill Murray")),s.a.createElement("div",{className:"col-3"},s.a.createElement("img",{src:"http://www.fillmurray.com/400/700",alt:"fillmurray",className:"castimg"}),s.a.createElement("p",null,"Bill Murray")),s.a.createElement("div",{className:"col-3"},s.a.createElement("img",{src:"http://www.fillmurray.com/400/700",alt:"fillmurray",className:"castimg"}),s.a.createElement("p",null,"Bill Murray")))))}}]),t}(n.Component),H="https://moviebookingserver.herokuapp.com/showsbycity/",L=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={cinema:[],shows:[]};return O.a.get(H+a.props.match.params.city+".json").then(function(e){a.setState({shows:e.data}),console.log(e.data)}).then(function(e){var t=a.state.shows.map(function(e){return e.name}).filter(function(e,t,a){return a.indexOf(e)===t});a.setState({cinema:t}),console.log(t)}),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.state.cinema.map(function(t){return s.a.createElement("div",{className:"row cinemadiv mT10"},s.a.createElement("div",{className:"col-3 br"},s.a.createElement("h3",{className:"pcenter"},t)),s.a.createElement("div",{className:"col-8"},e.state.shows.map(function(e){return s.a.createElement(p.a,{to:"/booking/"+e.id,className:"btn btn-secondary m10"},e.time)})))}))}}]),t}(n.Component),P=a(17),W=a.n(P),q=(s.a.Component,s.a.createElement(N.a,null,s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(A,null),s.a.createElement(j.a,{exact:!0,path:"/home",component:S}),s.a.createElement(j.a,{path:"/movies/:city",component:B}),s.a.createElement(j.a,{path:"/booking/:show_id",component:D}),s.a.createElement(j.a,{exact:!0,path:"/login",component:f}),s.a.createElement(j.a,{path:"/movieinfo/:movie/:city",component:V}),s.a.createElement(j.a,{path:"/cinemas/:city",component:L}),s.a.createElement(y,null))));l.a.render(q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a(185)},85:function(e,t,a){},87:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.23969806.chunk.js.map