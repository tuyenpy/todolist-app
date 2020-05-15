import React, { Component } from 'react';
import './AddItem.css';
import close from './close.svg';
import NewItem from '../NewItem/NewItem';

class AddItem extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    let { newTodo, onChange, onClick, onClose } = this.props;
    return <div className="AddItem">
      <NewItem onChange={ onChange }
                onClick={ onClick }
                value={ newTodo }
      />
      <img src={ close } alt="close" onClick={ onClose }/>
    </div>
}
  
}
  
export default AddItem;