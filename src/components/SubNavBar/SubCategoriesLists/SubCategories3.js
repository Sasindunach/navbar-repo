import React from "react";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


function SubCategories3() {

    const [age, setAge] = useState([]);

    const names = [
      "SubItem 1 ",
    "SubItem 2",
    "SubItem 3",
    "SubItem 4                   a",
    "SubItem 5",
    "SubItem 6",
    "SubItem 7",
    "SubItem 8",
    ];
  
    const names2 = [
      "SubItem 1 ",
    "SubItem 2",
    "SubItem 3",
    "SubItem 4                   a",
    "SubItem 5",
    "SubItem 6",
    "SubItem 7",
    "SubItem 8",
    ];
  
    const names3 = [
      "SubItem 1 ",
      "SubItem 2",
      "SubItem 3",
      "SubItem 4                   a",
      "SubItem 5",
      "SubItem 6",
      "SubItem 7",
      "SubItem 8",
    ];
  
    const names4 = [
      "SubItem 1 ",
      "SubItem 2",
      "SubItem 3",
      "SubItem 4                   a",
      "SubItem 5",
      "SubItem 6",
      "SubItem 7",
      "SubItem 8",
    ];
  
    const handleChange = (agen) => {
      setAge([agen]);
    };
  
    const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

    return ( <>   
          <Grid container style={{ width: "100%" }}>
            <Grid item xs={3} md={3}>
              <ListSubheader>Category 1.3</ListSubheader>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  onClick={() => handleChange(name)}
                >
                  <Typography noWrap>{name}</Typography>
                </MenuItem>
              ))}
            </Grid>
  
            <Grid item xs={3} md={3}>
            <ListSubheader>Category 2.3</ListSubheader>
              {names2.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  onClick={() => console.log("on selected ", name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Grid>
  
            <Grid item xs={3} md={3}>
            <ListSubheader>Category 3.3</ListSubheader>
              {names3.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  noWrap
                  onClick={() => console.log("on selected ", name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Grid>
  
            <Grid item xs={3} md={3}>
            <ListSubheader>Category 4.3</ListSubheader>
              {names4.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  onClick={() => handleChange(name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Grid>
          </Grid>
        
      </> );
}

export default SubCategories3;