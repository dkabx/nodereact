import React, { Component } from 'react';
import '../App.css';
import '../login.css';
import Sidebar from './Sidebar';
import CommentBox from './commentbox';
import UserList from './userlist';
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
      	<div className='container'>
					<div className='row'>
						<Sidebar />
						<CommentBox />
						<UserList />
					</div>
      	</div>
    );
  }
}




export default User;
// export default connect(mapStateToProps,mapDispatchToProps)(Login);
