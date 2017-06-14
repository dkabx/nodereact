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
class CommentBox extends Component {
  constructor(){
    super();


  }

  render() {
    return (
      <div className="col-md-6" >

            <div className="jumbotron">
            <div className="row">
              <div className="col-md-6">
              <form className="form-horizontal" id="postForm">
                 <div className="form-group">

                   <div className="col-sm-10">
                     <textarea  className="form-control" id="feeling" placeholder="Tell your friends about your day"></textarea>
                   </div>
                 </div>
                 <div className="form-group">

                   <div className="col-sm-10">
                     <input type="file" className="form-control" id="file" placeholder="Enter password" />
                   </div>
                 </div>

                 <div className="form-group">
                   <div className="col-sm-10">
                     <button type="submit" className="btn btn-success pull-right">Post</button>
                   </div>
                 </div>
       </form>
     </div>


     <div className="col-md-6">
             <div  id="msg">
            {console.log(this.props.msg)}
            {this.props.msg.length ? this.props.msg.map((user, i) => (
               <div>
                {user}
               </div>
                ))
                : ''
           }
          </div>
     </div>



     </div>
            </div>
            <div className="media">

              <div className="media-left">
                <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object"  />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Left-aligned</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </div>

           <div className="media">
            <div className="media-body">
              <h4 className="media-heading">Right-aligned</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="media-right">
              <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object"/>
            </div>
          </div>


    </div>
)
  }
}

function mapStateToProps(state){
console.log("COMMENT",state);
  return {
    msg:state.getUserdetails.msg
  }
}

export default connect(mapStateToProps,null)(CommentBox);
