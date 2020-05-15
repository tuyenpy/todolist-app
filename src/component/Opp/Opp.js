import React, { Component } from 'react';
import './Opp.css';
import opp from './opp.svg';

class Opp extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    return <div className="Opp">
      <p>Seem like</p>
      <p>You have no lists</p>
      <img src={ opp } alt="opp" />
    </div>
  }
}

export default Opp;