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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableText() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState<any>([]);

  const imgData = data?.filter((item: any) => !item.hasOwnProperty("imageUrl"));
  const maxqSteps = imgData && imgData.length;

  React.useEffect(() => {
    fsession();
  }, []);

  const fsession = async () => {
    const responce = await API_CLIENT.get(`feedbacks`);
    setData(responce?.data);
  };

  const { isMobile, isMobileM, isMobileL, isTablet } = useScreenSizes();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      {imgData.length > 0 ? (
        <Box
          className="carousel-main-content"
          style={{
            flexGrow: 1,
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <Button
            className="left-btn-arrorw-text"
            sx={
              isMobile || isMobileM || isMobileL || isTablet
                ? {
                    left: "0px",
                    top: "2.5%",
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
            className="div-for-carousel"
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            // onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imgData &&
              imgData.map((step: any, index: number) => (
                <div
                  key={step.title}
                  style={
                    isMobile || isMobileM || isMobileL || isTablet
                      ? { padding: " 0 15px", height: "100%" }
                      : { padding: "0 60px", height: "100%" }
                  }
                >
                  {Math.abs(activeStep - index) <= 2 ? (
                    <>
                      <div
                        className="step"
                        style={{
                          wordWrap: "break-word",
                          width: "100%",
                          marginTop: "-50px",
                          overflow: "hidden",
                          margin: "auto",
                          backgroundColor: "#644998",
                          borderRadius: "10px",
                          border: "5px solid #fff",
                          display: "flex",
                          height: "100%",

                          alignItems: "center",
                        }}
                      >
                        <div className="review">
                          <Typography className="review-text-title">
                            {`"${step?.title}"`}
                          </Typography>

                          <Typography
                            className="review-text-description"
                            sx={{
                              textAlign: "center",
                              fontSize: "1rem",
                              marginTop: "10px",
                              paddingLeft: "0px",
                              fontFamily: "'Montserrat', sans-serif",
                              lineHeight: "1.4rem",
                              color: COLORS.white,
                            }}
                          >
                            {`"${step?.description}"`}
                          </Typography>
                          <Typography
                            className="review-text-name"
                            sx={{
                              color: COLORS.orange_200,
                            }}
                          >
                            {step?.name}
                          </Typography>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
          </AutoPlaySwipeableViews>
          <Button
            className="right-btn-arrorw-text"
            sx={
              isMobile || isMobileM || isMobileL || isTablet
                ? {
                    right: "0px",
                    top: "2.5%",
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

export default SwipeableText;
