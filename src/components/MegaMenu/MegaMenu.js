import * as React from "react";
import { Button, Card, Paper, Menu,MenuItem} from "@mui/material";
import { useState } from "react";
import {useMegaMenuStyles} from "./MegaMenu.style"

function MegaMenu() {

 //styles
 const classes = useMegaMenuStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = useState([]);

  const handleChange = (agen) => {
    setAge([agen]);
  };

  const [style, setStyle] = useState({ display: "none" });

  return (
    <>
      <div
        variant="text"
        style={{}}
        //hover componet
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}>
        Categories
      </div>
        <Card  //show componet
        style={style}
        className={classes.mainCategories}
        //hover componet
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}><Menu>
            <MenuItem>ca1</MenuItem>
            <MenuItem>ca1</MenuItem>
            <MenuItem>ca1</MenuItem>
            <MenuItem>ca1</MenuItem>
        </Menu>
        </Card>
     
    </>
  );
}

export default MegaMenu;
