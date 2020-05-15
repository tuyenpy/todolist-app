import React, { Component } from 'react';
import './StatusBar.css';
import battery from './battery.svg';
import wifi from './wifi.svg';

class StatusBar extends Component {
  constructor() {
    super()
  }
  
  render() {
    return <div className="StatusBar">
      <div className="StatusBar-item">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <img src={ wifi } alt="wifi" />
      </div>
      <div className="StatusBar-item">
        <p>9:41 AM</p>
      </div>
      <div className="StatusBar-item" >
        <p>100%</p>
        <img src={ battery } alt="battery" />
      </div>
    </div>
  }
}

export default StatusBar;