import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { COLORS } from "../../../../constants/colors";

export default function Faqs() {
  return (
    <div style={{ alignItems: "center" }}>
      <h3
        style={{
          color: "whitesmoke",
          padding: "1.5rem",
          fontSize: "1.6rem",
          paddingLeft: "25rem",
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

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
// import MuiAccordionSummary, {
//   AccordionSummaryProps,
// } from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";

// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState<string | false>("panel1");

//   const handleChange =
//     (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
//       setExpanded(newExpanded ? panel : false);
//     };

//   return (
//     <div>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Collapsible Group Item #1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
//           <Typography>Collapsible Group Item #2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
//           <Typography>Collapsible Group Item #3</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
//             lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
