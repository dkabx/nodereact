import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <h1>HOME</h1>
    );
  }
}
function mapStateToProps(state){
  console.log("HO",state);
}

export default connect(mapStateToProps,null)(Home);
