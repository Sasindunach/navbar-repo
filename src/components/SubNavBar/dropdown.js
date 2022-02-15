import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ClassNames } from "@emotion/react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import NestedMenuItem from "material-ui-nested-menu-item";
import { Paper, Card, CardBody } from "@mui/material";
import { shadows } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";

function Dropdown() {

  const styles = (theme) => ({
    popoverPaper: {
      width: "90%",
      height: "80%",
      maxHeight: "unset",
      left: "5% !important",
    },
  });
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

  const names = [
    "Item 1.....................      .........",
    "Item 2",
    "Item 3                  .",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7.............      ............................",
    "Item 8",
    "Item 9",
  ];

  const names2 = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7.........................................",
    "Item 8",
    "Item 9",
  ];

  const names3 = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7.......................         ..................",
    "Item 8",
    "Item 9",
  ];

  const names4 = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7........           .................................",
    "Item 8",
    "Item 9",
  ];

  // hover
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  // nest
  const [menuPosition, setMenuPosition] = useState(null);

  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };

  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };

  return (
    <div>

      <div>
        <Button
          variant="text"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
          className={ClassNames.paperbutton}
          style={{ }}
        >
          Categories
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          style={{ Shadows: "none", width: 400 }}


          // open={!!menuPosition}
        // onClose={() => setMenuPosition(null)}
        // anchorReference="anchorPosition"
        // anchorPosition={menuPosition}
        >
          <NestedMenuItem
          label="Button 3"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
          >
            <div>Big menu</div>
      
          </NestedMenuItem>
        </Menu>

        <Grid  
          
         container style={{ width: "100%" }}>
          <Grid>
            {" "}
            {show1 && (
              <Card
                style={{
                  marging: 300,
                  backgroundColor: "lightblue",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={3} md={3}>
                    <ListSubheader style={{}}>Category 111</ListSubheader>
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
                    <ListSubheader>Category 2</ListSubheader>
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
                    <ListSubheader>Category 3</ListSubheader>
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
                    <ListSubheader>Category 4</ListSubheader>
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
              </Card>
            )}
          </Grid>
          <Grid>
            <div
              style={{
                backgroundColor: "green",
                width: "100%",
                height: "100%",
              }}
              onMouseOut={() => setShow1(false)}
            >
              a
            </div>
          </Grid>
        </Grid>
        <div
          style={{ backgroundColor: "green", width: "100%" }}
          onMouseOut={() => setShow1(false)}
        >
          a
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
