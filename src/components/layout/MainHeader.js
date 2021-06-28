import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes["nav-links"]}>
        <NavLink to="/quotes">
          <h1>Great Quotes</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
