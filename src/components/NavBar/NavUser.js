import React from "react";
import Profile from "../../assets/Profile.svg";
import drop from "../../assets/drop.png";
import {useStyles} from "./NavBar.style"

function NavUser() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img src={Profile} height={25} />
      </div>
      <div className={classes.NavBarItemTitels}>
        <a href="#">Sign In
        <img className="SignInDropdownIcon" src={drop} height={15} /></a>
      </div>
    </div>
  );
}

export default NavUser;
