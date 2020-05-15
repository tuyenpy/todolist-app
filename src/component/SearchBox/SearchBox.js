import React, { Component } from 'react';
import searchLogo from './search-logo.svg';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super();
    this.state = {
      isFocused: true,
      inPut: ""
    };
    this.onFocus = this.onFocus.bind(this);  
    this.onChange = this.onChange.bind(this);
  }
  
  onFocus() {
    this.setState({
      isFocused: false
    });
  }
  
  onChange(e) {
    this.setState({
      inPut: e.target.value
    });
  }
  
  render() {
    let { isFocused, inPut } = this.state;
     let regexp = /^090(\d){7}$/ig;
    let n = regexp.test(inPut);
    return <div className={!n ? "SearchBox border-red": "SearchBox" }>
      <input type="text" 
        onFocus={ this.onFocus }
        onChange={ this.onChange }
        placeholder="Type somthing to search..."
        />
      {
         isFocused && <img src= {searchLogo} alt="search-box"/> 
      }
    </div>
  }
}

export default SearchBox;