import styles from "./Jobdetails.module.css";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Navv from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
import { Hail } from "@mui/icons-material";

const openings = [
  // {
  //   id: 1,
  //   title: "Digital Marketing Executive",
  //   location: "Hybrid/Remote",
  //   salary: "₹3.2 LPA",
  //   experience: "0-1 Year",
  //   availability: "Immediate Joiners Preferred",
  //   responsibilities: [
  //     "Proven work experience as a Digital Marketing Manager or similar role",
  //     "Demonstrable experience in developing and implementing successful digital marketing strategies",
  //     "Strong understanding of digital marketing channels, trends, and best practices",
  //     "Experience in website optimization, SEO, SEM, social media, and email marketing",
  //     "Proficiency in using digital marketing tools and analytics platforms",
  //     "Analytical mindset with the ability to track and measure marketing performance",
  //     "Strong project management and organizational skills",
  //     "Excellent communication and collaboration abilities"
  //   ],
  //   qualification: [
  //     "Graduate or undergraduate in Marketing, Business, or a related field.", 
  //     "Basic understanding of digital marketing, social media, and paid advertising.",
  //     "Familiarity with SEO, SEM, Google Ads, and Facebook Ads is a plus.",
  //     "Strong willingness to learn and adapt quickly.",
  //     "Ability to work independently and in a remote team environment."
  //   ],
  //   Benefits: [
  //     "Flexible working hours.",
  //     "Opportunity to gain hands-on experience in digital marketing.",
  //     "Supportive work environment with learning opportunities."
  //   ]
  // },
  // {
  //   id: 2,
  //   title: "HR Executive",
  //   location: "Pune",
  //   salary: "₹3.2 LPA",
  //   experience: "0-1 Year",
  //   availability: "Immediate Joiners Preferred",
  //   responsibilities: [
  //     "Assist in sourcing, screening, and shortlisting candidates for various roles.",
  //     "Schedule and coordinate interviews with potential candidates.",
  //     "Support the onboarding process for new hires, ensuring a smooth transition.",
  //     "Help address employee queries and concerns in a timely manner.",
  //     "Assist in organizing team-building activities and employee engagement programs.",
  //     "Maintain a positive work environment by supporting HR policies and practices.",
  //     "Maintain employee records and ensure they are up-to-date.",
  //     "Assist in payroll processing and ensure timely updates of employee data.",
  //     "Support in managing employee benefits, leave records, and attendance tracking.",
  //     "Help in coordinating performance appraisal processes.",
  //     "Support in collecting and compiling performance data.",
  //     "Assist in creating reports related to employee performance and development.",
  //     "Ensure that the company complies with all labor laws and HR regulations.",
  //     "Assist in managing employee documentation and ensuring adherence to company policies."
  //   ],
  //   qualification: [
  //     "Graduate or undergraduate in Human Resources, Business Administration, or a related field.",
  //     "Basic understanding of HR functions and best practices.",
  //     "Strong communication and interpersonal skills.",
  //     "Ability to work independently and as part of a team."
  //   ],
  //   Benefits: [
  //     "Opportunity to gain hands-on experience in HR management.",
  //     "Supportive work environment with career growth opportunities.",
  //     "Exposure to various HR processes and functions."
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Web Developer",
  //   location: "Pune",
  //   salary: "₹3.2 LPA",
  //   experience: "0-1 Year",
  //   education: "Graduate/Undergraduate",
  //   availability: "Immediate Joiners Preferred",
  //   responsibilities: [
  //     "Strong understanding of computer science fundamentals along with design patterns and data structures.",
  //     "Detailed experience with coding and the ability to troubleshoot and analyze web applications using React JS, Angular, JavaScript, HTML5, CSS and comparable languages.",
  //     "Knowledge of ReactJS will be a plus point.",
  //     "Continued education and research into UI development trends and current design strategy and technology.",
  //     "Professional written and interpersonal skills.",
  //     "Ability to prioritize and manage multiple milestones and projects efficiently.",
  //     "Advanced problem-solving skills and the ability to optimize code for the best possible outcome.",
  //     "Ability to work effectively in a collaborative environment to create top-performing interfaces.",
  //     "Any experience in backend technology like NodeJS, Java will be good to have.",
  //     "Hands-on coding activity will be conducted as part of the evaluation process.",
  //     "AdTech Domain knowledge is a big advantage."
  //   ],
  //   qualification: [
  //     "Graduate or undergraduate in Computer Science, Information Technology, or a related field.",
  //     "Basic understanding of programming languages and software development principles.",
  //     "Familiarity with software development tools and version control systems.",
  //     "Strong analytical and problem-solving skills.",
  //     "Ability to work independently and collaboratively within a team."
  //   ],
  //   benefits: [
  //     "Opportunity to work on diverse and challenging software projects.",
  //     "Supportive work environment with opportunities for career growth.",
  //     "Exposure to the latest tools and technologies in software development."
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Android Developer",
  //   location: "Pune",
  //   salary: "₹3.2 LPA",
  //   experience: "0-1 Year",
  //   education: "Graduate",
  //   availability: "Immediate Joiners Preferred",
  //   responsibilities: [
  //     "Experience in developing Android apps in Kotlin. Knowledge of Kotlin in depth including Kotlin coroutines.",
  //     "Experience in Java application development, with extensive use of Java I/O, Collections, Algorithms and well-known application frameworks.",
  //     "Knowledge of design patterns like MVC and MVVM.",
  //     "Android SDK toolchain and Android Studio IDE.",
  //     "Strong in Object oriented concepts.",
  //     "Knowledge of JNI and using Native development kit.",
  //     "Well-versed in developing rich GUIs for Android.",
  //     "Proficient in using UI Layout editor.",
  //     "Android component lifecycle, Intents and filters, collection views, adapters.",
  //     "Usage of common libraries like Gson, Dagger2, Retrofit, Volley, etc.",
  //     "Local data storage using Realm, Room for database, Live data.",
  //     "Localization support, payment gateway integration, analytics integration, deep linking.",
  //     "Integrating Google Supporting libraries (like Google Play services, Maps, etc.).",
  //     "Integrating services from Firebase and Google APIs.",
  //     "Complete knowledge of Git usage (including merge conflict resolution, pull requests)."
  //   ],
  //   qualification: [
  //     "Graduate or undergraduate in Computer Science, Information Technology, or a related field.",
  //     "Basic understanding of Android SDK, Java/Kotlin, and mobile app development.",
  //     "Familiarity with RESTful APIs and third-party libraries.",
  //     "Strong problem-solving skills and attention to detail.",
  //     "Ability to work independently and as part of a team."
  //   ],
  //   Benefits: [
  //     "Opportunity to work on exciting and challenging Android projects.",
  //     "Supportive work environment with career growth opportunities.",
  //     "Exposure to the latest tools and technologies in mobile app development."
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "Customer Support Executive (language: Malayalam)",
  //   location: "Bangalore",
  //   language: "Proficiency in Malayalam",
  //   startDate: "Immediately",
  //   salary: "3.2 CTC ",
  //   worksch: "6 days a week with rotational off days ", //
  //   qualification: "Graduate",//
  //   Experience: "Freshers and Experienced candidates are welcome (only for male candidate)",//
  //   responsibilities: [
  //     "Handle customer inquiries and provide appropriate solutions",
  //     "Manage customer complaints and provide timely resolutions",
  //     "Maintain detailed and accurate records of customer interactions",
  //     "Collaborate with internal teams to ensure customer satisfaction",
  //     "Follow communication procedures, guidelines, and policies",
  //   ],
  //   requirements: [
  //     "Strong communication and interpersonal skills",
  //     "Ability to multitask and manage time effectively",
  //     "Problem-solving skills and attention to detail",
  //     "Basic computer proficiency",
  //   ],
  //   Benefits: [
  //     "Competitive salary package",
  //     "Opportunity to work in a dynamic and supportive environment",
  //     "Professional growth and development opportunities",
  //     "Comprehensive training and ongoing support",
  //   ],
  //   additionalInfo: [
  //     "This position operates on a 24/7 rotational shift basis",
  //     "6 days working week with rotational off days",
  //     "Only male candidates are eligible for this role",
  //   ],
  // },
  // {
  //   id: 6,
  //   metaTitle: "Remote Nepali Language Interpreter Jobs In India ",
  //   metaDesc:
  //     "Qurocity is hiring Nepali Interpreters pan India, Come and build your career with us and experience a cultural and dynamic working environment. Apply Now!",
  //   metaKey:
  //     "Nepali language interpreter jobs, Nepali interpreter jobs, Nepali language translator jobs, remote Nepali language interpreter job, Nepali interpreter jobs from home, Nepali language jobs",
  //   title: "Nepali Language Interpreter",
  //   language: "Nepali",
  //   startDate: "Immediately",
  //   salary: "5.4 LPA",
  //   location: "Work From Home",
  //   about:
  //     "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
  //   // skills: [
  //   //   "Effective Communication",
  //   //   "English Proficiency (Spoken)",
  //   //   "MS-Excel",
  //   //   "MS-PowerPoint",
  //   //   "MS-Word",
  //   //   "Operations",
  //   //   "Sales",
  //   // ],
  //   responsibilities: [
  //     "Conduct voice and video calls with clients and customers in the specified languages.",
  //     "Collect the company-provided system from the Gurugram office.",
  //     "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
  //     "Use personal phones to take calls for the initial 4 to 5 months.",
  //   ],
  //   process: [
  //     "English AMCAT",
  //     "Language Proficiency Test",
  //     "HR Round",
  //     "Operational Round",
  //   ],
  //   requirements: [
  //     "Comfortable with voice and video calls.",
  //     "Ability to work in 24/7 rotational shifts.",
  //     "Willingness to use personal phone for calls during the initial period.",
  //     "Commitment to undergo training and pass the assessment.",
  //   ],
  //   training: [
  //     "5 to 6 weeks of comprehensive training provided by the company.",
  //     "Certification upon successful completion of training and assessment.",
  //   ],
  //   additionalInfo: [
  //     "Candidates will collect the company-provided system from the Gurugram office.",
  //   ],
  //   whoCanApply:
  //     "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  // },
  {
    id: 1,
    metaTitle: "English Jobs Available, Apply Now",
    metaDesc:
      "Are you a skilled English Teacher looking for better English Teacherr job opportunities? Then Qurocity is the place for you. Join our team and upskill your career now!",
    metaKey:
      "English Teacher",
    language: "English",
    startDate: "Immediately",
    salary: "5.4 LPA",
    location: "Remote",
    about:
      "We are seeking an enthusiastic and skilled Online English Teacher to join our team. The ideal candidate will possess a unique teaching style and the ability to teach both children and adults through online classes. This role requires a creative approach to lesson planning and the capability to provide customized study materials that cater to diverse learning needs.",
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
      "Conduct online English lessons for students of varying ages, including children and adults.",
      "Develop and implement engaging and interactive lesson plans tailored to students’ proficiency levels and learning styles.",
      "Create and provide high-quality study materials and resources to enhance the learning experience.",
      "Utilize innovative teaching methods to maintain student interest and motivation.",
      "Assess and monitor students’ progress through regular evaluations and feedback.",
      "Offer personalized support and guidance to help students achieve their language learning goals.",
      "Foster a positive and inclusive virtual classroom environment that encourages participation and growth.",
      "Adapt teaching strategies to meet the needs of individual students and address their specific challenges.",
      "Collaborate with the team to continuously improve teaching practices and contribute to curriculum development.",
    ],
    qualification: [
      "Bachelor’s degree in English, Education, or a related field (Master’s degree preferred).",
      "Teaching certification or relevant qualifications (e.g., TEFL/TESOL).",
      "Proven experience teaching English online to children and adults.",
      "Strong command of English language and grammar.",
      "Excellent communication skills and the ability to connect with students of all ages.",
      "Ability to create engaging and effective lesson plans and study materials.",
      "Proficiency in using online teaching platforms and digital tools.",
      "Creative and adaptable teaching style that caters to diverse learning needs.",
    ],
    Benefits: [
          "Competitive compensation based on experience and performance.",
          "Flexible remote work arrangement.",
          "Supportive and collaborative work environment.",
          "Access to a variety of teaching resources and tools.",
          "Opportunities for professional development and growth.",
        ],
  },
  {
    id: 2,
    metaTitle: "Tamil Language Interpreter Jobs Available, Apply Now",
    metaDesc:
      "Are you a skilled Tamil Interpreter looking for better Tamil Interpreter job opportunities? Then Qurocity is the place for you. Join our team and upskill your career now!",
    metaKey:
      "Tamil Language Interpreter jobs, Tamil linguistic jobs, Tamil interpreter jobs, Tamil Language Translator jobs, Tamil translator jobs work from home, Tamil translator jobs online",
    title: "Tamil Language Interpreter",
    language: "Tamil",
    startDate: "Immediately",
    salary: "4.2 LPA",
    location: "Work From Home",
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
    metaTitle: "Hindi Interpreter Job Positions Open, Hiring Now For Qurocity",
    metaDesc:
      "Ready To Elevate Your Career? Apply for Remote Hindi Language Interpreter Jobs and explore rewarding opportunities in your career path with Qurocity. Apply Now!",
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
  // {
  //   id: 9,
  //   metaTitle: "Bengali Language Interpreter Job Opportunities At Qurocity",
  //   metaDesc:
  //     "Bengali Interpreter Job Openings at Qurocity. Join the most versatile language interpreting platform and build a valuable and rewarding career with us. Apply Now!",
  //   metaKey:
  //     "Bengali Language Interpreter jobs, Bengali Interpreter jobs, Bengali Interpreter jobs remote, Bengali Interpreter jobs work from home, remote Bengali Interpreter jobs work from home",
  //   title: "Bengali Language Interpreter",
  //   language: "Bengali",
  //   startDate: "Immediately",
  //   salary: "4.2 LPA",
  //   about:
  //     "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
  //   // skills: [
  //   //   "Effective Communication",
  //   //   "English Proficiency (Spoken)",
  //   //   "MS-Excel",
  //   //   "MS-PowerPoint",
  //   //   "MS-Word",
  //   //   "Operations",
  //   //   "Sales",
  //   // ],
  //   responsibilities: [
  //     "Conduct voice and video calls with clients and customers in the specified languages.",
  //     "Collect the company-provided system from the Gurugram office.",
  //     "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
  //     "Use personal phones to take calls for the initial 4 to 5 months.",
  //   ],
  //   process: [
  //     "English AMCAT",
  //     "Language Proficiency Test",
  //     "HR Round",
  //     "Operational Round",
  //   ],
  //   requirements: [
  //     "Comfortable with voice and video calls.",
  //     "Ability to work in 24/7 rotational shifts.",
  //     "Willingness to use personal phone for calls during the initial period.",
  //     "Commitment to undergo training and pass the assessment.",
  //   ],
  //   training: [
  //     "5 to 6 weeks of comprehensive training provided by the company.",
  //     "Certification upon successful completion of training and assessment.",
  //   ],
  //   additionalInfo: [
  //     "Candidates will collect the company-provided system from the Gurugram office.",
  //   ],
  //   whoCanApply:
  //     "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  // },
  // {
  //   id: 10,
  //   metaTitle:
  //     "Qurocity is Hiring Urdu Language Interpreters: Remote & Onsite ",
  //   metaDesc:
  //     "Qurocity seeks passionate Urdu language interpreters: remote and onsite Urdu interpreter jobs available. Join our team and apply your skills in diverse settings today!",
  //   metaKey:
  //     "Urdu Interpreter jobs , Urdu Language Interpreter jobs, Urdu Language translator, Urdu Language translator jobs from home, Urdu interpreter jobs remote, Urdu interpreter job vacancy",
  //   title: "Urdu Language Interpreter",
  //   language: "Urdu",
  //   startDate: "Immediately",
  //   salary: "4.2 LPA",
  //   about:
  //     "Selected intern's day-to-day responsibilities include:\n1. Monitoring calls for the counselors\n2. Sharing feedback of the team and with the counselors\n3. Creating awareness and promoting a quality environment through huddles\n4. Analyzing the quality of the counseling process\n5. Conducting training sessions for the associates to improve their performance\n6. Participating in calibrations sessions",
  //   // skills: [
  //   //   "Effective Communication",
  //   //   "English Proficiency (Spoken)",
  //   //   "MS-Excel",
  //   //   "MS-PowerPoint",
  //   //   "MS-Word",
  //   //   "Operations",
  //   //   "Sales",
  //   // ],
  //   responsibilities: [
  //     "Conduct voice and video calls with clients and customers in the specified languages.",
  //     "Collect the company-provided system from the Gurugram office.",
  //     "Undergo 5 to 6 weeks of training. Post-training, clear an assessment to be certified and eligible for taking video calls.",
  //     "Use personal phones to take calls for the initial 4 to 5 months.",
  //   ],
  //   process: [
  //     "English AMCAT",
  //     "Language Proficiency Test",
  //     "HR Round",
  //     "Operational Round",
  //   ],
  //   requirements: [
  //     "Comfortable with voice and video calls.",
  //     "Ability to work in 24/7 rotational shifts.",
  //     "Willingness to use personal phone for calls during the initial period.",
  //     "Commitment to undergo training and pass the assessment.",
  //   ],
  //   training: [
  //     "5 to 6 weeks of comprehensive training provided by the company.",
  //     "Certification upon successful completion of training and assessment.",
  //   ],
  //   additionalInfo: [
  //     "Candidates will collect the company-provided system from the Gurugram office.",
  //   ],
  //   whoCanApply:
  //     "Only those candidates can apply who:\n1. are available for full time (in-office) internship\n2. can start the internship between 16th Jun'24 and 24th Jul'24\n3. are available for duration of 6 months\n4. have relevant skills and interests",
  // },
  {
    id: 4,
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
  // {
  //   id: 12,
  //   title: "Back Office Executives",
  //   location: "Marathahalli, Bangalore",
  //   language: "Proficiency in English and Hindi",
  //   startDate: "Immediately",
  //   salary: "Experienced: 25k CTC, 21k in hand, Freshers: 23k CTC, 18k in hand ",
  //   worksch: "6 days a week with rotational off days (10 AM to 7 PM)", //
  //   qualification: "Graduate / Undergraduate",//
  //   Experience: "Freshers and Experienced candidates are welcome",//
  //   about:
  //     "We are looking for enthusiastic and dedicated Back Office Executives to join our team in Marathahalli, Bangalore. Whether you're a fresher or an experienced professional, we welcome your application. Proficiency in English and Hindi is required. Enjoy competitive salary packages and a supportive work environment. Apply now to be a part of our growing team!",
  //   responsibilities: [
  //     "Contact potential and existing customers to inform them about our products and services using scripts",
  //     "Answer questions about products or the company",
  //     "Ask questions to understand customer requirements and close sales",
  //     "Direct prospects to the field sales team when needed",
  //     "Enter and update customer information in the database",
  //     "Handle grievances to preserve the company’s reputation",
  //     "Go the “extra mile” to meet sales quota and facilitate future sales",
  //     "Keep records of calls and sales and note useful information",
  //   ],
  //   requirements: [
  //     "Proven experience as an Inside Sales Executive or similar role",
  //     "Excellent communication and interpersonal skills",
  //     "Outstanding negotiation skills with the ability to resolve issues and address complaints",
  //     "Familiarity with CRM tools and practices",
  //     "Strong organizational and time management skills",
  //     "Goal-oriented and self-motivated",
  //   ],
  //   Benefits: [
  //     "Competitive salary package",
  //     "Professional development and growth opportunities",
  //     "Supportive and collaborative work environment",
  //     "Comprehensive training and ongoing support",
  //   ],
  // },
  // {
  //   id: 13,
  //   title: "Customer Support Executive",
  //   location: "Koramangala, Bangalore",
  //   language: "Proficiency in English and Kannada",
  //   startDate: "Immediately",
  //   salary: "25k CTC, 21k  in hand ",
  //   worksch: "6 days a week with rotational off days ", //
  //   qualification: "Graduate / Undergraduate",//
  //   Experience: "Freshers and Experienced candidates are welcome (only for male candidate)",//
  //   about:
  //     "We are looking for enthusiastic and dedicated Back Office Executives to join our team in Marathahalli, Bangalore. Whether you're a fresher or an experienced professional, we welcome your application. Proficiency in English and Hindi is required. Enjoy competitive salary packages and a supportive work environment. Apply now to be a part of our growing team!",
  //   responsibilities: [
  //     "Handle customer inquiries and provide appropriate solutions",
  //     "Manage customer complaints and provide timely resolutions",
  //     "Maintain detailed and accurate records of customer interactions",
  //     "Collaborate with internal teams to ensure customer satisfaction",
  //     "Follow communication procedures, guidelines, and policies",
  //   ],
  //   requirements: [
  //     "Strong communication and interpersonal skills",
  //     "Ability to multitask and manage time effectively",
  //     "Problem-solving skills and attention to detail",
  //     "Basic computer proficiency",
  //   ],
  //   Benefits: [
  //     "Competitive salary package",
  //     "Opportunity to work in a dynamic and supportive environment",
  //     "Professional growth and development opportunities",
  //     "Comprehensive training and ongoing support",
  //   ],
  //   additionalInfo: [
  //     "This position operates on a 24/7 rotational shift basis",
  //     "6 days working week with rotational off days",
  //     "Only male candidates are eligible for this role",
  //   ],
  // },
  {
    id: 5,
    metaTitle: "Apply For French Interpreter jobs At Qurocity - Hiring Now",
    metaDesc:
      "Apply for French language interpreter jobs online for remote and hybrid models. Join our dynamic team at Qurocity and soar new heights in your career! Hiring Now!",
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
    {/* Google Tag Manager (noscript) */}
    <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDFXMX24"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* for meta tags  */}
      <Helmet>
        <title>{job.metaTitle}</title>
        <meta name="description" content={job.metaDesc} />
        <meta name="keywords" content={job.metaKey} />
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
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
       
      {job.salary && (
        <div>
          <strong>Salary:</strong> {job.salary}
        </div>
      )}
      {job.location && (
        <div>
          <strong>Location:</strong> {job.location}
        </div>
      )}
      {job.worksch && (
        <div>
          <strong>Work Schedule:</strong> {job.worksch}
        </div>
      )}
      {job.qualification && job.qualification.length > 0 && (
        <div>
          <h2>Qualification: </h2>
          <ul>
            {job.qualification.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
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
            href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
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