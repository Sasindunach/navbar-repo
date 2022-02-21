import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ClassNames } from "@emotion/react";
import { SubCategories_Paper } from "./Categorie_Button.style";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Paper, Card, CardBody } from "@mui/material";

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      console.log("Click outside");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

function Categorie_Button() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsComponentVisible(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeAllMenu = () => {
    setAnchorEl(null);
    setShow(false);
  };
  const [show, setShow] = useState(false);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const SubCaregoriShow = () => {
   
  };

  const [style, setStyle] = useState();

  return (
    // <div ref={ref}>
    //   <Button
    //     id="fade-button"
    //     aria-controls={open ? "fade-menu" : undefined}
    //     aria-haspopup="true"
    //     onMouseOver={handleClick}
    //     className={ClassNames.paperbutton}
    //     style={{
    //       textTransform: "none",
    //       color: "gray",
    //       fontWeight: "initial",
    //     }}
    //   >
    //     Engilsh - USD
    //   </Button>
    //   {isComponentVisible && (
    //     <Menu
    //       ref={ref}
    //       anchorEl={anchorEl}
    //       open={open}
    //       // onClose={handleClose}
    //       TransitionComponent={Fade}
    //     >
    //       <MenuItem
    //         onClick={() => setShow(true)}
    //         // onMouseOut={() => setShow(false)}
    //       >
    //         Categorie 1
    //       </MenuItem>

    //       <MenuItem>Categorie 2</MenuItem>
    //       <MenuItem>Categorie 3</MenuItem>
    //     </Menu>
    //   )}

    //   {show && (
    //     <SubCategories_Paper
    //       style={{ backgroundColor: "red" }}
    //       onMouseOut={() => setShow(false)}
    //     ></SubCategories_Paper>
    //   )}
    // </div>

    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-haspopup="true"
        onMouseOver={handleClick}
        className={ClassNames.paperbutton}
        style={{
          textTransform: "none",
          color: "gray",
          fontWeight: "initial",
        }}
      >
        Categores
      </Button>
      <div ref={ref}>
        <div onClick={() => setIsComponentVisible(true)}>{/* Menu */}</div>

        {isComponentVisible && (
          <span>
            {" "}
            <Card
              style={{
                width: 200,
                height: 300,
                backgroundColor: "green",
                marginLeft: 10,
                position: "absolute",
              }}
            >
              <div
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                onMouseOver={handleClick}
                className={ClassNames.paperbutton}
                onClick={SubCaregoriShow}
                onMouseEnter={(e) => {
                  setStyle({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setStyle({ display: "block" });
                }}
              >
                Main Categorie 0
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
              <div>
                <a> Main Categorie 1</a>
              </div>
            </Card>
          </span>
        )}

        {isComponentVisible && (
          <span>
            {" "}
            <SubCategories_Paper
              style={{ backgroundColor: "red" }}
               onMouseOut={() => setShow(false)}
            >
              <div style={style}>
                <div>Sub Categores</div>
              </div>
            </SubCategories_Paper>
          </span>
        )}
      </div>
    </div>
  );
}

export default Categorie_Button;
