import styles from "./Jobdetails.module.css";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Navv from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
import { Hail } from "@mui/icons-material";

const openings = [
  {
    id: 1,
    metaTitle: "Apply For French Interpreter jobs At Curiotory - Hiring Now",
    metaDesc:
      "Apply for French language interpreter jobs online for remote and hybrid models. Join our dynamic team at Curiotory and soar new heights in your career! Hiring Now!",
    metaKey:
      "french language interpreter, french language interpreter jobs, french translator jobs, french interpreter jobs in India, french interpretation jobs remote, French interpreter jobs work from home",
    title: "French Language Interpreter",
    language: "French",
    startDate: "Immediately",
    salary: "10 LPA",
    about:
      "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
    // skills: [
    //   "Effective Communication",
    //   "English Proficiency (Spoken)",
    //   "MS-Excel",
    //   "MS-PowerPoint",
    //   "MS-Word",
    //   "Operations",
    //   "Sales",
    // ],
    responsibilities: [
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months.",
    ],
    process: [
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round",
    ],
    requirements: [
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment.",
    ],
    training: [
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment.",
    ],
    additionalInfo: [
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 2,
    metaTitle: "Remote Nepali Language Interpreter Jobs In India ",
    metaDesc:
      "Curiotory is hiring Nepali Interpreters pan India, Come and build your career with us and experience a cultural and dynamic working environment. Apply Now!",
    metaKey:
      "Nepali language interpreter jobs, Nepali interpreter jobs, Nepali language translator jobs, remote Nepali language interpreter job, Nepali interpreter jobs from home, Nepali language jobs",
    title: "Nepali Language Interpreter",
    language: "Nepali",
    startDate: "Immediately",
    salary: "4.2 LPA",
    about:
      "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
    // skills: [
    //   "Effective Communication",
    //   "English Proficiency (Spoken)",
    //   "MS-Excel",
    //   "MS-PowerPoint",
    //   "MS-Word",
    //   "Operations",
    //   "Sales",
    // ],
    responsibilities: [
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months.",
    ],
    process: [
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round",
    ],
    requirements: [
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment.",
    ],
    training: [
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment.",
    ],
    additionalInfo: [
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 3,
    metaTitle: "Tamil Language Interpreter Jobs Available, Apply Now",
    metaDesc:
      "Are you a skilled Tamil Interpreter looking for better Tamil Interpreter job opportunities? Then Curiotory is the place for you. Join our team and upskill your career now!",
    metaKey:
      "Tamil Language Interpreter jobs, Tamil linguistic jobs, Tamil interpreter jobs, Tamil Language Translator jobs, Tamil translator jobs work from home, Tamil translator jobs online",
    title: "Tamil Language Interpreter",
    language: "Tamil",
    startDate: "Immediately",
    salary: "4.2 LPA",
    about:
      "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
    // skills: [
    //   "Effective Communication",
    //   "English Proficiency (Spoken)",
    //   "MS-Excel",
    //   "MS-PowerPoint",
    //   "MS-Word",
    //   "Operations",
    //   "Sales",
    // ],
    responsibilities: [
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months.",
    ],
    process: [
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round",
    ],
    requirements: [
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment.",
    ],
    training: [
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment.",
    ],
    additionalInfo: [
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 4,
    metaTitle: "Hindi Interpreter Job Positions Open, Hiring Now For Curiotory",
    metaDesc:
      "Ready To Elevate Your Career? Apply for Remote Hindi Language Interpreter Jobs and explore rewarding opportunities in your career path with Curiotory. Apply Now!",
    metaKey:
      "Hindi Language Interpreter jobs, Hindi Interpreter jobs, Hindi Interpreter jobs from home, Hindi Interpreter jobs work from home, Hindi Interpreter jobs, Hindi Interpreter jobs remote",
    title: "Hindi Language Interpreter",
    language: "Hindi",
    startDate: "Immediately",
    salary: "4.2 LPA",
    about:
      "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
    // skills: [
    //   "Effective Communication",
    //   "English Proficiency (Spoken)",
    //   "MS-Excel",
    //   "MS-PowerPoint",
    //   "MS-Word",
    //   "Operations",
    //   "Sales",
    // ],
    responsibilities: [
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months.",
    ],
    process: [
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round",
    ],
    requirements: [
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment.",
    ],
    training: [
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment.",
    ],
    additionalInfo: [
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 5,
    metaTitle: "Bengali Language Interpreter Job Opportunities At Curiotory",
    metaDesc:
      "Bengali Interpreter Job Openings at Curiotory. Join the most versatile language interpreting platform and build a valuable and rewarding career with us. Apply Now!",
    metaKey:
      "Bengali Language Interpreter jobs, Bengali Interpreter jobs, Bengali Interpreter jobs remote, Bengali Interpreter jobs work from home, remote Bengali Interpreter jobs work from home",
    title: "Bengali Language Interpreter",
    language: "Bengali",
    startDate: "Immediately",
    salary: "4.2 LPA",
    about:
      "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
    // skills: [
    //   "Effective Communication",
    //   "English Proficiency (Spoken)",
    //   "MS-Excel",
    //   "MS-PowerPoint",
    //   "MS-Word",
    //   "Operations",
    //   "Sales",
    // ],
    responsibilities: [
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months.",
    ],
    process: [
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round",
    ],
    requirements: [
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment.",
    ],
    training: [
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment.",
    ],
    additionalInfo: [
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 6,
    metaTitle:
      "Curiotory is Hiring Urdu Language Interpreters: Remote & Onsite ",
    metaDesc:
      "Curiotory seeks passionate Urdu language interpreters: remote and onsite Urdu interpreter jobs available. Join our team and apply your skills in diverse settings today!",
    metaKey:
      "Urdu Interpreter jobs , Urdu Language Interpreter jobs, Urdu Language translator, Urdu Language translator jobs from home, Urdu interpreter jobs remote, Urdu interpreter job vacancy",
    title: "Urdu Language Interpreter",
    language: "Urdu",
    startDate: "Immediately",
    salary: "4.2 LPA",
    about:
      "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
    // skills: [
    //   "Effective Communication",
    //   "English Proficiency (Spoken)",
    //   "MS-Excel",
    //   "MS-PowerPoint",
    //   "MS-Word",
    //   "Operations",
    //   "Sales",
    // ],
    responsibilities: [
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months.",
    ],
    process: [
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round",
    ],
    requirements: [
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment.",
    ],
    training: [
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment.",
    ],
    additionalInfo: [
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 7,
    title: "Inside Sales Executive ",
    location: "Marathahalli, Bangalore",
    language: "Proficiency in English and Hindi",
    startDate: "Immediately",
    salary: "25k CTC, 21k take home",
    worksch: " 6 days a week with rotational off days (7 AM to 9 PM)", 
    qualification: "Graduation",
    Experience: "Minimum 1 year in sales or a similar role",
    responsibilities: [
      "Contact potential and existing customers to inform them about our products and services using scripts",
      "Answer questions about products or the company",
      "Ask questions to understand customer requirements and close sales",
      "Direct prospects to the field sales team when needed",
      "Enter and update customer information in the database",
      "Handle grievances to preserve the company’s reputation",
      "Go the “extra mile” to meet sales quota and facilitate future sales",
      "Keep records of calls and sales and note useful information",
    ],
    requirements: [
      "Proven experience as an Inside Sales Executive or similar role",
      "Excellent communication and interpersonal skills",
      "Outstanding negotiation skills with the ability to resolve issues and address complaints",
      "Familiarity with CRM tools and practices",
      "Strong organizational and time management skills",
      "Goal-oriented and self-motivated",
    ],
    Benefits: [
      "Competitive salary package",
      "Professional development and growth opportunities",
      "Supportive and collaborative work environment",
      "Comprehensive training and ongoing support",
    ],
  },
  {
    id: 8,
    title: "Back Office Executives",
    location: "Marathahalli, Bangalore",
    language: "Proficiency in English and Hindi",
    startDate: "Immediately",
    salary: "Experienced: 25k CTC, 21k in hand, Freshers: 23k CTC, 18k in hand ",
    worksch: "6 days a week with rotational off days (10 AM to 7 PM)", //
    qualification: "Graduate / Undergraduate",//
    Experience: "Freshers and Experienced candidates are welcome",//
    about:
      "We are looking for enthusiastic and dedicated Back Office Executives to join our team in Marathahalli, Bangalore. Whether you're a fresher or an experienced professional, we welcome your application. Proficiency in English and Hindi is required. Enjoy competitive salary packages and a supportive work environment. Apply now to be a part of our growing team!",
    responsibilities: [
      "Contact potential and existing customers to inform them about our products and services using scripts",
      "Answer questions about products or the company",
      "Ask questions to understand customer requirements and close sales",
      "Direct prospects to the field sales team when needed",
      "Enter and update customer information in the database",
      "Handle grievances to preserve the company’s reputation",
      "Go the “extra mile” to meet sales quota and facilitate future sales",
      "Keep records of calls and sales and note useful information",
    ],
    requirements: [
      "Proven experience as an Inside Sales Executive or similar role",
      "Excellent communication and interpersonal skills",
      "Outstanding negotiation skills with the ability to resolve issues and address complaints",
      "Familiarity with CRM tools and practices",
      "Strong organizational and time management skills",
      "Goal-oriented and self-motivated",
    ],
    Benefits: [
      "Competitive salary package",
      "Professional development and growth opportunities",
      "Supportive and collaborative work environment",
      "Comprehensive training and ongoing support",
    ],
  },
  {
    id: 9,
    title: "Customer Support Executive",
    location: "Koramangala, Bangalore",
    language: "Proficiency in English and Kannada",
    startDate: "Immediately",
    salary: "25k CTC, 21k  in hand ",
    worksch: "6 days a week with rotational off days ", //
    qualification: "Graduate / Undergraduate",//
    Experience: "Freshers and Experienced candidates are welcome (only for male candidate)",//
    about:
      "We are looking for enthusiastic and dedicated Back Office Executives to join our team in Marathahalli, Bangalore. Whether you're a fresher or an experienced professional, we welcome your application. Proficiency in English and Hindi is required. Enjoy competitive salary packages and a supportive work environment. Apply now to be a part of our growing team!",
    responsibilities: [
      "Handle customer inquiries and provide appropriate solutions",
      "Manage customer complaints and provide timely resolutions",
      "Maintain detailed and accurate records of customer interactions",
      "Collaborate with internal teams to ensure customer satisfaction",
      "Follow communication procedures, guidelines, and policies",
    ],
    requirements: [
      "Strong communication and interpersonal skills",
      "Ability to multitask and manage time effectively",
      "Problem-solving skills and attention to detail",
      "Basic computer proficiency",
    ],
    Benefits: [
      "Competitive salary package",
      "Opportunity to work in a dynamic and supportive environment",
      "Professional growth and development opportunities",
      "Comprehensive training and ongoing support",
    ],
    additionalInfo: [
      "This position operates on a 24/7 rotational shift basis",
      "6 days working week with rotational off days",
      "Only male candidates are eligible for this role",
    ],
  },
];

function Jobdetails() {
  const { id } = useParams();
  const jobId = parseInt(id, 10);
  const job = openings.find((opening) => opening.id === jobId);

  if (!job) {
    return <div>Job not found</div>;
  }
  return (
    <>
      {/* for meta tags  */}
      <Helmet>
        <title>{job.metaTitle}</title>
        <meta name="description" content={job.metaDesc} />
        <meta name="keywords" content={job.metaKey} />
      </Helmet>

      <Navv />
      <div className={styles.jobDetails}>
        <h1>{job.title}</h1>
        {job.language && (
        <div>
          <strong>Language:</strong> {job.language}
        </div>
      )}
        {/* <div>
          <strong>Language:</strong> {job.language}
        </div> */}
        {/* <h2>About the Internship</h2>
        <p>{job.about}</p> */}
        {/* <h2>Skills Required</h2>
        <ul>
          {job.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul> */}
        {/* <h2>Who Can Apply</h2>
        <p>{job.whoCanApply}</p> */}
         {job.startDate && (
        <div>
          <strong>Start Date:</strong> {job.startDate}
        </div>
      )}
       {job.location && (
        <div>
          <strong>Location:</strong> {job.location}
        </div>
      )}
      {job.salary && (
        <div>
          <strong>Salary:</strong> {job.salary}
        </div>
      )}
      {job.worksch && (
        <div>
          <strong>Work Schedule:</strong> {job.worksch}
        </div>
      )}
      {job.qualification && (
        <div>
          <strong>Qualification:</strong> {job.qualification}
        </div>
      )}
      {job.Experience && (
        <div>
          <strong>Experience:</strong> {job.Experience}
        </div>
      )}
      <hr />
      {job.responsibilities && job.responsibilities.length > 0 && (
        <>
          <h2>Job responsibilities: </h2>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </>
      )}
      {job.process && job.process.length > 0 && (
        <>
          <h2>Selection process: </h2>
          <ul>
            {job.process.map((process, index) => (
              <li key={index}>{process}</li>
            ))}
          </ul>
        </>
      )}
      {job.requirements && job.requirements.length > 0 && (
        <>
          <h2>Requirements: </h2>
          <ul>
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </>
      )}
      {job.training && job.training.length > 0 && (
        <>
          <h2>Training and certification: </h2>
          <ul>
            {job.training.map((training, index) => (
              <li key={index}>{training}</li>
            ))}
          </ul>
        </>
      )}
      {job.additionalInfo && job.additionalInfo.length > 0 && (
        <>
          <h2>Additional Information: </h2>
          <ul>
            {job.additionalInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </>
      )}
            {job.Benefits && job.Benefits.length > 0 && (
        <>
          <h2>Benefits: </h2>
          <ul>
            {job.Benefits.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </>
      )}
        <div className={styles.applyButtonContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN"
          >
            <button className={styles.applyButton}>Apply Now</button>
          </a>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Jobdetails;