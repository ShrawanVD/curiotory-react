import styles from "./Jobdetails.module.css";
import { useParams } from "react-router-dom";
import Navv from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
const openings = [
  {
    id: 1,
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
    responsibilities:[
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months."
    ],
    process:[
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round"
    ],
    requirements:[
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment."
    ],
    training:[
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment."
    ],
    additionalInfo:[
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 2,
    title: "Nepali Language Interpreter",
    language: "Nepali",
    startDate: "Immediately",
    salary: "4.5 LPA",
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
    responsibilities:[
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months."
    ],
    process:[
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round"
    ],
    requirements:[
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment."
    ],
    training:[
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment."
    ],
    additionalInfo:[
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 3,
    title: "Tamil Language Interpreter",
    language: "Tamil",
    startDate: "Immediately",
    salary: "4.5 LPA",
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
    responsibilities:[
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months."
    ],
    process:[
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round"
    ],
    requirements:[
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment."
    ],
    training:[
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment."
    ],
    additionalInfo:[
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  
  {
    id: 4,
    title: "Hindi Language Interpreter",
    language: "Hindi",
    startDate: "Immediately",
    salary: "4.5 LPA",
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
    responsibilities:[
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months."
    ],
    process:[
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round"
    ],
    requirements:[
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment."
    ],
    training:[
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment."
    ],
    additionalInfo:[
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 5,
    title: "Bengali Language Interpreter",
    language: "Bengali",
    startDate: "Immediately",
    salary: "4.5 LPA",
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
    responsibilities:[
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months."
    ],
    process:[
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round"
    ],
    requirements:[
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment."
    ],
    training:[
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment."
    ],
    additionalInfo:[
      "Candidates will collect the company-provided system from the Gurugram office.",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  },
  {
    id: 6,
    title: "Urdu Language Interpreter",
    language: "Urdu",
    startDate: "Immediately",
    salary: "4.5 LPA",
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
    responsibilities:[
      "Conduct voice and video calls with clients and customers in the specified languages.",
      "Collect the company-provided system from the Gurugram office.",
      "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
      "Use personal phones to take calls for the initial 4 to 5 months."
    ],
    process:[
      "English AMCAT",
      "Language Proficiency Test",
      "HR Round",
      "Operational Round"
    ],
    requirements:[
      "Comfortable with voice and video calls.",
      "Ability to work in 24/7 rotational shifts.",
      "Willingness to use personal phone for calls during the initial period.",
      "Commitment to undergo training and pass the assessment."
    ],
    training:[
      "5 to 6 weeks of comprehensive training provided by the company.",
      "Certification upon successful completion of training and assessment."
    ],
    additionalInfo:[
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
