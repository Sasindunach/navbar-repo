import { Fullscreen } from "@material-ui/icons";
// import * as React from "react";
// import Banner1 from "../../assets/Banner-1.png";

// function Banner () {
//     return ( <div>
//         <img src={Banner1}  width={Fullscreen} />
//     </div> );
// }

// export default Banner;

import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const MyCollection = [
  {
    label: "First Picture",
    imgPath:
      "https://thumbs.dreamstime.com/b/online-shopping-banner-business-concept-sale-e-commerce-smartphone-tiny-people-character-template-web-landing-147192696.jpg",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://media.istockphoto.com/vectors/internet-shopping-concept-on-computer-vector-id1257044925?k=20&m=1257044925&s=612x612&w=0&h=i5o_jMdPNHcSvHdatsPOrHWafQgVMmAAHXhdiprFqb4=",
  },
  {
    label: "Third Picture",
    imgPath: "https://img.lovepik.com/photo/40008/0279.jpg_wh860.jpg",
  },
];

const Banner = () => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <div>
        <img
          src={MyCollection[index].imgPath}
          // width={Fullscreen}
          style={{
            // minHeight: 580,
            width: "100%",
            // maxWidth: 400,
            display: "block",
            overflow: "hidden",
          }}
          // alt={MyCollection[index].label}
        />
        <MobileStepper
          variant="text"
          position="static"
          index={index}
          steps={CollectionSize}
          nextButton={
            <Button
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default Banner;
