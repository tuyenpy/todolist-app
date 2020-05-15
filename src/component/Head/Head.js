import React, { Component } from "react";
import back from './back.svg';
import logo from './logo.svg';
import './Head.css';

class Head extends Component {
  render() {
    return <div className="Head">
      <div className="Head-back">
        <img src={back} alt="back" />
        <span>Go back</span>
      </div>
      <div className="Head-logo">
        <img src={logo} alt="logo" />        
      </div>
      <div className="Head-signup"> 
        <span>Sign up</span>
      </div>
    </div>;
  }
}

export default Head;
