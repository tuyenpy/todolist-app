import React, { Component } from 'react';
import './TableDataUser.css';

class TableDataUser extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    let { users } = this.props;
    return <div className="TableDataUser">
      <table>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
        {
          users.map((user, index) => <tr key={index} className={index%2 ===1&&"is-even"}>
                      <td>{user.id}</td>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.handle}</td>
          </tr>)
        }
      </table>
    
    </div>
}
  
}
  
export default TableDataUser;