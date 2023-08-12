import React from "react";
import styles from "./NotificationIcon.module.css";
import Notification from "../assets/notification.png";

const NotificationIcon = ({ count }) => {
  return (
    <div className={styles.notificationIcon}>
      <img
        src={Notification}
        alt="notification"
        className={`fa fa-bell ${styles.icon}`}
      ></img>
      {count > 0 && <span className={styles.notificationCount}>{count}</span>}
    </div>
  );
};

export default NotificationIcon;
