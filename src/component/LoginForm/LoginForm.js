import React, { Component } from "react";
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return <div className="LoginForm">
      <h1>Sign in</h1>
      <form className="LoginForm-group">
        <div className="LoginForm-item">
          <label>Username</label>
          <input type="text" name="username" id="username" placeholder="Luong Quy Tan"/>
        </div>
        <div className="LoginForm-item">
          <label>Password</label>
          <input type="password" name="password" id="password" placeholder="1234567" />
        </div>
        <button className="LoginForm-btn">Sign in to CoderX</button>        
      </form>
      <div className="LoginForm-checkbox">
        <label>
          <input type="checkbox" id="checkbox" />
          <p>Keep me signed in</p>
        </label>
        
      </div>
      <div className="LoginForm-forget">
        <a href="/">Forgot Username?</a>
        <a href="/">Forgot Password?</a>
      </div>
    </div>;
  }
}

export default LoginForm;
