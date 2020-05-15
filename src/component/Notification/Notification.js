import React, { Component } from "react";
import "./Notification.css";
import noti from "./noti.svg";
import dot from "./dot.svg";

class Notification extends Component {
  constructor(props) {
    super();
  }

  render() {
    let { hasUnread } = this.props;
    return (
      <div className="Notification">
        <img src={noti} alt="notification" className="Notification-bell" />
        {hasUnread && <span className="Notification-dot"></span>}
      </div>
    );
  }
}

export default Notification;
