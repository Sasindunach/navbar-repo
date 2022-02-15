import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from '@material-ui/core';
import {useStyles} from "./NavBar.style"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Cart from "../../assets/Cart.svg";
import { IconButton } from "@mui/material";



function NavCart() {

    const [itemCount, setItemCount] = React.useState(88);
    const classes = useStyles();

  return ( 
    <div>
      <div>
      <Badge className={classes.cartItem} color="secondary" badgeContent={itemCount}>
      <div className={classes.navItemIcon}>
      <IconButton>
      <img src={Cart} height={20} />
        </IconButton></div>
             {" "}
            </Badge>
      </div>
      <div className={classes.NavBarItemTitels}>
        <a className="navitemtext" href="#">Cart</a>
      </div>
    </div>
  );
}

export default NavCart;