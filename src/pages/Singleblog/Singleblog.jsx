import singleblogcss from "./Singleblog.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to extract params
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import { useSpeechSynthesis } from "react-speech-kit";
import config from "../../services/config";
import { Helmet } from "react-helmet";

function Singleblog() {
  const { slug } = useParams(); // Extract the slug from the URL
  
  const [blog, setBlog] = useState(null);
  const { speak, cancel } = useSpeechSynthesis();
  const [isPlaying, setIsPlaying] = useState(false);

  // Parse the slug to get urlTitle and id
  const lastHyphenIndex = slug.lastIndexOf("-");
  const urlTitle = slug.substring(0, lastHyphenIndex);
  const id = slug.substring(lastHyphenIndex + 1);

  console.log("Extracted slug from URL:", slug);
  console.log("Extracted urlTitle:", urlTitle);
  console.log("Extracted ID:", id);

  useEffect(() => {
    // Function to fetch and set blog data based on the ID from URL
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blogData = await response.json();
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog data:", error.message);
      }
    };

    fetchBlogData(); // Fetch blog data on component mount
  }, [id]);

  const handleSpeak = () => {
    if (blog && blog.content) {
      const text = blog.content.replace(/<[^>]+>/g, ""); // Remove HTML tags from content
      speak({ text });
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    cancel();
    setIsPlaying(false);
  };

  return (
    <div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PDFXMX24"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {blog && (
        <Helmet>
          <link rel="canonical" href={`https://qurocity.ai/blogs/${slug}-${id}`} />
          <title>{blog.metaTitle}</title>
          <meta name="description" content={blog.metaDescr} />
          <meta name="keywords" content={blog.metaKeywords} />
          {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        </Helmet>
      )}
      <Newnavbar />
      <div>
        <div className={singleblogcss.singleBlogContainer}>
          {blog ? (
            <div className={singleblogcss.blogCard}>
              <h1>{blog.title}</h1>
              <p className={singleblogcss.blogDate}>{blog.date}</p>
              <hr />
              <img src={blog.imageUrl} alt={blog.alt} />
              <div className={singleblogcss.speakButton}>
                {isPlaying ? (
                  <button onClick={handleStop}>Stop</button>
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
      <Footer2 />
    </div>
  );
}

export default Singleblog;
