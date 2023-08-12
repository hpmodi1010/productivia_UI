import React from "react";
import styles from "./Profile.module.css";
import profile from "../assets/avtar.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={profile} alt="avatar" className={styles.avatar} />
    </div>
  );
};

export default Profile;
