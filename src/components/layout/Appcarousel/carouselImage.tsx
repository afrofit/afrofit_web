import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { COLORS } from '../../../constants/colors';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useScreenSizes from '../../../hook/useScreenSizes';
import API_CLIENT from '../../../api/client';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import settings from '../../../config/settings';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableImage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState<any>();

  const imgData = data?.filter((item: any) => item.hasOwnProperty('imageUrl'));

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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 'auto', position: 'relative' }}>
      <Button
        sx={
          isMobile || isMobileM || isMobileL || isTablet || isLaptop
            ? isMobile || isMobileM
              ? {
                  position: 'absolute',
                  zIndex: '9',
                  top: '31%',
                  left: '0',
                }
              : { left: '0px', top: '30%', position: 'absolute', zIndex: '9' }
            : {
                top: '50%',
                position: 'absolute',
                left: '0',
                zIndex: '9',
                transform: 'translateY(-50%)',
              }
        }
        onClick={handleNext}
        disabled={activeStep === maxqSteps - 1}
      >
        <ArrowBackIosNewIcon
          sx={{ color: activeStep === maxqSteps - 1 ? 'gray' : 'white' }}
        />
      </Button>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {imgData &&
          imgData.map((step: any, index: number) => (
            <div
              key={index}
              style={
                isMobile || isMobileM || isMobileL || isTablet
                  ? { padding: ' 0 15px' }
                  : { padding: '0 60px' }
              }
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Box
                    component='img'
                    sx={{
                      height: '100%',
                      display: 'block',
                      maxWidth: '300px',
                      overflow: 'hidden',
                      width: '100%',
                      textAlign: 'center',
                      margin: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                    }}
                    src={settings.imageUrl + step?.imageUrl}
                    alt={step?.title}
                  />

                  <Typography
                    sx={{
                      marginTop: '15px',
                      fontWeight: 'bold',
                      fontSize: '25px',
                      color: '#ffff',
                      textAlign: 'center',
                    }}
                  >
                    {`"${step?.title}"`}
                  </Typography>

                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontSize: '20px',
                      color: COLORS.whiteblue,
                      marginTop: '10px',
                      paddingLeft: '10px',
                    }}
                  >
                    {`"${step?.description}"`}
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: '15px',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      textAlign: 'center',
                      color: COLORS.orange_200,
                    }}
                  >
                    {step?.name}
                  </Typography>
                </>
              ) : null}
            </div>
          ))}
      </AutoPlaySwipeableViews>
      <Button
        sx={
          isMobile || isMobileM || isMobileL || isTablet || isLaptop
            ? isMobile || isMobileM
              ? {
                  position: 'absolute',
                  zIndex: '9',
                  top: '31%',
                  right: '0',
                }
              : { right: '0px', top: '30%', position: 'absolute', zIndex: '9' }
            : {
                top: '50%',
                position: 'absolute',
                right: '0',
                zIndex: '9',
                transform: 'translateY(-50%)',
              }
        }
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        <ArrowForwardIosIcon
          sx={{ color: activeStep === 0 ? 'gray' : 'white' }}
        />
      </Button>
    </Box>
  );
}

export default SwipeableImage;
