import React from "react";
import Mobile from "../../assets/Mobile.svg";
import {useStyles} from "./NavBar.style"

function NavGoToMobile() {
  const classes = useStyles();
  return (
    <div>
        <div className={classes.navItemIcon}><img src={Mobile} height={20} /></div>
      <div className={classes.NavBarItemTitels}><a href="#">
                Download <br />
                Mobile app
              </a></div>
      
    </div>
  );
}

export default NavGoToMobile;