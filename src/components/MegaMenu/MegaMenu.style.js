import { makeStyles } from "@material-ui/styles";
import { styled } from "@mui/system";

// styled component ---
const MyBox = styled("div")({
  fontSize: 35,
});

// css class as style object  ---
const useMegaMenuStyles = makeStyles({

    mainCategories:{
        backgroundColor:'red',
        width:'60%',
        marginLeft:50,

    }
});

export { useMegaMenuStyles, MyBox };
