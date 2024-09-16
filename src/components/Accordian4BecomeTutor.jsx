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
            How to become a language tutor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Becoming a language tutor starts with knowing the language you want
            to teach and thoroughly understanding its grammar, vocabulary and
            customs. You can improve your qualifications by gaining teaching
            skills through qualifications such as TESOL or TEFL, and gain work
            experience through free tutoring or volunteering. Curriculum design
            that meets a variety of ability levels is essential to effective
            teaching. Self-marketing on platforms like iTalki, Verbling or
            Wyzant can help students. It is important to meet legal requirements
            and determine your payment structure. You can become an effective
            language teacher if you offer high-quality, varied and reputable
            classes through assessment.
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
            How to make money as a language tutor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To make money as a language tutor, start by creating a profile on
            tutoring platforms like iTalki or Verbling. Set competitive rates
            based on your expertise and the market demand. Use social media and
            networking to promote your services and attract students. Offer
            specialized courses and resources like e-books or online courses to
            diversify your income. Provide high-quality lessons and excellent
            customer service to build a positive reputation and encourage
            referrals, which can help you increase your earnings over time.
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
            How to become a tutor online and get paid?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To become an online tutor and get paid, follow these steps: Define
            Your Payscale: Determine your hourly rate based on your expertise
            and market rates. Market Yourself: Promote your services on social
            media, educational forums, and through word-of-mouth to attract
            students. Deliver Quality Sessions: Provide engaging and informative
            lessons tailored to your students' needs to build positive reviews
            and retain clients.
            <ul
              style={{
                listStyleType: "circle",
              }}
            >
              <li>
                <strong>Choose Your Subject</strong>: Select a subject or skill
                you're knowledgeable and passionate about.
              </li>
              <li>
                <strong>Create a Profile</strong>: Sign up on language learning
                platforms Qurocity, like Tutor.com, Chegg Tutors, or Wyzant.
                Complete your profile with your qualifications and teaching
                experience.
              </li>
              <li>
                <strong>Define Your Payscale</strong>: Determine your hourly
                rate based on your expertise and market rates.
              </li>
              <li>
                <strong>Market Yourself</strong>: Promote your services on
                social media, educational forums, and through word-of-mouth to
                attract students.
              </li>
              <li>
                <strong>Deliver Quality Sessions</strong>: Provide engaging and
                informative lessons tailored to your students' needs to build
                positive reviews and retain clients.
              </li>
            </ul>
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
            Why choose Qurocity for becoming a language tutor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Qurocity is India's thriving Edu-Tech network which helps you
            supercharge your career growth. <br />
            With Qurocity - The ultimate language learning platform by your side
            you will be able to -
            <ul
              style={{
                listStyleType: "circle",
              }}
            >
              <li>
                Earn competitive income by tutoring students conveniently from
                home or online.
              </li>
              <li>
                Customize your teaching approach to provide engaging and
                impactful lessons.
              </li>
              <li>
                Foster a love for learning by inspiring students to explore new
                skills and achieve their goals.
              </li>
              <li>
                Enjoy the flexibility to set your own schedule and balance work
                with personal commitments.
              </li>
              <li>Why worry? When you have Qurocity!</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
