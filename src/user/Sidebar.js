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
class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-2">
      <div className="mood" >
        <table className="table">
        <thead>
          <tr >
            <th className='text-center'>Feeling ? </th>
          </tr>
        </thead>
        <tbody>
        {/*  <tr className="danger">
            <td >Angry</td>
          </tr >
          <tr className="success">
            <td>Happy</td>
          </tr>
          <tr className="warning">
             <td>Sad</td>
          </tr>
           <tr className="info">
             <td>Love</td>
          </tr>
           <tr className="Active">
             <td>Annoyed</td>
          </tr>
          <tr>
             <td>Amused </td>
          </tr>*/}
        </tbody>
      </table>
      </div>
      </div>
)
  }
}


export default Sidebar;
