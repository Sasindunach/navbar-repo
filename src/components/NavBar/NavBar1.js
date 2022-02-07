import { Toolbar, } from "@mui/material";

import { makeStyles } from "@material-ui/styles";
import React from "react";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import NavGoToMobile from "./NavGoToMobile";
import NavUser from "./NavUser";
import NavCart from "./NavCart";
import {useStyles} from "./NavBar.style"
import { MyBox } from "./NavBar.style";


function NavBar1() {
  const classes = useStyles();


  return (
    <div>
      <Toolbar 
      style={{backgroundColor:'#00719C', display:"flex", justifyContent:"space-between"}}>
     
       <div style={{flexGrow:1 }}><NavLogo /></div> 
       <div style={{flexGrow:2 }} ><NavSearch /></div>
       <div style={{flexGrow:1 }}> <NavGoToMobile/></div>
       <div style={{flexGrow:1 }}><NavUser/></div>
       <div style={{flexGrow:1 }}><NavCart/></div>
      </Toolbar>
      
       
    </div>
  );
}

export default NavBar1;
