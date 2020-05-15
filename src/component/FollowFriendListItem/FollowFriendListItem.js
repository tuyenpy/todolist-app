import React, { Component } from 'react';
import './FollowFriendListItem.css';

class FollowFriendListItem extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    let { user } = this.props;
    return <div className="FollowFriendListItem">
      <div className="FollowFriendListItem-avatar">
        <img src={ user.avatar } alt="" />
      </div>
      <div className="FollowFriendListItem-user">
        <p>{ user.name }</p>
        <p>Gợi ý cho bạn</p>
      </div>
      <div className="FollowFriendListItem-btn">
        <button>Theo dõi</button>
      </div>    
    </div>
  }
}

export default FollowFriendListItem;