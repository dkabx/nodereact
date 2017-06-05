import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import  Home from '../home/home';
import Content from '../content';
import About from '../about/about';
import Login from '../login/login';
import Register from '../register/register';
import { Router, Route, IndexRoute } from 'react-router';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      
      <li><NavLink  to='/'>Home</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/content'>Content</NavLink></li> 
    </ul>
 <ul className="nav navbar-nav ">
        <li className="dropdown">
        
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" id='messagecount'> 
            <span className="glyphicon glyphicon-envelope"></span><span className="badge" id='mno'></span></a>  
          <ul className="dropdown-menu" id='dynamicmessage'>        
          </ul>
        </li>
    </ul>
         <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
         <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
            <span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> My Profile</a></li>
        <li><a href="/user/logout"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
    </ul>
  </li>
    </ul>
  </div>
</nav>
  <Route path="/content" component={Content} />

  <Route exact path="/" component={Home} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default Nav;
