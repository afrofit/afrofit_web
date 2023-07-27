import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { COLORS } from "../../../constants/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useScreenSizes from "../../../hook/useScreenSizes";
import API_CLIENT from "../../../api/client";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import settings from "../../../config/settings";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableImage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState<any>([]);

  // const imgData = data?.filter(
  //   (item: { imageUrl: string }) =>
  //     item?.imageUrl !== "" || item?.imageUrl !== undefined
  // );
  // console.log("imgData", imgData);
  const imgData = data?.filter((item: any) => item.hasOwnProperty("imageUrl"));

  const maxqSteps = imgData && imgData.length;

  React.useEffect(() => {
    fsession();
  }, []);

  const fsession = async () => {
    const responce = await API_CLIENT.get(`feedbacks`);
    setData(responce?.data);
  };

  const { isMobile, isMobileM, isMobileL, isTablet, isLaptop } =
    useScreenSizes();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      {imgData.length > 0 ? (
        <Box
          className="imgBox1"
          style={{
            flexGrow: 1,
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <Button
            className="left-btn-arrorw"
            sx={
              isMobile || isMobileM || isMobileL || isTablet || isLaptop
                ? isMobile || isMobileM
                  ? {
                      position: "absolute",
                      zIndex: "9",
                      top: "31%",
                      left: "0",
                    }
                  : {
                      left: "0px",
                      top: "30%",
                      position: "absolute",
                      zIndex: "9",
                    }
                : {
                    top: "50%",
                    position: "absolute",
                    left: "0",
                    zIndex: "9",
                    transform: "translateY(-50%)",
                  }
            }
            onClick={handleNext}
            disabled={activeStep === 0}
          >
            <ArrowBackIosNewIcon
              sx={{ color: activeStep === 0 ? "gray" : "white" }}
            />
          </Button>

          <AutoPlaySwipeableViews
            autoPlay={false}
            className="12345"
            // interval={15000}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            // onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imgData &&
              imgData.map((step: any, index: number) => (
                <div
                  key={index}
                  style={
                    isMobile || isMobileM || isMobileL || isTablet
                      ? { padding: " 0 15px", height: "100%" }
                      : { padding: "0 60px", height: "100%" }
                  }
                >
                  {Math.abs(activeStep - index) <= 2 ? (
                    <div className="step-img">
                      <div className="profile-icon">
                        <Box
                          component="img"
                          className="profile-icon-box"
                          src={settings.imageUrl + step?.imageUrl}
                          alt={step?.title}
                        />
                      </div>
                      <div className="review-img">
                        <Typography
                          className="review-img-title"
                          style={{
                            // fontSize: "25px",
                            // fontWeight: "bold",
                            // fontFamily: "'Montserrat', sans-serif",
                            color: COLORS.white,
                          }}
                        >
                          {`"${step?.title}"`}
                        </Typography>

                        <Typography
                          className="review-img-description"
                          sx={{
                            // fontSize: "25px",
                            // fontWeight: "bold",
                            // fontFamily: "'Montserrat', sans-serif",
                            color: COLORS.white,

                            // font-size: "3.3rem";
                            // margin-top: "10px";
                            // font-weight: 300;
                            // padding-left: "0px";
                            // font-family: "'Montserrat', sans-serif";
                            // line-height: "1.4rem";
                          }}
                        >
                          {`"${step?.description}"`}
                        </Typography>
                        <Typography
                          className="review-img-name"
                          sx={{
                            color: COLORS.orange_200,
                            marginTop: "20px",
                          }}
                        >
                          {step?.name}
                        </Typography>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
          </AutoPlaySwipeableViews>
          <Button
            className="right-btn-arrorw"
            sx={
              isMobile || isMobileM || isMobileL || isTablet || isLaptop
                ? isMobile || isMobileM
                  ? {
                      position: "absolute",
                      zIndex: "9",
                      top: "31%",
                      right: "0",
                    }
                  : {
                      right: "0px",
                      top: "30%",
                      position: "absolute",
                      zIndex: "9",
                    }
                : {
                    top: "50%",
                    position: "absolute",
                    right: "0",
                    zIndex: "9",
                    transform: "translateY(-50%)",
                  }
            }
            onClick={handleBack}
            disabled={activeStep === maxqSteps - 1}
          >
            <ArrowForwardIosIcon
              sx={{ color: activeStep === maxqSteps - 1 ? "gray" : "white" }}
            />
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}

export default SwipeableImage;
