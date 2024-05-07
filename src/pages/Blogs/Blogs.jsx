import Footer from "../../components/Footer/Footer"
import Navv from "../../components/Navv/Navv"
import './Blogs.css';
import { useEffect, useState } from 'react';

function Blogs() {

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    fetch("https://backendapi-ay7s.onrender.com/api/blogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching or processing data:", error.message);
      });
  };

  const openBlog = (postId) => {
    window.location.href = `/Singleblog?id=${postId}`;
  };

  return (
    <>
      <Navv />
      <div>

      <div className="blog-heading">
    <h1>Blogs</h1>
  </div>

      {loading && (
      <div id="loadingSpinner" className="loading-spinner">
        <div className="spinnerContainer">
          <div className="spinner"></div>
          <div className="loader">
            <p>Loading</p>
            <div className="words">
              <span className="word">Posts</span>
              <span className="word">Images</span>
              <span className="word">Data</span>
              <span className="word">Title</span>
              <span className="word">Posts</span>
            </div>
          </div>
        </div>
      </div>
    )}
<div className="blogs" id="blogsSection">
  <div className="blog-container" style={{ display: loading ? 'none' : 'flex', flexWrap: 'wrap' }}>
    {blogPosts.map((post) => (
      <div key={post.id} className="blog-card" onClick={() => openBlog(post.id)}>
        <img src={post.imageUrl} alt="Blog Image" />
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
          <h2>{post.title}</h2>
          <h3>{post.date}</h3>
          <hr />
          <p style={{ textAlign: 'justify' }} className="cardtitle">{post.intro}</p>
          <h3 className="read-more">Read More</h3>
        </div>
      </div>
    ))}
  </div>
</div>

</div>
      <Footer />
    </>
  )
}

export default Blogs