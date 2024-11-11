import React, { useState } from "react";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import life from "./life.module.css";
import Footer2 from "../../components/Footer/Footer2";
import { Helmet } from "react-helmet";

function Life() {
  // Sample image URLs (replace these with your actual images)
  const officeVertical = [
    "/Life/office/1.jfif",
    "/Life/office/2.JPG",
    "/Life/office/3.JPG",
    "/Life/office/4.jfif",
  ];

  const officeHorizontal = [
    "/Life/office/17.jfif",
    "/Life/office/13.jfif",
    "/Life/office/12.jfif",
    "/Life/office/11.jfif",
    "/Life/office/14.JPG",
    "/Life/office/15.JPG",
    "/Life/office/16.JPG",
    "/Life/office/17.JPG",
  ];
  const festVertical = [
    "/Life/festivals/5.jfif",
    "/Life/festivals/6.jfif",
    "/Life/festivals/7.jfif",
    "/Life/festivals/8.jfif",
  ];

  const festHorizontal = [
    "/Life/festivals/1.jfif",
    "/Life/festivals/2.jfif",
    // "/Life/festivals/3.jfif",
    // "/Life/festivals/4.jfif",
  ];
  const outVertical = [
    "/Life/outdoor/5.jfif",
    "/Life/outdoor/6.jfif",
    "/Life/outdoor/7.jfif",
    "/Life/outdoor/8.jfif",
  ];

  const outHorizontal = [
    "/Life/outdoor/1.jfif",
    "/Life/outdoor/2.jfif",
    "/Life/outdoor/3.jfif",
    "/Life/outdoor/4.jfif",
    "/Life/outdoor/55.jfif",
    "/Life/outdoor/66.jfif",
  ];

  // State to toggle the "View More" button
  const [showMoreOffice, setShowMoreOffice] = useState(false);
  const [showMoreFest, setShowMoreFest] = useState(false);
  const [showMoreOut, setShowMoreOut] = useState(false);

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
      <Helmet>
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
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>

      </Helmet>

      <Newnavbar />

      <div className={life.heading}>
        <h1>Life at Qurocity!</h1>
        <p>
          Experience a dynamic work environment where innovation, collaboration,
          and growth are key to our success.
        </p>
      </div>

      {/* Office culture */}
      <div className={life.office}>
        <h2>Office Culture</h2>
        <p>
          At Qurocity, we foster a collaborative, innovative environment where
          creativity and professional growth are at the forefront.
        </p>

        {/* Image Rows */}
        <div className={life.imageGallery}>
          <div className={`${life.officeH} ${life.imageRow}`}>
            {officeVertical.map((image, index) => (
              <div className={life.imageContainer} key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>

          {showMoreOffice && (
            <div
              className={`${life.imageRow} ${life.secondRow} ${life.officeV}`}
            >
              {officeHorizontal.map((image, index) => (
                <div className={life.imageContainer} key={index}>
                  <img src={image} alt={`Image ${index + 5}`} />
                </div>
              ))}
            </div>
          )}

          {/* Toggle Button */}
          <button
            className={life.toggleButton}
            onClick={() => setShowMoreOffice(!showMoreOffice)}
          >
            {showMoreOffice ? (
              <i class="fa-solid fa-chevron-up"></i>
            ) : (
              <i class="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>
      </div>

      {/* festivals  */}
      <div className={`${life.festival} ${life.office}`}>
        <h2>Festival Time</h2>
        <p>
          At Qurocity, we love to celebrate and have fun! Our team celebrates
          every festival with great enthusiasm.
        </p>

        {/* Image Rows */}
        <div className={life.imageGallery}>
          <div className={`${life.officeH} ${life.imageRow}`}>
            {festHorizontal.map((image, index) => (
              <div className={life.imageContainer} key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>

          {showMoreFest && (
            <div
              className={`${life.imageRow} ${life.secondRow} ${life.officeV}`}
            >
              {festVertical.map((image, index) => (
                <div className={life.imageContainer} key={index}>
                  <img src={image} alt={`Image ${index + 5}`} />
                </div>
              ))}
            </div>
          )}

          {/* Toggle Button */}
          <button
            className={life.toggleButton}
            onClick={() => setShowMoreFest(!showMoreFest)}
          >
            {showMoreFest ? (
              <i class="fa-solid fa-chevron-up"></i>
            ) : (
              <i class="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>
      </div>

      {/* outdoor  activities */}
      <div className={`${life.outdoor} ${life.office}`}>
        <h2>Outdoor Fun</h2>
        <p>
          Team bonding forms the backbone of our company culture. To foster it,
          we believe in organising regular outdoor activities to imbibe the
          spirit of togetherness in within.
        </p>

        {/* Image Rows */}
        <div className={life.imageGallery}>
          <div className={`${life.officeH} ${life.imageRow}`}>
            {outHorizontal.map((image, index) => (
              <div className={life.imageContainer} key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    objectFit: [2].includes(index) ? "contain" : "cover",
                    borderRadius: [2].includes(index) ? "10px" : "0px",
                  }}
                />
              </div>
            ))}
          </div>

          {showMoreOut && (
            <div
              className={`${life.imageRow} ${life.secondRow} ${life.officeV}`}
            >
              {outVertical.map((image, index) => (
                <div className={life.imageContainer} key={index}>
                  <img src={image} alt={`Image ${index + 5}`} />
                </div>
              ))}
            </div>
          )}

          {/* Toggle Button */}
          <button
            className={life.toggleButton}
            onClick={() => setShowMoreOut(!showMoreOut)}
          >
            {showMoreOut ? (
              <i class="fa-solid fa-chevron-up"></i>
            ) : (
              <i class="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>
      </div>

      <br />
      <br />
      <Footer2 />
    </>
  );
}

export default Life;
