import { makeStyles } from "@material-ui/styles";
import { Icon } from "@mui/material";
import { styled } from "@mui/system";

// styled component ---
const SubCategoriesPaper = styled("div")({
  width: "100%", 
  height: 600 ,
  // position: 'absolute', top:103
});


// css class as style object  ---
const useSubNavBarStyles = makeStyles({
 flag:{
     paddingLeft: 10,
 },

//SubNavBar Full ToolBar
SubNavBarFullToolBar:{
  display:"flex", 
  justifyContent:"space-between",
  textAlign:'center'
  
},

//linksTitels
linksTitels:{
  fontSize: 14
},

//nextedItem
nextedItem:{
  width:300,
}


});

export { useSubNavBarStyles, SubCategoriesPaper };
