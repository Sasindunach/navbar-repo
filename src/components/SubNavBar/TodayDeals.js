import React from "react";
import {useSubNavBarStyles} from "./SubNavBar.style"


function TodayDeals () {
     
  //styles
  const classes = useSubNavBarStyles();

    return (<div>
        <a className={classes.linksTitels} href="#">Today Deals</a>
    </div>  );
}

export default TodayDeals;