import React from "react";
import Profile from "../../assets/Profile.svg";
import drop from "../../assets/drop.png";
import { useStyles } from "./NavBar.style";
import { Container, IconButton } from "@mui/material";

function NavUser() {
  const classes = useStyles();
  return (
    <div>
     
      <div>
        <IconButton>
          <img src={Profile} height={20} />
        </IconButton>
      </div>
      <Container className={classes.useritem}>
      <div className={classes.NavBarItemTitels}>
        <a className="navitemtext" href="#">
          Sign In
          <img className="SignInDropdownIcon" src={drop} height={18} />
        </a>
      </div>
      </Container>
      
    </div>
  );
}

export default NavUser;
