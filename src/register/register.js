import React, { Component } from 'react';

import '../App.css';
import '../login.css';
import {NavLink} from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      	<div className="container loginContainer" >
			<div className="row main">

				<div className="main-login main-center">
					<form className="form-horizontal" method="post" action="user/login">
						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Username"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>
						
						<div className="form-group ">
							<button type="submit" className="btn btn-primary btn-lg btn-block login-button">Register</button>
						</div>
						<div className="login-register">
				            <NavLink to='/login'>Login </NavLink >
				    </div>
					</form>
				</div>
			</div>
		</div>
    );
  }
}

export default Register;
