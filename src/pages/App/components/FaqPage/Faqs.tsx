import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { COLORS } from "../../../../constants/colors";

export default function Faqs() {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#1d1f2e",
        padding: "1rem",
        marginTop: "3rem",
        width: "100%",
      }}
    >
      <h3
        style={{
          color: "whitesmoke",
          textAlign: "center",
          fontSize: "1.6rem",
        }}
      >
        Frequently Asked Questions
      </h3>
      <div>
        {/* 11111111111 */}
        <Accordion
          sx={{
            backgroundColor: "#2d2d2d",
            color: "whitesmoke",
            padding: "0.5rem",
            marginBottom: "1rem",
            // "&:hover": {
            //   backgroundColor: "#808080",
            // },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#f26c68" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&:hover": {
                backgroundColor: "#555353",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1.3rem",
              }}
            >
              My app is not reading my movement?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&:hover": {
                backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
                color: "black",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: 2,
              }}
            >
              You will need to allow the physical activity tracking on your
              phone settings to detect the user's step count or classify the
              user's physical activity, such as walking, dancing, or moving.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* 222222222 */}
        <Accordion
          sx={{
            backgroundColor: "#2d2d2d",
            color: "whitesmoke",
            padding: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#f26c68" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&:hover": {
                backgroundColor: "#555353",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography sx={{ fontSize: "1.3rem" }}>
              Do I need to hold my phone for the app to read my steps.
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&:hover": {
                backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
                color: "black",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: 2,
              }}
            >
              The phone needs to be on you to record your steps and movement.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 3333333333 */}
        <Accordion
          sx={{
            backgroundColor: "#2d2d2d",
            color: "whitesmoke",
            padding: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#f26c68" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&:hover": {
                backgroundColor: "#555353",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography sx={{ fontSize: "1.3rem" }}>
              How do I log in to the app?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&:hover": {
                backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
                color: "black",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: 2,
              }}
            >
              Use the same user name and password that you used to register on
              the website to log into the Mobile App. Note that you will need an
              active subscription to use the feature on the app.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 44444444444 */}
        <Accordion
          sx={{
            backgroundColor: "#2d2d2d",
            color: "whitesmoke",
            padding: "0.5rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#f26c68" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&:hover": {
                backgroundColor: "#555353",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography sx={{ fontSize: "1.3rem" }}>
              Can I cancel my subscription anytime?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&:hover": {
                backgroundImage: `linear-gradient(45deg, ${COLORS.orange_200}, ${COLORS.hilite_purpink})`,
                color: "black",
                transition: "all ease 0.5s",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: 2,
              }}
            >
              Yes, you can cancel your subscription any time.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
