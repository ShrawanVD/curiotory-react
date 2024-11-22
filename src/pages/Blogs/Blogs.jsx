import { useEffect, useState } from "react";
import Blogscss from "./Blogs.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import config from "../../services/config";
import { Helmet } from "react-helmet";

function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    fetchBlogPosts();
    addGTM();
  }, []);

  const fetchBlogPosts = () => {
    setLoading(true);

    fetch(`${config.apiUrl}/api/blogs`)
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

  const openBlog = (urlTitle, postId) => {
    window.location.href = `/blogs/${urlTitle}-${postId}`;
    window.scrollTo(0, 0);  // Scroll to top when a blog is clicked
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);  // Scroll to top on page change
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const addGTM = () => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SXJ40ZYWNV');
    `;
    document.head.appendChild(script2);
  };

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
        <title>
          Qurocity Blogs : Welcome to the Qurocity Trail For Readers!
        </title>
        <meta
          name="description"
          content="Welcome to Qurocity Trail. Here, we ignite your Qurocity with engaging articles, tips, and stories that inspire continuous learning and skill upgrading."
        />
        <meta
          name="keywords"
          content="language blogs, language blog topics, language articles, linguistics blogs, language bloggers, language learning "
        />
        <link rel="canonical" href="https://qurocity.ai/blogs" />
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
        ></script>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
        </script>
      </Helmet>
      <Newnavbar />
      <div className={Blogscss.blogbackground}>
        <div className={Blogscss.blogHeading}>
          <h1>Welcome to the Qurocity Trail!</h1>
          <p>
            Welcome to Qurocity Trail, the blog section of Qurocity! Here, we
            ignite your Qurocity with engaging articles, tips, and stories that
            inspire continuous language learning and skill upgrading. Whether
            you're passionate about language learning, cultural exploration, or
            personal development, you'll find a treasure trove of insights and
            inspiration. Join us on this exciting journey and let's explore the
            world of knowledge together!
          </p>
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
              <div
                key={post._id}
                className={Blogscss.blogCard}
                onClick={() => openBlog(post.urlTitle, post._id)}
              >
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

          {/*  this is the worst plahce */}
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
