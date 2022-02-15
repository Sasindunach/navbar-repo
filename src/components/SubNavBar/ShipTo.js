
import React from "react";
import flag from "../../assets/Icon awesome-flag-usa.svg";
import {useSubNavBarStyles} from "./SubNavBar.style"

import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import France from "../../assets/flags/france.png";
import Allemagne from "../../assets/flags/germany.png";
import Suisse from "../../assets/flags/switzerland.png";
import { padding, textAlign } from "@mui/system";
import { Toolbar } from "@mui/material";

const countries = [
  {
    label: "France",
    src: France,
    link: " ",
    value: "FR"
  },
  {
    label: "Allemagne",
    src: Allemagne,
    link: " ",
    value: "DE"
  },
  {
    label: "Suisse",
    src: Suisse,
    link: " ",
    value: "CH"
  }
];

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    // marginTop: theme.spacing(2)
  },
  formControl: {
    // margin: theme.spacing(5),
    minWidth: 120,
    minHeight:20,
    backgroundColor: "transparent",
    textAlign:'center',
  
  },
  select: {
    textAlign: "center",
    textDecoration: "none"
  },
  flagIcon:{
height:20,
paddingRight:10
  }
}));

function ShipTo  () {
  // const classes = useSubNavBarStyles();

  const classes = useStyles();
  const [country, setCountry] = React.useState(France);
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

    return (<div>

<form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="open-select"  />
        <Select
        style={{height:30}}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          name="country"
          disableUnderline='true'
          onChange={handleChange}
          inputProps={{
            id: "open-select"
          }}
        >
          {countries.map((option, key) => (
            <MenuItem value={option.src} key={key} style={{textAlign:'center'}}>
              <Toolbar><img src={option.src} alt={option.label} className={classes.flagIcon} />
              {option.label}</Toolbar>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
    </div>  );
}

export default ShipTo;

