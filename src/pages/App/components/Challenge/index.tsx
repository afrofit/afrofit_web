import { Box, Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./challenge.css";
import img1 from "../../../../assets/img/webp/PICTURE-6.webp";
import img2 from "../../../../assets/img/webp/Challenge2.jpeg";
import imggirl from "../../../../assets/img/webp/PICTURE-3.webp";

import img3 from "../../../../assets/img/webp/PICTURE-1.webp";
import img4 from "../../../../assets/img/webp/PICTURE-4.webp";
import img5 from "../../../../assets/img/webp/PICTURE-5.webp";
import img6 from "../../../../assets/img/webp/PICTURE-1.webp";
import clickhere1 from "../../../../assets/img/webp/clickhere.png";

import PlayStoreLogo from "../../../../assets/img/playstore.png";
import AppStoreLogo from "../../../../assets/img/appstore.png";

import clickhere from "../../../../assets/img/webp/clickhere.gif";
import whatsappLogo from "../../../../assets/img/webp/whatsapp.gif";
import attention from "../../../../assets/img/webp/attention.jpg";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Challenge = () => {
  return (
    <div className="top-div">
      <div className="challenge-main">
        <div className="header-fit">
          <h1 className="header-fit1">AFROFIT APP 30 DAYS RESULT CHALLENGE!</h1>
          <h1 className="header-fit2">
            LOOK LEAN, LOOK FIT, LOOK SEXIER IN 30 DAYS
          </h1>
        </div>

        <div className="Challenge-fit">
          <h1 className="Challenge-fit-h1">
            The 30 Day Online Fit Body Challenge
          </h1>
          <div
            className="Challenge-fit-img1"
            style={{ padding: "0 2rem 1.5rem 2rem " }}
          >
            <div className="firstGrpImg-div">
              <p className="firstGrpImg-text">
                STARTS MONDAY 4th OF SEPTEMBER !
              </p>
              <div className="firstGrpImg-div-inner">
                <div>
                  <img className="firstGrpImg-img" src={img3} />
                </div>
                <div>
                  <img
                    className="firstGrpImg-img"
                    src={img2}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img className="firstGrpImg-img" src={imggirl} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="Challenge-fit2">
            <div> kljglk</div>
          </div> */}
        </div>
        {/* paragraph========================= */}
        <div className="paragraph">
          <List>
            <ListItem>
              <div className="paragraph-list">
                <ArrowCircleRightOutlinedIcon
                  sx={{ width: "2rem", height: "2rem" }}
                />
                Are you looking for a quick weight loss result without gym or
                you don’t like or have time for the gym?
              </div>
            </ListItem>
            <ListItem>
              <div className="paragraph-list">
                <ArrowCircleRightOutlinedIcon
                  sx={{ width: "2rem", height: "2rem" }}
                />
                Are you a beginner or new to fitness and you have fitness goals
                but don't know where to start?
              </div>
            </ListItem>
            <ListItem>
              <div className="paragraph-list">
                <ArrowCircleRightOutlinedIcon
                  sx={{ width: "2rem", height: "2rem" }}
                />
                Do you want to get fit but haven’t got a big budget for gym or a
                personal trainer?
              </div>
            </ListItem>
            <ListItem>
              <div className="paragraph-list">
                <ArrowCircleRightOutlinedIcon
                  sx={{ width: "2rem", height: "2rem" }}
                />
                The Afrofit app 30-days result challenge, is an online weight
                loss, nutrition and motivation program that can help you lose up
                to 20lbs of body fat in 30 days!
              </div>
            </ListItem>
            <ListItem>
              <div className="paragraph-list">
                <ArrowCircleRightOutlinedIcon
                  sx={{ width: "2rem", height: "2rem" }}
                />
                With our experience in helping many clients like yourself we
                will guide you through a simple and effective workout routines,
                helping you make a little adjustment to your diets and you start
                noticing the results from Day 1.
              </div>
            </ListItem>
          </List>
        </div>
        {/* paragrapgh==================   end   ===================== */}

        <div className="img2">
          <div className="image-list">
            <img src={img4} className="img2-imgrop" />
          </div>
          <div className="image-list">
            <img src={img1} className="img2-imgrop" />
          </div>
          <div className="image-list">
            <img src={img5} className="img2-imgrop" />
          </div>
        </div>

        <h1 className="HERE">Here are the benefits you get...</h1>
        <div className="benefits">
          <ol type="1">
            <li className="benefits-list">
              A 1 to 1 free consultation that includes a free weight scanning
              and recommendation to guide you on your weight loss journey.
            </li>
            <li className="benefits-list">
              A tested, trusted and personalised healthy meal plan to accelerate
              your weight loss goal sent directly to your phone daily.
            </li>
            <li className="benefits-list">
              Daily workout videos to follow along for easy workout exercises
              sent directly to your phone.
            </li>
            <li className="benefits-list">
              <div className="benefits-list">
                Daily motivation and advice videos all via the Afrofit app to
                keep you focused from Day 1.
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "20px",
                  }}
                >
                  (Click here to download the app)
                </div>
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  mt={1}
                  mb={3}
                  sx={{
                    display: { xs: "flex" },
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: "70px", md: "100px" },
                      cursor: "pointer",
                      marginBottom: { xs: 0, md: 2 },
                      marginTop: { xs: 1, md: 2 },
                      marginLeft: 2,
                      marginRight: 2,
                    }}
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.djminddgap.afrofit&gl=GB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={PlayStoreLogo}
                        alt="the Afrofit logo"
                        height={"100%"}
                      />
                    </a>
                  </Box>
                  <Box
                    sx={{
                      height: { xs: "70px", md: "100px" },
                      cursor: "pointer",
                      marginBottom: { xs: 0, md: 2 },
                      marginTop: { xs: 1, md: 2 },
                      marginLeft: 2,
                      marginRight: 2,
                    }}
                  >
                    <a
                      href="https://apps.apple.com/us/app/afrofit-app/id1643761809"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={AppStoreLogo}
                        alt="the Afrofit logo"
                        height={"100%"}
                      />
                    </a>
                  </Box>
                </Grid>
              </div>
            </li>
            <li className="benefits-list">
              Unlimited support and guidance from a fitness and weight loss
              expert so you know you are not alone in this weight loss journey.
            </li>
            <li className="benefits-list">
              Cash back reward for achieving your fitness goal.
            </li>
            <li className="benefits-list">Guaranteed results!</li>
          </ol>
          <div className="attention-div">
            <div className="attention-div-2">
              <div className="attention-div-img">
                <img
                  src={attention}
                  height="100%"
                  width="100%"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    background: "none",
                    borderRadius: "50%",
                  }}
                />
              </div>
              4 weeks of personal training, nutrition advice and unlimited
              coaching would normally cost you an average of £1000 but we
              believe an effective weight loss program that brings result should
              not cost you an arm and leg that is why we are making our winning
              formula very affordable for you at just £99, and to say thank you
              to you on behalf of your body we will also be giving you a cash
              back reward for achieving your fitness goal.
            </div>
            <div className="attention-div-text2">
              Challenge begins 4th September / Early Bird sale £59 (August 7th –
              August 20th) / Regular Price £99 (August 21st – August 31st). Sign
              up now! because of limited space.
            </div>
          </div>
          <h2 className="whatsapp-text">
            TO RESERVE A PLACE. REPLY “YES” VIA OUR WHATSAPP NUMBER TO VIA OUR
            WHATSAPP AND A MEMBER OF OUR WILL NOT WE CONTACT YOU
          </h2>
          <div className="whatsapp-main-div">
            <h2 className="whatsapp-text2">CONTACT US ON WHATSAPP NOW -</h2>
            <div
              className="whatsapp-div"
              // style={{
              //   height: "10%",
              //   width: "10%",
              //   paddingBottom: "15px",
              // }}
            >
              <a target="_blank" href="https://wa.me/message/X5LKPFUJT6CYK1">
                <img className="whatsapp-logo" src={whatsappLogo} />
              </a>
            </div>

            {/* <div
              className="blinking-svg"
              style={{
                width: "10%",
                height: "10%",
                backgroundColor: "black",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "65%",
              }}
            >
              <img
                src={whatsappLogo}
                height="80%"
                width="90%"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
