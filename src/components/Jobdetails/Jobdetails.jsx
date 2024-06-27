import styles from "./Jobdetails.module.css";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Navv from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";

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
        <div>
          <strong>Language:</strong> {job.language}
        </div>
        <div>
          <strong>Start Date:</strong> {job.startDate}
        </div>
        <div>
          <strong>Salary:</strong> {job.salary}
        </div>
        <hr />
        {/* <h2>About the Internship</h2>
        <p>{job.about}</p> */}
        {/* <h2>Skills Required</h2>
        <ul>
          {job.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul> */}
        <h2>Job responsibilities: </h2>
        <ul>
          {job.responsibilities.map((responsibilities, index) => (
            <li key={index}>{responsibilities}</li>
          ))}
        </ul>
        <h2>Selection process: </h2>
        <ul>
          {job.process.map((process, index) => (
            <li key={index}>{process}</li>
          ))}
        </ul>
        <h2>Requirements: </h2>
        <ul>
          {job.requirements.map((requirements, index) => (
            <li key={index}>{requirements}</li>
          ))}
        </ul>
        <h2>Training and certification: </h2>
        <ul>
          {job.training.map((training, index) => (
            <li key={index}>{training}</li>
          ))}
        </ul>
        <h2>Additional Information:: </h2>
        <ul>
          {job.additionalInfo.map((additionalInfo, index) => (
            <li key={index}>{additionalInfo}</li>
          ))}
        </ul>
        {/* <h2>Who Can Apply</h2>
        <p>{job.whoCanApply}</p> */}
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
