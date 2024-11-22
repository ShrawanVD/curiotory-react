// import React, { useState, useEffect } from 'react';
// import video from './CurriculumSection.module.css'; // Import the CSS module

// const CurriculumSection = () => {
//   // State to track the active content, with the first element selected by default
//   const [activeIndex, setActiveIndex] = useState(0);

//   // The headings and their corresponding content
//   const curriculumItems = [
//     {
//       title: 'Focus on all 4 aspects of language: Reading, Writing, Listening & Speaking',
//       content: 'Master all core language skills to become a well-rounded communicator. Our sessions are designed to strengthen your ability to read, write, listen, and speak effectively, ensuring you gain comprehensive fluency.'
//     },
//     {
//       title: 'Preparation as per your needs and goals',
//       content: 'Learning tailored to you! Whether it\'s acing an exam, securing a job abroad, or learning for personal interest, the curriculum is designed to match your specific objectives and pace.'
//     },
//     {
//       title: 'Exam preparation with multiple paper solving, quiz, and tests',
//       content: 'Get exam-ready with ample practice! Solve mock tests, quizzes, and past papers to familiarize yourself with exam patterns and gain the confidence to excel.'
//     },
//     {
//       title: 'Weekly and quarterly tests',
//       content: 'Regular assessments ensure you’re on track. These tests provide structured feedback, helping you identify areas to improve and monitor steady progress.'
//     },
//     {
//       title: 'Performance tracking and real-time feedback',
//       content: 'Track your success with detailed analytics. Real-time feedback helps you refine your skills immediately, making your learning process more efficient and effective.'
//     },
//     {
//       title: 'On-time doubt solving',
//       content: 'Never let questions hold you back! Tutors address your doubts promptly, ensuring uninterrupted learning and clarity in every session.'
//     },
//     {
//       title: 'Real-time classes for fluency and pronunciation',
//       content: 'Improve your speaking skills with live practice sessions. Gain confidence in your fluency and perfect your pronunciation through interactive, tutor-led real-time classes.'
//     },
//     {
//       title: 'Sessions duration up to 50-70 hours',
//       content: 'Comprehensive learning in flexible durations. These extended sessions provide ample time to dive deep into the language, ensuring complete mastery at your pace.'
//     }
//   ];

//   return (
//     <div className={video.curriculumContainer}>
//       <div className={video.curriculumSidebar}>
//         <ul>
//           {curriculumItems.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={activeIndex === index ? video.active : ''}
//             >
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={video.curriculumContent}>
//         <div className={video.curriculumContentBox}>
//           <p>{curriculumItems[activeIndex].content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CurriculumSection;

// import React, { useState } from 'react';
// import video from './CurriculumSection.module.css'; // Import the CSS module

// const CurriculumSection = () => {
//   // State to track the active content, with the first element selected by default
//   const [activeIndex, setActiveIndex] = useState(null); // Initially null for accordion-style behavior

//   // The headings and their corresponding content
//   const curriculumItems = [
//     {
//       title: 'Focus on all 4 aspects of language: Reading, Writing, Listening & Speaking',
//       content: 'Master all core language skills to become a well-rounded communicator. Our sessions are designed to strengthen your ability to read, write, listen, and speak effectively, ensuring you gain comprehensive fluency.'
//     },
//     {
//       title: 'Preparation as per your needs and goals',
//       content: 'Learning tailored to you! Whether it\'s acing an exam, securing a job abroad, or learning for personal interest, the curriculum is designed to match your specific objectives and pace.'
//     },
//     {
//       title: 'Exam preparation with multiple paper solving, quiz, and tests',
//       content: 'Get exam-ready with ample practice! Solve mock tests, quizzes, and past papers to familiarize yourself with exam patterns and gain the confidence to excel.'
//     },
//     {
//       title: 'Weekly and quarterly tests',
//       content: 'Regular assessments ensure you’re on track. These tests provide structured feedback, helping you identify areas to improve and monitor steady progress.'
//     },
//     {
//       title: 'Performance tracking and real-time feedback',
//       content: 'Track your success with detailed analytics. Real-time feedback helps you refine your skills immediately, making your learning process more efficient and effective.'
//     },
//     {
//       title: 'On-time doubt solving',
//       content: 'Never let questions hold you back! Tutors address your doubts promptly, ensuring uninterrupted learning and clarity in every session.'
//     },
//     {
//       title: 'Real-time classes for fluency and pronunciation',
//       content: 'Improve your speaking skills with live practice sessions. Gain confidence in your fluency and perfect your pronunciation through interactive, tutor-led real-time classes.'
//     },
//     {
//       title: 'Sessions duration up to 50-70 hours',
//       content: 'Comprehensive learning in flexible durations. These extended sessions provide ample time to dive deep into the language, ensuring complete mastery at your pace.'
//     }
//   ];

//   const handleClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index); // Toggle content visibility
//   };

//   return (
//     <div className={video.curriculumContainer}>
//       <div className={video.curriculumSidebar}>
//         <ul>
//           {curriculumItems.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => handleClick(index)}
//               className={activeIndex === index ? video.active : ''}
//             >
//               {item.title}
//               {/* Content will be shown in an accordion style below each list item on small screens */}
//               <div className={`${video.curriculumContentBox} ${activeIndex === index ? video.showContent : ''}`}>
//                 {activeIndex === index && <p>{item.content}</p>}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* For screens larger than 900px, content will be shown beside the sidebar */}
//       <div className={video.curriculumContent}>
//         {activeIndex !== null && (
//           <div className={video.curriculumContentBox}>
//             <p>{curriculumItems[activeIndex].content}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CurriculumSection;


import React, { useState } from 'react';
import video from './CurriculumSection.module.css'; // Import the CSS module

const CurriculumSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active item

  const curriculumItems = [
    {
      title: 'Focus on all 4 aspects of language: Reading, Writing, Listening & Speaking',
      content: 'Master all core language skills to become a well-rounded communicator. Our sessions are designed to strengthen your ability to read, write, listen, and speak effectively, ensuring you gain comprehensive fluency.',
    },
    {
      title: 'Preparation as per your needs and goals',
      content: 'Learning tailored to you! Whether it\'s acing an exam, securing a job abroad, or learning for personal interest, the curriculum is designed to match your specific objectives and pace.',
    },
    {
      title: 'Exam preparation with multiple paper solving, quiz, and tests',
      content: 'Get exam-ready with ample practice! Solve mock tests, quizzes, and past papers to familiarize yourself with exam patterns and gain the confidence to excel.',
    },
    {
      title: 'Weekly and quarterly tests',
      content: 'Regular assessments ensure you’re on track. These tests provide structured feedback, helping you identify areas to improve and monitor steady progress.',
    },
    {
      title: 'Performance tracking and real-time feedback',
      content: 'Track your success with detailed analytics. Real-time feedback helps you refine your skills immediately, making your learning process more efficient and effective.',
    },
    {
      title: 'On-time doubt solving',
      content: 'Never let questions hold you back! Tutors address your doubts promptly, ensuring uninterrupted learning and clarity in every session.',
    },
    {
      title: 'Real-time classes for fluency and pronunciation',
      content: 'Improve your speaking skills with live practice sessions. Gain confidence in your fluency and perfect your pronunciation through interactive, tutor-led real-time classes.',
    },
    {
      title: 'Sessions duration up to 50-70 hours',
      content: 'Comprehensive learning in flexible durations. These extended sessions provide ample time to dive deep into the language, ensuring complete mastery at your pace.',
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected content
  };

  return (
    <div className={video.curriculumContainer}>
      {/* Sidebar */}
      <div className={video.curriculumSidebar}>
        <ul>
          {curriculumItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={activeIndex === index ? video.active : ''}
            >
              {item.title}
              {/* Content below for screens <900px */}
              <div
                className={`${video.curriculumContentBoxSmallScreen} ${
                  activeIndex === index ? video.showContent : ''
                }`}
              >
                {activeIndex === index && <p>{item.content}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Content on the right for screens >900px */}
      <div className={video.curriculumContent}>
        {activeIndex !== null && (
          <div className={video.curriculumContentBoxLargeScreen}>
            <p>{curriculumItems[activeIndex].content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurriculumSection;
