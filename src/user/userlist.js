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
import {sendmessage} from '../redux/actions/user';
const socket = io.connect("http://localhost:5000");
// import createHistory from 'history/createBrowserHistory';

// var history = createHistory();
class UserList extends Component {
 constructor(){
   super();
   this.state = {
     roomid:'',
     users:[],
     msgs:[]
   }
   this.abc = this.abc.bind(this);
   this.online = this.online.bind(this);
   }

  componentWillMount(){

    this.props.getUserList();

    socket.emit('join',{roomid:this.props.loggedUser._id});
  }
  abc(data){
    console.log("Sender",data);
    var senderdata= {
      sender:data.name,
      sendermsg:data.msg
    };
    var msgArray = this.state.msgs;
      msgArray.push(senderdata);

      this.setState({msg:msgArray});

      store.dispatch({
        type:"SEND_MESSAGE",
        msg:this.state.msgs
      })
  }

online(data){
  console.log("onlien" , data);
}
componentDidMount(){

    socket.on('new_msg',this.abc);
    socket.on('online',this.online);

}


  joinRoom(e){
    this.setState({ roomid: e.target.value});
  }

  sendMsg(e){
    e.preventDefault();
      socket.emit('new',{id:this.state.roomid,data:this.refs.msg.value,name:this.props.loggedUser.email});
  }
  componentWillReceiveProps(nextProps){
    console.log("component will recieve props", nextProps);
  }
  render() {
      console.log('render');
    return (
      <div className=" col-md-4">
        <div className="jumbotron">
            <div className="checkbox">

              {this.props.userlist.length ?
                 this.props.userlist.map((user, i) => (
                   <div>
                   <label><input  className="messageCheckbox"  onClick={this.joinRoom.bind(this)} value={user._id} name="a"  type="radio" /> {user.email}</label>
                   {/*<span style={{display: 'block'}} ref={user.id}><img height='8px' width="8px" src="http://www.clker.com/cliparts/Z/n/g/w/C/y/green-dot-md.png"/></span>*/}
                   </div>
                    ))
                 : ''
              }
      </div>
            <div className="form-group">
               <div>
               <form onSubmit={this.sendMsg.bind(this)}>
                 <input type='text' ref='msg' className="form-control" id="sendmsg" placeholder="Tell your friends about your day" />
                 </form>
               </div>
           </div>
        </div>
      </div>
)

  }

}
function mapStateToProps(state){

  return {
    userlist:state.getUserdetails.userlist,
    loggedUser:state.loginreducer.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getUserList:getUserList,sendmessage:sendmessage},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList);
