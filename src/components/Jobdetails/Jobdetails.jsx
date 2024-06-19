import styles from "./Jobdetails.module.css";
import { useParams } from "react-router-dom";
import Navv from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
const openings = [
  {
    id: 1,
    title: "Quality Analyst (Sales) Internship",
    company: "Internshala Trainings",
    location: "Gurgaon",
    startDate: "Immediately",
    duration: "6 Months",
    stipend: "₹ 18,000/month",
    applyBy: "19 Apr 24",
    about:
      "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
    skills: [
      "Effective Communication",
      "English Proficiency (Spoken)",
      "MS-Excel",
      "MS-PowerPoint",
      "MS-Word",
      "Operations",
      "Sales",
    ],
    whoCanApply:
      "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
    aboutCompany:
      "Internshala's mission is to equip every student with practical skills and exposure so that they can build their dream careers. Our e-learning platform, Internshala Trainings (https://trainings.internshala.com) is central to this mission.",
  },
  // Add more jobs here if needed
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
          <strong>Company:</strong> {job.company}
        </div>
        <div>
          <strong>Location:</strong> {job.location}
        </div>
        <div>
          <strong>Start Date:</strong> {job.startDate}
        </div>
        <div>
          <strong>Duration:</strong> {job.duration}
        </div>
        <div>
          <strong>Stipend:</strong> {job.stipend}
        </div>
        <div>
          <strong>Apply By:</strong> {job.applyBy}
        </div>
        <hr />
        <h2>About the Internship</h2>
        <p>{job.about}</p>
        <h2>Skills Required</h2>
        <ul>
          {job.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h2>Who Can Apply</h2>
        <p>{job.whoCanApply}</p>
        <h2>About the Company</h2>
        <p>{job.aboutCompany}</p>
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
