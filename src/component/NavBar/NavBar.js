import React, { Component } from 'react';
import './NavBar.css';
import menu from './menu.svg';


class NavBar extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    return <div className="NavBar">
      <span className="NavBar-menu">
        <img src={ menu } alt="menu" />
      </span>
      <div className="NavBar-head">
        <p>DaiList</p>
      </div>
    </div>
  }
}

export default NavBar;