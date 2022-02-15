import React from "react";
import Mobile from "../../assets/Mobile.svg";
import { useStyles } from "./NavBar.style";
import "./NavBar.css";
import { IconButton } from "@mui/material";

function NavGoToMobile() {
  const classes = useStyles();
  return (
    <div
    style={{textAligon:'center'}}>
      <div className={classes.navItemIcon}>
        <div>
          <IconButton>
            <img src={Mobile} height={20} />
          </IconButton>
        </div>
      </div>
      <div className={classes.NavBarItemTitels}>
        <a className="navitemtext" href="#">
          Download <br />
          Mobile app
        </a>
      </div>
    </div>
  );
}

export default NavGoToMobile;
