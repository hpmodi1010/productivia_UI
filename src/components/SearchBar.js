import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../assets/search icon.png";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <img className={styles.searchIcon} src={searchIcon} alt="search" />
      <input type="text" placeholder="Search" className={styles.input} />
    </div>
  );
};

export default SearchBar;
