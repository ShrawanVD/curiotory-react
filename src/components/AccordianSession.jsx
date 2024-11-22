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
            What are Qurocity’s personalized one-on-one sessions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Qurocity’s personalized one-on-one sessions are tailored language
            learning lessons that cater to your individual needs. Whether you’re
            aiming to improve your grammar, enhance your speaking skills, or
            prepare for exams, our expert instructors work with you to create a
            customized learning plan that matches your goals and pace.
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
            How do I choose my tutor at Qurocity?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At Qurocity, you have the freedom to choose your own tutor. We
            understand that everyone has a unique learning style, so we give you
            the option to select a teacher whose teaching methods best suit you.
            You can browse through the profiles of qualified tutors and pick the
            one who aligns with your learning preferences.
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
            What language courses does Qurocity offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Qurocity offers a variety of language courses, including German,
            Mandarin, English, and many other foreign languages. Whether you’re
            learning for travel, career, or exams, we’ve got a course that fits
            your needs.
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
            Can I schedule classes according to my availability?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! At Qurocity, we understand that everyone has different
            schedules. You can book your sessions at times that are convenient
            for you, providing maximum flexibility in your learning journey.
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
            How does Qurocity track my progress?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Qurocity tracks your learning progress through a performance
            tracking system. You’ll receive real-time feedback on your
            performance, and your progress will be monitored using weekly tests
            and quarterly assessments. This ensures that we identify your weak
            areas and work on strengthening them.
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
            What types of assessments are included in the curriculum?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our personalized curriculum includes weekly tests and quarterly
            assessments that help track your progress and pinpoint areas where
            improvement is needed. These regular evaluations ensure that you
            stay on track and continue to improve steadily.
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
            How long are the one-on-one sessions at Qurocity?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Each session lasts for 50 to 70 hours depending on the language and
            your specific learning goals. This flexible duration allows for
            thorough learning and mastery of the language.
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
            Can I learn more than one language at the same time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! While it's most effective to focus on one language at a time,
            Qurocity offers the flexibility to learn multiple languages.
            However, we recommend consulting with your tutor to create a
            personalized plan that ensures you can manage the workload for each
            language effectively.
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
            Are the one-on-one sessions available for all levels (beginner to
            advanced)?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! Qurocity’s personalized one-on-one sessions cater to
            learners of all levels, from beginner to advanced. Whether you’re
            just starting out or looking to refine your skills, we’ll customize
            the lessons to suit your proficiency level.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
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
            How can I prepare for language exams using Qurocity?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Qurocity provides specialized language exam preparation courses that
            include practice papers, quizzes, and mock tests. Our tutors help
            you identify weak areas and focus on improving them, ensuring you
            feel fully prepared for your exam day.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
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
            What makes Qurocity different from other language learning
            platforms?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unlike other language learning platforms, Qurocity offers a highly
            personalized experience. You can choose your tutor, tailor your
            lessons to meet specific goals, and track your progress through
            real-time feedback and assessments. Our platform focuses on
            real-time language practice, including fluency and pronunciation,
            with regular performance tracking to ensure continual improvement.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
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
            How do I sign up for a session with Qurocity?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Getting started with Qurocity is simple! First, sign up on our
            platform, select the language you want to learn, and choose a tutor
            based on your preferences and goals. Afterward, you can schedule
            your first session at a time that works best for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
