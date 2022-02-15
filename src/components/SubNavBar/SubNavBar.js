import { Container, Toolbar } from "@mui/material";
import React from "react";
import Categories from "./Categories";
import Help from "./Help";
import TodayDeals from "./TodayDeals";
import BuyerProtection from "./BuyerProtection";
import SubNavlanguage from "./SubNavlanguage";
import ShipTo from "./ShipTo";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useSubNavBarStyles} from "./SubNavBar.style"
import "./SubNavBar.css"; 
import Dropdown from "./dropdown";



function SubNavBar () {

    //styles
    const classes = useSubNavBarStyles();

    // buttons colors
    const theme = createTheme({
        palette:{
          primary:{
            main:'#757575' 
          }
        }
      })

    return (<div>
        <ThemeProvider theme={theme}>  
        <Toolbar className={classes.SubNavBarFullToolBar} >
        <div style={{flexGrow:1 }}><Categories/></div> 
        <div style={{flexGrow:1 }}><TodayDeals/></div> 
        <div style={{flexGrow:1 }}><BuyerProtection/></div>  
        <div style={{flexGrow:1 }}><Help/></div> 
        <div style={{flexGrow:10 }}></div> 
        <div style={{flexGrow:1 }}><ShipTo/></div>  
        <div style={{flexGrow:1 }}><SubNavlanguage/></div>  
       
        </Toolbar>
        </ThemeProvider>
    </div>  );
}

export default SubNavBar;