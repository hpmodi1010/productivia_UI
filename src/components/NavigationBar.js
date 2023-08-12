import React from "react";
import classes from "./NavigationBar.module.css";
import ProductiviaLogo from "./Productivialogo";
import Button from "../UI/Button";
import Home_icon from "../assets/Home_Icon.png";
import Todo_icon from "../assets/Todo_Icon.png";
import Notes_icon from "../assets/Notes_Icon.png";

const NavigationBar = () => {
  return (
    <div className={classes["nav-bar"]}>
      <ProductiviaLogo />
      <nav>
        <ul>
          <a href="/">
            <li>
              <Button className={classes["home-button"]}>
                <img src={Home_icon} alt="Home" />
                <p>Home</p>
              </Button>
            </li>
          </a>
          <a href="/">
            <li>
              <Button>
                <img src={Todo_icon} alt="Todo img" />
                <p>Todo</p>
              </Button>
            </li>
          </a>
          <a href="/">
            <li>
              <Button>
                <img src={Notes_icon} alt="Notes" />
                <p>Notes</p>
              </Button>
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
