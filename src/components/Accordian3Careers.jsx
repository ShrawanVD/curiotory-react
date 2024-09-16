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
            What is the job of a language interpreter?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            The job of a language interpreter is to facilitate communication
            between people who speak different languages. Interpreters convey
            spoken or signed messages from one language to another in various
            settings, such as conferences, meetings, courtrooms, medical
            appointments, and more.
          </Typography>
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
            What are the qualifications for an interpreter job?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A translator's qualifications typically include fluency in at least
            two languages, strong listening and memory retention skills,
            cultural understanding, and a bachelor's degree in languages,
            linguistics, or a related field. Having a degree from a recognized
            institution and previous experience in interpreting or translating
            can enhance prospects.
          </Typography>
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
            Is language interpreter/translator a good career?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Being a language interpreter or translator can be a fulfilling and
            rewarding career for those who are passionate about languages and
            cultural exchange. It offers opportunities to work in various
            settings, such as government agencies, healthcare facilities,
            international organizations, and corporate environments. The demand
            for interpreters and translators is growing globally, driven by
            globalization and increasing multicultural interactions.
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
            Is language Interpreter a well paid job?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            language interpreting can be a well-paying job, especially for
            interpreters with specialized skills in high-demand languages or
            industries such as health care, law, or conference interpreting.
            Experienced interpreters often command higher rates, and those
            employed by government agencies or large organizations may receive
            competitive salaries and benefits. In addition, freelancers have the
            flexibility to set their own prices and deal with multiple clients,
            which can increase their earning potential.
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
            How to make six figures as an Interpreter?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To earn six figures as an interpreter, focus on specializing in
            high-demand fields, such as legal, medical, or conference
            interpreting. Earn relevant certifications to improve credibility
            and qualify for higher paying opportunities. Build a strong
            portfolio of experience and establish a reputation for reliability
            and accuracy. Establish active contacts within the industry to
            connect with potential clients and agencies offering lucrative
            contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
