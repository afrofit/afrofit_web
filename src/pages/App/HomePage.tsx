import { Box, Button, colors, Typography } from "@mui/material";
import { COLORS } from "../../constants/colors";
import image from "../../assets/img/food.jpg";
import logofull from "../../assets/img/logofull_nobg.png";
import logo from "../../assets/img/logo192.png";

import girlback from "../../assets/img/webp/girl back.webp";
// import girlback from "../../assets/img/webp/girlback.webp";

// import image1 from "../../assets/img/webp/single4.webp";
import REPLACE4 from "../../assets/img/REPLACE 4.jpeg";

import bothside from "../../assets/img/webp/bothside.webp";
import single2 from "../../assets/img/webp/single2.webp";
// import single2 from "../../assets/img/webp/single2.webp";

import jenny from "../../assets/img/jenny.webp";
import REPLACE5 from "../../assets/img/REPLACE 5.jpeg";
import REPLACE3 from "../../assets/img/REPLACE 3.jpg";
import bothfront from "../../assets/img/webp/bothfront.webp";
import bothfront2 from "../../assets/img/webp/bothfront2.webp";
import bothgym from "../../assets/img/webp/bothgym.webp";
import bothoneside from "../../assets/img/webp/bothoneside.webp";
import invertedcoma from "../../assets/img/webp/inverted-coma.webp";

import video1 from "../../assets/video/fitness.mp4";
import video2 from "../../assets/video/video.mp4";

import "./Blog.css";
// import SwipeableTextMobileStepper from "../../../components/layout/Appcarousel/carouselImage";
import SwipeableTextMobileStepper from "../../components/layout/Appcarousel/carouselImage";

import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import SwipeableText from "../../components/layout/Appcarousel/carouselText";
import { useNavigate } from "react-router-dom";
// for table ======-=============================================
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ClearIcon from "@mui/icons-material/Clear";

interface Props {}
const BlogPage: React.FC<Props> = () => {
  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");
  const navigate = useNavigate();
  function createData(
    name: string,
    AFROFIT: string,
    MEMBERSHIP: string
    // carbs: string,
    // protein: string
  ) {
    return {
      name,
      AFROFIT,
      MEMBERSHIP,
      // carbs, protein
    };
  }

  const rows = [
    createData(
      "Affordable",
      "Monthly Subscription Cheaper than a Macdonald meal",
      "Over £50 Monthly with a personal trainer"
    ),
    createData(
      "Convenience",
      "Have fun working-out from home at your own time and pace",
      "Restricted to GYM opening hours"
    ),
    createData(
      "Comfort",
      "You have more privacy and feel more comfortable working out on your own",
      "GYMS are always busy and overcrowded, which gives you no privacy"
    ),
    // 4
    createData(
      "No pressure on you",

      "All fitness level from Beginners to experts is accommodated with easy steps and Guide.",
      "With GYM you get confused or demotivated without a personal trainer help or guide"
    ),
    // 5
    createData(
      "Gym in your pocket",
      "You can have access to your workouts from your phone anywhere you are",
      "Busy or unplanned schedule can make you miss a GYM session"
    ),
    // 6
    createData(
      "Access to a PT",
      "You will always have access to speak or chat with a Qualified personal trainer 24/7",
      "You have to wait, pay or create time to see or speak to a personal trainer"
    ),
    createData(
      "TRACK PROGRESS",
      "You can always track your progress on your phone",
      "GYM has no facilities or equipment for a personalised progress tracking"
    ),
    createData(
      "NON STOP WORKOUT DJ MIXTAPE TO LISTEN AND DOWNLOAD",
      "You will have access to energy based workout music of different genre mixed and mastered by top professional DJS",
      "With GYM you have no access or control over workout music"
    ),
    // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    // createData("Eclair", 262, 16.0, 24, 6.0),
    // createData("Cupcake", 305, 3.7, 67, 4.3),
    // createData("Gingerbread", 356, 16.0, 49, 3.9),
    // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    // createData("Eclair", 262, 16.0, 24, 6.0),
    // createData("Cupcake", 305, 3.7, 67, 4.3),
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <div className="parent0">
        <div className="overlap"></div>
        <div className="child0">
          <h2 className="child0-h2">
            Get Fit. Keep Fit. Look Good. Be Strong.
          </h2>
          <p style={{ fontSize: "2rem", color: "white" }}>
            Physically. Mentally. Sexually.
          </p>
          <button className="child0-btn" onClick={() => navigate("/join-us")}>
            Find out more
          </button>
        </div>
      </div>
      <div className="parent1">
        <h2 className="maintitle">A FEW MEMBERSHIP BENEFITS</h2>
        <div className="part-inner">
          <div className="part">
            <div className="part-content">
              <h4 className="title">Dance Exercise App</h4>
              <p>
                Dance and lose weight quickly with our free DAILY DANCE EXERCISE
                APP
              </p>
            </div>
          </div>
          <div className="part">
            <div className="part-content">
              <h4 className="title">Amazing DJ Mixes</h4>
              <p>
                ACCESS TO UNLIMITED WORKOUT/PARTY DJ MIXES by top DJs around the
                world
              </p>
            </div>
          </div>
          <div className="part">
            <div className="part-content">
              <h4 className="title">Dance Fitness Programs</h4>
              <p>
                FULL ACCESS TO WEEKLY ONLINE DANCE FITNESS PROGRAM CLASSES by
                highly qualified fitness instructors
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "none",
          borderRadius: "5rem",
        }}
      >
        <div
          className="parent"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            background:
              "linear-gradient(230deg, rgb(249, 107, 104) -20%, rgb(0, 0, 0) 28%, rgb(249, 107, 104) 26%)",
            // "linear-gradient(242deg, #f96b68 -5%, #000 29%, #f96b68 28%)",
          }}
          // linear-gradient(242deg, #f96b68 -5%, #000 29%, #f96b68 28%)
          // linear-gradient(230deg, rgb(249, 107, 104) -20%, rgb(0, 0, 0) 28%, rgb(249, 107, 104) 26%)
        >
          <div className="child1">
            <img
              src={bothside}
              style={{
                objectFit: "initial",
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
              }}
            ></img>
          </div>
          <div
            className="child1-a"
            style={{
              width: "44%",
            }}
          >
            <img
              src={REPLACE4}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                display: "block",
              }}
            ></img>
          </div>

          <div className="child2">
            <div className="stage">
              <div className="spin">
                <img
                  className="gbounce"
                  src={logo}
                  alt="Logo"
                  style={{
                    objectFit: "cover",
                    width: "5rem",
                    alignSelf: "flex-end",
                  }}
                />
              </div>
            </div>

            <h2
              style={{
                paddingBottom: "1rem",
                fontSize: "1.9rem",
                fontWeight: "500",
                lineHeight: "1.2",
                color: "white",
                marginBottom: "0",
              }}
            >
              A NEW DANCE TO FITNESS HOME CONCEPT GURANTEED TO TRANSFORM YOUR
              BODY IN LESS THAN 30 DAYS
            </h2>

            <TableContainer
              component={Paper}
              sx={{
                border: "1px solid white",
                backgroundColor: "black",
              }}
            >
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      style={{ background: "#fff", color: "black" }}
                    >
                      {/* Dessert (100g serving) */}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{ background: "#fff", color: "black" }}
                    >
                      AFROFIT APP
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{ background: "#fff", color: "black" }}
                    >
                      GYM MEMBERSHIP
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{
                          background: "black",
                          color: "#fff",
                        }}
                      >
                        {row?.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <div
                          style={{
                            paddingRight: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            background: "black",
                            color: "#fff",
                          }}
                        >
                          <CheckBoxIcon
                            style={{
                              color: "green",
                              padding: "0.1rem ",
                              marginRight: "0.5rem",
                              background: "black",
                            }}
                          />
                          {row?.AFROFIT}
                        </div>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <div
                          style={{
                            paddingRight: "1rem",
                            display: "flex",
                            alignItems: "center",
                            background: "black",
                            color: "#fff",
                          }}
                        >
                          <ClearIcon
                            style={{
                              color: "red",
                              padding: "0.1rem",
                              marginRight: "0.5rem",
                            }}
                          />
                          {row?.MEMBERSHIP}
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <button
              className="child2-btn"
              onClick={() => {
                {
                  token ? navigate("/plan") : navigate("/login");
                }
              }}
            >
              Start 7-day free trial
            </button>
          </div>
        </div>
        <section className="child2-section">
          <img
            src="https://craftcms-assets.playbookapp.io/Vanity-Fair-Logo.svg"
            style={{
              width: "9rem",
              color: "white",
            }}
          ></img>
          <img
            src="https://craftcms-assets.playbookapp.io/Inquisitr-Logo.svg"
            style={{
              width: "9rem",
            }}
          ></img>
          <img
            src="https://craftcms-assets.playbookapp.io/The-CHIVE-Logo.svg"
            style={{
              width: "9rem",
            }}
          ></img>
          <img
            src="https://craftcms-assets.playbookapp.io/DailyMail-Logo.svg"
            style={{
              width: "9rem",
            }}
          ></img>
          <img
            src="https://craftcms-assets.playbookapp.io/Muscle-Fitness-Logo-01.svg"
            style={{
              width: "9rem",
            }}
          ></img>
        </section>
      </div>
      <div className="parent2">
        <div className="parent2-div">
          <div className="child3">
            <img
              src={REPLACE5}
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            ></img>
          </div>
          <div
            className="child4"
            style={{
              flex: "50%",
              padding: "3rem",
            }}
          >
            <div
              className="child4-a"
              style={{
                padding: "3rem 0 2rem 0",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h3 className="child4-h3">
                SAY NO TO GYM MEMBERSHIP : <br /> THE MOST AFFORDABLE AND
                EXCITING FITNESS GAME APP IN THE WORLD RIGHT NOW!!!
              </h3>
              <p className="child4-p">
                Workouts can be done from home or anywhere you have some space
                to move those hips.
              </p>
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              My goal is to help you increase endurance, flexibility and
              mobility and overall full body strength….oh and help you improve
              your dance skills as well ;) You will have access to a full-body
              workout and dance routine that comes with amazing music and vibes.
            </p>
            <button
              className="child4-btn"
              onClick={() => {
                token ? navigate("/plan") : navigate("/login");
              }}
            >
              Start 7-day free trial
            </button>
          </div>
        </div>
      </div>
      <div className="parent3">
        <div className="parent3-div-overlap-red"></div>
        <div className="parent3-div">
          <div className="child5">
            <div className="child5-a" style={{ width: "60%" }}>
              <h3
                style={{
                  fontSize: "3rem",
                  marginBottom: "1.5rem",
                  lineHeight: "1",
                }}
              >
                BENEFITS FOR YOU AS MEMBER OF THE AFROFIT APP CLUB:
              </h3>
              <p style={{ fontSize: "1.2rem" }}>
                Use our free AFROFITAPP to burn calories and lose weight and
                burn body fat fast
              </p>
            </div>
            <div
              className="abc"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 -1rem",
              }}
            >
              <div className="xyz" style={{ padding: "0 1rem" }}>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />
                  Daily and easy dance workout exercise to burn at least 500
                  calories per day{" "}
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />
                  Very interesting and Interactive dance game that helps you
                  burn unlimited calories to lose weight or body fat daily
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />
                  Dance fitness marathon competition with other members that
                  motivates you to even burn more calories
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Steps and calories burned counter to help you keep track of
                  your fitness goals
                </p>
              </div>
              <div style={{ padding: "0 1rem" }}>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Weekly weight loss tips from experts
                </p>

                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Massive discounts on our exclusive fitness products and to
                  attend our Events
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Bespoke Diet plan personalised to your background, life style
                  and eating habits.
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ArrowCircleRightRoundedIcon
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Access to a personal trainer
                </p>
              </div>
            </div>
          </div>
          <div className="child6" style={{ width: "40%" }}>
            <img
              src={girlback}
              style={{
                width: "100%",
              }}
            ></img>
          </div>
        </div>
      </div>
      <div className="parent4">
        <div className="parent4-div">
          <div className="child7">
            <img
              src={REPLACE3}
              style={{
                objectFit: "cover",
                width: "100%",
                display: "block",
              }}
            ></img>
          </div>
          <div
            className="child8"
            style={{
              flex: "70%",
              padding: "3rem",
            }}
          >
            <div
              className="child8-a"
              style={{
                padding: "0rem 0 2rem 0",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "550",
                  lineHeight: "1.2",
                  color: "white",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginTop: "0rem",
                  marginBottom: "1.5rem",
                }}
              >
                Meet ‘MIND D GAP’ (Qualified Fitness Coach and Expert in home
                weight loss and fitness training)
              </h3>
              <p
                style={{
                  paddingTop: "0rem",
                  gap: "1rem",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.25rem",
                  fontWeight: "300",
                  lineHeight: "1.2",
                  color: "white",
                  width: "100%",
                }}
              >
                I'm a Fitness Trainer and Diet Coach based in the UK who
                specialises in quick and easy body transformations. I help
                people burn fat, increase strength, feel awesome by helping them
                build a sexy body! Many years ago before I got into the fitness
                industry, I used to hate the gym so much because I find it very
                hard, demanding, boring and lack motivation sometimes, until I
                found this hidden and best kept secret used by Hollywood actors
                and celebrities such as JENNIFER LOPEZ, SHAKIRA, HALLE BERRY,
                JACKIE CHAN, WYCLEF JEAN, MADONNA and many more who uses these
                techniques to keep in shape without needing to work out in the
                gym. Because I came from a music and Djing background and I’m
                well known in the UK and all over the world for making my
                audience and clients sweat on the dance floor, after many years
                of experience and research I created a bespoke fun and proven
                results-focused Technique that has helped many of my client’s
                literally getting results in 2 weeks. I’m a very busy DJ /
                Online content creator and also a family man and I understand
                the high demands of everyday life, and how challenging it can be
                fitting in healthy eating and exercise around the chaos of every
                day so I created the AFROFIT APP community to help people like
                you transform both your body and mind in the quickest possible
                way while still having fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="video1">
        <div className="video-text">
          <p>
            “Jennifer Lopez’s age-defying figure is said to be the result of
            dance workout techniques that combine dance exercises with light
            strength training using body weight and high repetitions with small
            hand weights or objects.”
          </p>
        </div>
        <div className="video-inner">
          <img src={jenny} alt="Jennifer Lopez" />
        </div>
      </div> */}

      <div className="parent2 right-img-small-left-text">
        <div className="parent2-div">
          <div
            className="child4"
            style={{
              flex: "50%",
              padding: "3rem",
            }}
          >
            <div
              className="child4-a"
              style={{
                padding: "3rem 0 2rem 0",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p className="child4-p">
                “Jennifer Lopez’s age-defying figure is said to be the result of
                dance workout techniques that combine dance exercises with light
                strength training using body weight and high repetitions with
                small hand weights or objects.”
              </p>
            </div>
          </div>
          <div className="child3">
            <img
              src={jenny}
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            ></img>
          </div>
        </div>
      </div>

      <div
        className="parent5"
        style={{
          backgroundColor: "rgb(152 112 215)",
          padding: "5rem 3rem",
        }}
      >
        <div
          className="child9"
          style={{
            color: "#fff",
            maxWidth: "500px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.5rem", margin: "0rem" }}>
            Start training with me today!
          </p>
          <h3
            style={{
              fontSize: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              lineHeight: "1",
            }}
          >
            TRY THIS APP FOR FREE FOR 7 DAYS
          </h3>
          <button
            style={{
              padding: "1rem 2rem",
              borderRadius: "5rem",
              backgroundColor: "#000",
              border: "none",
              outline: "none",
              color: "white",
              marginTop: "1rem",
              fontSize: "1.2rem",
              maxWidth: "300px",
            }}
            onClick={() => {
              token ? navigate("/plan") : navigate("/login");
            }}
          >
            Start 7-day free trial
          </button>
        </div>
      </div>
      <div className="parent6" style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <img
            src={girlback}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>
        <div style={{ width: "20%" }}>
          <img
            src={bothfront}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>
        <div style={{ width: "20%" }}>
          <img
            src={bothfront2}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>
        <div style={{ width: "20%" }}>
          <img
            src={bothgym}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>
        <div style={{ width: "20%" }}>
          <img
            src={bothoneside}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>
      </div>
      <div className="parent7">
        <Typography
          className="parent7-text"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2.5rem",
            color: "#fff",
            marginTop: "25px",
            fontWeight: "bold",
            fontFamily: "'Bebas Neue', sans-serif",
            textAlign: "center",
            backgroundColor: "#000",
            padding: "0.1%",
          }}
        >
          Testimonial
        </Typography>

        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            height: "auto",
            width: "100%",
          }}
        >
          <SwipeableTextMobileStepper />
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            height: "auto",
            width: "100%",
          }}
        >
          <SwipeableText />
        </Box>
      </div>
    </>
  );
};

export default BlogPage;
