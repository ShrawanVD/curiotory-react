import singleblogcss from './Singleblog.module.css';
import { useState, useEffect } from 'react';
import Navv from '../../components/Navv/Navv';
import Footer from '../../components/Footer/Footer';

function Singleblog() {

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Function to fetch and set blog data based on the ID from URL
    const fetchBlogData = async () => {
      try {
        // Retrieve blog ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');

        // Fetch blog data based on the ID
        const response = await fetch(`https://backendapi-ay7s.onrender.com/api/blogs/${blogId}`);
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

export default Singleblog