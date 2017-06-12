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
class Login extends Component {
	constructor(){
		super();
		this.submitLogin = this.submitLogin.bind(this);
		this.state = {
			email: '',
			password:'',
			errors:{},

		}
	}
	submitLogin(e){
		e.preventDefault();
		this.props.sendLogin(this.state).then(
			(res)=>  {if(this.props.auth){
				this.props.history.push('/user');
			}},
			(err) =>this.setState({ errors: "err.response.data.errors"})
			);

	}
	componentWillMount(){
		if(this.props.auth){
			this.props.history.push('/user');
		}
	}
	emailChange(e){
		this.setState({email:e.target.value});
	}
	passwordChange(e){
		this.setState({password:e.target.value});
	}
  render() {
    return (
      	<div className="container loginContainer" >
			<div className="row main">

				<div className="main-login main-center">
					 {this.props.error ? <div className="alert alert-danger error-align">
			             <b> Invalid Credentials</b>
			         </div> : ''}

					<form className="form-horizontal" onSubmit={this.submitLogin} method="get" action="/user/login">
						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" onChange={this.emailChange.bind(this)} name="email" id="email"  placeholder="Enter your Username"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control"  onChange={this.passwordChange.bind(this)} name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

						<div className="form-group ">
							<button type="submit" className="btn btn-primary btn-lg btn-block login-button">Login</button>
						</div>
						<div className="login-register">
				            <NavLink to='/register'>Register </NavLink >
				    </div>


					</form>
				</div>
			</div>
		</div>
    );
  }
}

// Login.propTypes = {
//   sendLogin: React.PropTypes.func.isRequired
// }
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({sendLogin:sendLogin},dispatch)
}
function mapStateToProps(state){
	console.log(state);
if(state){
	return {
		user:state.loginreducer.user,
		auth:state.loginreducer.isAuthenticated,
		error:state.loginreducer.errors
	}
}

}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
