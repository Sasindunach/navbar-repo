import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@material-ui/core/Badge";
import {useStyles} from "./NavBar.style"





function NavCart() {

    const [itemCount, setItemCount] = React.useState(88);
    const classes = useStyles();

  return (
    <div>
      <div>
      <Badge color="secondary" badgeContent={itemCount}>
      <ShoppingCartOutlinedIcon style={{ fontSize: "32x", color:'white'}} />
             {" "}
            </Badge>
      </div>
      <div className={classes.NavBarItemTitels}>
        <a href="#">Cart</a>
      </div>
    </div>
  );
}

export default NavCart;