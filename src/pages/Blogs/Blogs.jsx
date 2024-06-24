import { useEffect, useState } from "react";
import Blogscss from "./Blogs.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";

function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = () => {
    setLoading(true);
    // https://backendapi-ay7s.onrender.com/api/blogs
    
    fetch("https://backendapi-1-nlyi.onrender.com/api/blogs")
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
        setLoading(false);
      });
  };

  const openBlog = (postId) => {
    window.location.href = `/blogsId?id=${postId}`;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <>
      <Newnavbar />
      <div className={Blogscss.blogbackground}>
        <div className={Blogscss.blogHeading}>
          <h1>Blogs</h1>
        </div>
        {loading && (
          <div id="loadingSpinner" className={Blogscss.loadingSpinner}>
            <div className={Blogscss.spinnerContainer}>
              <div className={Blogscss.spinner}></div>
              <div className={Blogscss.loader}>
                <p>Loading</p>
                <div className={Blogscss.words}>
                  <span className={Blogscss.word}>Posts</span>
                  <span className={Blogscss.word}>Images</span>
                  <span className={Blogscss.word}>Data</span>
                  <span className={Blogscss.word}>Title</span>
                  <span className={Blogscss.word}>Posts</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={Blogscss.blogs} id="blogsSection">
          <div className={Blogscss.blogContainer}>
            {currentPosts.map((post) => (
              <div key={post._id} className={Blogscss.blogCard} onClick={() => openBlog(post._id)}>
                <img src={post.imageUrl} alt="Blog Image" />
                <div className={Blogscss.bloginfo}>
                  <h2>{post.title}</h2>
                  <h3>{post.date}</h3>
                  <hr />
                  <p className={Blogscss.cardtitle}>{post.intro}</p>
                  <h3 className={Blogscss.readMore}>Read More</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={Blogscss.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? Blogscss.activePage : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Blogs;
