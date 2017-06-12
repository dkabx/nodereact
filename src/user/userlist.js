import React, { Component } from 'react';
import '../App.css';
import '../login.css';
import {NavLink} from 'react-router-dom';
import {sendLogin} from '../redux/actions/login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../redux/store';
import io from 'socket.io-client';
import ReactDOM from 'react-dom';
import {getUserList} from '../redux/actions/user';
const socket = io.connect("http://localhost:5000");


// import createHistory from 'history/createBrowserHistory';

// var history = createHistory();
class UserList extends Component {
 constructor(){
   super();
   this.state = {
     roomid:'',
     users:[]
   }

 }
  componentWillMount(){
    this.props.getUserList();

    socket.emit('join',{roomid:this.props.loggedUser._id});
  }
  componentDidMount(){
    console.log(this.refs);
  socket.on('online',function(data){

     if(this.refs != undefined && Object.keys(this.refs).length){
     console.log("HJHJHJHHDSRESRESRSFDSFDSFDSFDSFDSFDSFDSF",data);
   }
  });



  }
//   onFocus() {
//   this.refs.myInput.style.display = "none";
// }

  joinRoom(e){
    this.setState({ roomid: e.target.value});

  }
  render() {

    return (
      <div className=" col-md-4">
        <div className="jumbotron">
            <div className="checkbox">

              {this.props.userlist.length ?
                 this.props.userlist.map((user, i) => (
                   <div>
                   <label><input className="messageCheckbox" onClick={this.joinRoom.bind(this)} value={user._id} name="a"  type="radio" /> {user.email}</label>
                   <span style={{display: 'block'}} ><img height='8px' width="8px" src="http://www.clker.com/cliparts/Z/n/g/w/C/y/green-dot-md.png"/></span>
                   </div>
                    ))
                 : ''
              }

      </div>

            <div className="form-group" >
                     <div>
                       <input type='text'  ref="myInput"  className="form-control" id="sendmsg" placeholder="Tell your friends about your day" />
                     </div>
           </div>
        </div>
      </div>
)
  }
}
function mapStateToProps(state){

console.log(state);
  return {
    userlist:state.getUserdetails.userlist,
    loggedUser:state.loginreducer.user
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getUserList:getUserList},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList);
