import React, { Component } from 'react';
import '../App.css';
import '../login.css';
import {NavLink} from 'react-router-dom';
import {sendLogin} from '../redux/actions/login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../redux/store';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:5000");

// import createHistory from 'history/createBrowserHistory';

// var history = createHistory();
class User extends Component {
	constructor(){
		super();

		this.state = {
			email: '',
			password:'',
			errors:{},

		}
	}

  render() {
    return (
      	<h1>HELLO</h1>
    );
  }
}



// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({sendLogin:sendLogin},dispatch)
// }
// function mapStateToProps(state){
// 	console.log(state);
// if(state){
// 	return {
// 		user:state.user,
// 		auth:state.isAuthenticated,
// 		error:state.errors
// 	}
// }
//
// }
export default User;
// export default connect(mapStateToProps,mapDispatchToProps)(Login);
