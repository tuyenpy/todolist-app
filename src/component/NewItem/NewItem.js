import React, { Component } from 'react';
import './NewItem.css';

class NewItem extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    let { onChange, onClick, value } = this.props;
    return <div className="NewItem">
      <div>
        <input type="text" 
        onChange={ onChange }
        value={ value }
        />
      </div>
      
      <button onClick={ onClick }>Add</button>
    </div>
  }
}

export default NewItem;