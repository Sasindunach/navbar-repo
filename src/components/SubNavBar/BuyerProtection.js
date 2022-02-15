import React from "react";
import {useSubNavBarStyles} from "./SubNavBar.style"



function BuyerProtection () {

    //styles
  const classes = useSubNavBarStyles();

    return (<div>
        <a className={classes.linksTitels} href="#"> BuyerProtection </a>
    </div>  );
}

export default BuyerProtection;