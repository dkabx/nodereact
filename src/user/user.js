import React, { Component } from 'react';
import '../App.css';
import '../login.css';
import Sidebar from './Sidebar';
import CommentBox from './commentbox';
import UserList from './userlist';
import {connect} from 'react-redux';
// import createHistory from 'history/createBrowserHistory';

// var history = createHistory();
class User extends Component {

  render() {
    return (
      	<div className='container'>
					<div className='row'>
						<Sidebar />
						<CommentBox />
						<UserList {...this.props} />
					</div>
      	</div>
    );
  }
}



export default User;
// export default connect(mapStateToProps,mapDispatchToProps)(Login);
