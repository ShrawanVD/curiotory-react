// import singleblogcss from './Singleblog.module.css';
// import { useState, useEffect } from 'react';
// import Navv from '../../components/Navv/Navv';
// import Footer from '../../components/Footer/Footer';
// import { useSpeechSynthesis } from "react-speech-kit";

// function Singleblog() {
//   const [blog, setBlog] = useState(null);
//   const { speak, speaking, pause, resume, cancel } = useSpeechSynthesis();
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     // Function to fetch and set blog data based on the ID from URL
//     const fetchBlogData = async () => {
//       try {
//         // Retrieve blog ID from URL
//         const urlParams = new URLSearchParams(window.location.search);
//         const blogId = urlParams.get('id');

//         // Fetch blog data based on the ID
//         const response = await fetch(`https://backendapi-ay7s.onrender.com/api/blogs/${blogId}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const blogData = await response.json();
//         setBlog(blogData);
//       } catch (error) {
//         console.error('Error fetching blog data:', error.message);
//       }
//     };

//     // Call the fetchBlogData function when component mounts
//     fetchBlogData();

//     // Clean up function
//     return () => {
//       setBlog(null); // Reset blog data when component unmounts
//     };
//   }, []);

//   const handleSpeak = () => {
//     console.log("Working");
//     if (blog && blog.content) {
//       const text = blog.content.replace(/<[^>]+>/g, ''); // Remove HTML tags from content
//       speak({ text });
//       setIsPlaying(true);
//     }
//   }

//   const handlePauseResume = () => {
//     console.log("speaking:", speaking);
//     console.log("isPlaying:", isPlaying);
  
//     if (speaking && isPlaying) {
//       pause();
//       setIsPlaying(false);
//     } else {
//       if (!speaking && isPlaying) {
//         resume();
//         setIsPlaying(true);
//       } else {
//         handleSpeak(); // If speech is not started yet, start it
//       }
//     }
//   }
  
  

//   const handleStop = () => {
//     cancel();
//     setIsPlaying(false);
//   }

//   return (
//     <div>
//       <Navv />
//       <div>
//       <div className={singleblogcss.singleBlogContainer}>
//       {blog ? (
//         <div className={singleblogcss.blogCard}>
//           <h1>{blog.title}</h1>
//           <p className={singleblogcss.blogDate}>{blog.date}</p>
//           {isPlaying ? (
//                 <>
//                   <button onClick={handlePauseResume}>Pause</button>
//                   <button onClick={handleStop}>Stop</button>
//                 </>
//               ) : (
//                 <button onClick={handleSpeak}>Speak</button>
//               )}
//           <img src={blog.imageUrl} alt="Blog" />
//           <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//           {blog.imageUrl2 && <img src={blog.imageUrl2} alt="Second Blog" />}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Singleblog

import singleblogcss from './Singleblog.module.css';
import { useState, useEffect } from 'react';
import Navv from '../../components/Navv/Navv';
import Footer from '../../components/Footer/Footer';
import { useSpeechSynthesis } from "react-speech-kit";

function Singleblog() {
  const [blog, setBlog] = useState(null);
  const { speak, cancel } = useSpeechSynthesis();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Function to fetch and set blog data based on the ID from URL
    const fetchBlogData = async () => {
      try {
        // Retrieve blog ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');

        // Fetch blog data based on the ID
        const response = await fetch(`https://backendapi-3tnw.onrender.com/api/blogs/${blogId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blogData = await response.json();
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching blog data:', error.message);
      }
    };

    // Call the fetchBlogData function when component mounts
    fetchBlogData();

    // Clean up function
    return () => {
      setBlog(null); // Reset blog data when component unmounts
    };
  }, []);

  const handleSpeak = () => {
    console.log("Working");
    if (blog && blog.content) {
      const text = blog.content.replace(/<[^>]+>/g, ''); // Remove HTML tags from content
      speak({ text });
      setIsPlaying(true);
    }
  }

  const handleStop = () => {
    cancel();
    setIsPlaying(false);
  }

  return (
    <div>
      <Navv />
      <div>
      <div className={singleblogcss.singleBlogContainer}>
      {blog ? (
        <div className={singleblogcss.blogCard}>
          <h1>{blog.title}</h1>
          <p className={singleblogcss.blogDate}>{blog.date}</p>
          <img src={blog.imageUrl} alt="Blog" />
          <div className={singleblogcss.speakButton}>
          {isPlaying ? (
                <>
                  <button onClick={handleStop}>Stop</button>
                </>
              ) : (
                <button onClick={handleSpeak}>Read the blog</button>
              )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          {blog.imageUrl2 && <img src={blog.imageUrl2} alt="Second Blog" />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default Singleblog;
