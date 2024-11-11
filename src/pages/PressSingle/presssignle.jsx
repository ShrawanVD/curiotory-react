import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import single from "./presssingle.module.css";
import config from "../../services/config";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import { Helmet } from "react-helmet";

const SinglePress = () => {
  const { slug } = useParams();
  const [press, setPress] = useState(null);

  // Parse the slug to get urlTitle and id
  const lastHyphenIndex = slug.lastIndexOf("-");
  const urlTitle = slug.substring(0, lastHyphenIndex);
  const id = slug.substring(lastHyphenIndex + 1);

  useEffect(() => {
    const fetchPressData = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/api/press/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const pressData = await response.json();
        setPress(pressData);
      } catch (error) {
        console.error("Error fetching press data:", error.message);
      }
    };

    fetchPressData();
  }, [id]);

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
      {press && (
        <Helmet>
          <link rel="canonical" href={`https://qurocity.ai/press/${slug}-${id}`} />
          <title>{press.metaTitle}</title>
          <meta name="description" content={press.metaDescr} />
          <meta name="keywords" content={press.metaKeywords} />
          {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
        </Helmet>
      )}
      <Newnavbar />
      <div className={single.wrapper}>
        {press ? (
          <div className={single.container}>
            <div className={single.header}>
              <span className={single.date}>
                📅 {press.date}
              </span>
            </div>
            <h1 className={single.title}>{press.title}</h1>
            <hr className={single.separator} />
            <div
              className={single.content}
              dangerouslySetInnerHTML={{ __html: press.content }}
            />
          </div>
        ) : (
          <div className={single.loading}>
            Loading...
          </div>
        )}
      </div>
      <Footer2 />
    </>
  );
};

export default SinglePress;
