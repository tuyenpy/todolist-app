import React, { Component } from 'react';
import './RecommendedFriend.css';
import FollowFriendListItem from '../FollowFriendListItem/FollowFriendListItem';

class RecommendedFriend extends Component {
  constructor(props) {
    super()
  }
  render() {
    let { friends } = this.props;
    return <div className="RecommendedFriend">
      <div className="RecommendedFriend-header">
        <a href="#">Gợi ý cho bạn</a>
        <a href="#">Xem tất cả</a>
      </div>
      {
        friends.map( (user, index) => <>
          <FollowFriendListItem user={ user } key={ index } />         
        </>)
      }  
    </div>
  }
}


export default RecommendedFriend;