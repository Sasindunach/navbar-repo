import * as React from "react";
import Button from "@mui/material/Button";
import { ClassNames } from "@emotion/react";
import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import NestedMenuItem from "material-ui-nested-menu-item";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Card, CardBody } from "@mui/material";
import "./SubNavBar.css";
import SubCategories from "./SubCategories";
import { SubCategoriesPaper } from "./SubNavBar.style";
import { useSubNavBarStyles } from "./SubNavBar.style";

function Categories() {
  //style
  const classes = useSubNavBarStyles();
  const [menuPosition, setMenuPosition] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const [age, setAge] = useState([]);

  const handleChange = (agen) => {
    setAge([agen]);
  };

  const list1 = [
    "SubItem 1 ahdgjgugujp;ljpouoiyut",
    "SubItem 2",
    "SubItem 3",
    "SubItem 4                   a",
    "SubItem 5",
    "SubItem 6",
    "SubItem 7",
    "SubItem 8",
  ];

  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      bottom: event.pageY,
      left: event.pageX,
    });
  };
  const [show, setShow] = useState(false);

  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };

  const theme = createTheme({
    shadows: "none",
    zDepthShadows: "none",
    elevation: 0,
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

  return (
    <div onMouseOver={handleRightClick}>
      <ThemeProvider theme={theme}>
        <div
          //  onMouseOut={handleClose}
          onDoubleClick={handleClose}
        >
          <Button
            variant="text"
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            className={ClassNames.paperbutton}
            style={{
              textTransform: "none",
              color: "gray",
              fontWeight: "initial",
            }}
            shadows="20"
          >
            Categories
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose2}
            MenuListProps={{ onMouseLeave: handleClose2 }}
            elevation={1}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            
            <NestedMenuItem
              label="Lorem Ipsum"
              parentMenuOpen={!!menuPosition}
              className={classes.nextedItem}
            >
              <SubCategoriesPaper
                // anchorOrigin={{ vertical: "left", horizontal: "center" }}
                // transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <SubCategories style={{ position: "relative", top: 30 }} />
              </SubCategoriesPaper>
            </NestedMenuItem>
            <NestedMenuItem
              label="Lorem Ipsum"
              parentMenuOpen={!!menuPosition}
              className={classes.nextedItem}
            >
              <SubCategoriesPaper>
                <SubCategories />
              </SubCategoriesPaper>
            </NestedMenuItem>
            <NestedMenuItem
              label="Lorem Ipsum"
              parentMenuOpen={!!menuPosition}
              className={classes.nextedItem}
            >
              <SubCategoriesPaper>
                <SubCategories />
              </SubCategoriesPaper>
            </NestedMenuItem>
            <NestedMenuItem
              label="Lorem Ipsum"
              parentMenuOpen={!!menuPosition}
              className={classes.nextedItem}
            >
              <SubCategoriesPaper>
                <SubCategories />
              </SubCategoriesPaper>
            </NestedMenuItem>
          </Menu>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Categories;
