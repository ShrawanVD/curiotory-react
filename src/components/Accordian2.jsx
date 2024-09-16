import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Helmet } from "react-helmet";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Helmet>
      {/* Google Tag (gtag.js) */}
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
        </script>
    </Helmet>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        slotProps={{ transition: { timeout: 800, unmountOnExit: true } }}
        sx={{
          fontFamily: "Poppins, Sans-serif",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.7)",
          marginBottom: "0 1rem 1rem",
          padding: "0 1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "90%",
              flexShrink: 0,
              fontSize: "1.15rem",
              fontWeight: "600",
              color: "black",
            }}
          >
            How long are the courses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The total course duration is 25 hrs.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        slotProps={{ transition: { timeout: 800, unmountOnExit: true } }}
        sx={{
          fontFamily: "Poppins, Sans-serif",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.7)",
          marginBottom: "0 1rem 1rem",
          padding: "0 1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "90%",
              flexShrink: 0,
              fontSize: "1.15rem",
              fontWeight: "600",
              color: "black;",
            }}
          >
            Can I learn at my own pace?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes, we offer self-paced learning options.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        slotProps={{ transition: { timeout: 800, unmountOnExit: true } }}
        sx={{
          fontFamily: "Poppins, Sans-serif",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.7)",
          marginBottom: "0 1rem 1rem",
          padding: "0 1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: "90%",
              flexShrink: 0,
              fontSize: "1.15rem",
              fontWeight: "600",
              color: "black",
            }}
          >
            Do I need prior knowledge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, our courses cater to all levels, including beginners.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        slotProps={{ transition: { timeout: 800, unmountOnExit: true } }}
        sx={{
          fontFamily: "Poppins, Sans-serif",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.7)",
          marginBottom: "0 1rem 1rem",
          padding: "0 1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: "90%",
              flexShrink: 0,
              fontSize: "1.15rem",
              fontWeight: "600",
              color: "black",
            }}
          >
            What age groups are the courses for?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our courses are for all age groups, from kids to adults.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        slotProps={{ transition: { timeout: 800, unmountOnExit: true } }}
        sx={{
          fontFamily: "Poppins, Sans-serif",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.7)",
          marginBottom: "0 1rem 1rem",
          padding: "0 1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "90%",
              flexShrink: 0,
              fontSize: "1.15rem",
              fontWeight: "600",
              color: "black",
            }}
          >
            Do I need any special software?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can access our course on Qurocity app, available on google
            playstore.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
