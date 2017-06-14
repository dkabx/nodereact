import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import  Home from '../home/home';
import Content from '../content';
import About from '../about/about';
import Login from '../login/login';
import User from '../user/user';
import Register from '../register/register';
import { Router, Route, IndexRoute } from 'react-router';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux' ;
import {logoutUser} from '../redux/actions/login' ;
import {bindActionCreators} from 'redux';


class Nav extends Component {
  logout(){
    this.props.logoutUser()
   this.props.history.push('/');

  }
  render() {
    return (
<div>
   <nav className="navbar  navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul className="nav navbar-nav">

        <li><NavLink  activeClassName="actidve"  to='/'>Home</NavLink></li>
        {this.props.auth ? <li><NavLink activeClassName="active" to='/user'>{this.props.user.email}</NavLink></li> : <li><NavLink activeClassName="active" to='/login'>Login</NavLink></li>}
        <li><NavLink  activeClassName="active" to='/content'>Content</NavLink></li>
      </ul>
   <ul className="nav navbar-nav ">
        <li className="dropdown">

            <a className="dropdown-toggle" data-toggle="dropdown" href="#" id='messagecount'>
            <span className="glyphicon glyphicon-envelope"></span><span className="badge" id='mno'></span></a>
          <ul className="dropdown-menu" id='dynamicmessage'>

          </ul>
        </li>
    </ul>
    {this.props.auth ?  <ul className="nav navbar-nav navbar-right"><li ><a  href="#" onClick={this.logout.bind(this)}><b>Logout</b></a></li></ul> : ''}

    </div>
  </nav>

  <Route path="/content" component={Content} />
  <Route exact path="/" component={Home} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/register" component={Register} />
  <Route  path="/user" component={User} />

</div>
    );
  }
}

// Nav.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

function mapStateToProps(state){

  if(state){
    return {
      user:state.loginreducer.user,
      auth:state.loginreducer.isAuthenticated
    }
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({logoutUser:logoutUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
