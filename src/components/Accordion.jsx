import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            When is the best age to start learning foreign languages?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As is the case with any other language, a person’s age has an effect
            on their ability to learn new ones. But that only means anyone can
            learn – no matter how old or young they are. Kids and young adults
            learn faster since they can easier pick up new accents and
            comprehend new sounds. Adults learn smarter as their attention spans
            are longer.
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            Why are online platforms the best medium for learning foreign
            languages?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The world has gone remote since 2020. Even if the pandemic hadn’t
            struck, it would have been a matter of time before the learning
            journeys went the digital route. Because let’s face it – the future
            of language learning is going to be increasingly contactless. People
            have lesser time than before to master it. Hence, they rely on
            platforms like Curiotory to pursue travel and career opportunities
            from the comfort of their own homes.
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            But why can’t I just learn foreign languages by myself?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is possible to learn a little from various sources around you.
            For example, you may catch up on some phrases from songs you
            listened to or through something someone said during a TV show. To
            gain fluency in the language, however, you would need to gain a
            strong understanding of grammar along with general, linguistic, and
            pragmatic competencies. Doing that by yourself Is ten times as hard
            and would be just as long. By the end of it, there are no proper
            evaluation methods to assess where you truly stand.
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            Does Curiotory cover critical language skills?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We make sure that you can write, read, listen, and speak the
            language at the end of the course. We offer various proficiency
            levels in each language, but we cover grammar, vocabulary,
            conversational skills, etc.
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            How does Curiotory select language teachers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We follow a thorough verification process before onboarding
            teachers, and we have an uncompromising stance on only working with
            native language specialists.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            What would be my tech needs to attend online classes at Curiotory?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You require a laptop, tablet or mobile phone with a WIFI connection,
            along with a web camera, a microphone, and a speaker.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            What is the most effective way to attend a session?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have found that a laptop or a desktop computer facilitates the
            smoothest learning experience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            Do you issue a certificate at the end of the course?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, all our students who complete the course get issued an
            accredited certificate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
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
              fontWeight: "700",
              color: "#2F327D;",
            }}
          >
            What is the easiest way to contact Curiotory?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Email: support@curiotory.com
            <br />
            9373902340
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
