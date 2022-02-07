/*
 * Copyright (c) 2021. by N-Ach (Pvt) Ltd
 *
 * ╔═╗ ╔╗    ╔═══╗  ╔╗
 * ║║╚╗║║    ║╔═╗║  ║║
 * ║╔╗╚╝║    ║║ ║╠══╣╚═╗
 * ║║╚╗║║╔══╗║╚═╝║╔═╣╔╗║
 * ║║ ║║║╚══╝║╔═╗║╚═╣║║║
 * ╚╝ ╚═╝    ╚╝ ╚╩══╩╝╚╝
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information
 * of N-Ach (Pvt) Ltd. ("Confidential Information"). You
 * shall not disclose such Confidential Information and shall use
 * it only in accordance with the terms of the license agreement
 * you entered into with N-Ach (Pvt) Ltd.
 *
 *
 * @Author Dilhan Ranasingh
 * @Date 02/02/2020
 */

import { makeStyles } from "@material-ui/styles";
import { Icon } from "@mui/material";
import { styled } from "@mui/system";

// styled component ---
const MyBox = styled("div")({
  fontSize: 35,
});

// css class as style object  ---
const useStyles = makeStyles({
  SearchBarButton: {
    height: 35,
    color: "red",
  },

//SerachBarBackground
  SerachBarBackground:{
    backgroundColor: "white",
    height: "40px",
    display: "inline-block",
    borderRadius: "5px",
    display: 'flex',
    flexDirection: ' row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginLeft:30,
    marginRight:30
    
  },

  //searchBarBoder
  SearchBarBoder:{
    marginRight:10,
    marginLeft:10,
    height:40,
   width: 0.5,
    backgroundColor:' #dadada',
  },


  //SearchBarAllButton
  SearchBarAllButton: {
      paddingLeft:30,
      width: 80,
      border: "none",
       
  },


  //SearchBarSerachButton
  SearchBarSerachButton: {
    paddingRight:30,
    width:80,
    color:' #747474',
     border: "none",
     backgroundColor:'white',
     Icon:'none',
    
},

  //navtab icon
  navItemIcon: {
    color: "white",
    paddingTop: 5,
  },

  //NavBarItemTitels
  NavBarItemTitels: {
    fontSize: 12,
    paddingBottom: 5,

    color: 'red',
  textalign: 'center',
  textDecoration: 'none',
  display: 'inline-block'
  },

  bgColour: {
    color: "red",
    fontWeight: "bold",
  },

  boxWrapper: {
    width: "100%",
    height: 200,
    borderRadius: "10px",
  },

  

  
});

export { useStyles, MyBox };


