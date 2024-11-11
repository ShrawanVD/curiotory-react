
import React, { useEffect } from "react";
import not from "./Thankyou.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import { Helmet } from "react-helmet";

const Thankyou = ({ message = "Thank You for Registering!" }) => {
//   useEffect(() => {
//     // Redirect to home after 5 seconds
//     const timer = setTimeout(() => {
//       window.location.href = "/";
//     }, 5000);
//     return () => clearTimeout(timer); // Clean up the timer on unmount
//   }, []);
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Helmet>
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

      <div className={not.error_page}>
        <div className={not.container1}>
          <div className={not.gifContainer} style={{
            marginTop:"-10rem"
          }}>
            {/* Add a Thank You GIF here */}
            <img
              src="/mascot/thankyou.gif"
              alt="Thank You GIF"
              className={not.thankyouGif}
            />
          </div>
          <div className={not.error_page__heading}>
            <h1 className={not.error_page__heading_title}>{message}</h1>
            <p className={not.error_page__heading_desciption}>
              Our Counsellor will contact you soon.
            </p>
          </div>

          <p className={not.error_page__heading_description}>
            Here are some helpful links in case you need more information:
          </p>

          <div className={not.row}>
            <a
              className={not.error_page__button}
              href="/"
              aria-label="back to home"
              title="back to home"
            >
              Home
            </a>
            <a
              className={not.error_page__button}
              href="https://www.youtube.com/channel/UC9PdKfuTTo4i3sWd_HGQUFg"
                    target="_blank"
              aria-label="about us"
              title="about us"
            >
              Youtube
            </a>
            <a
              className={not.error_page__button}
              href="https://www.instagram.com/qurocity_?igsh=MTRxM3A5eXdkNzFzMQ=="
                    target="_blank"
              aria-label="contact us"
              title="contact us"
            >
              Instagram
            </a>
            <a
              className={not.error_page__button}
              href="https://www.linkedin.com/company/chalkboard-academy/?originalSubdomain=in"
              target="_blank"
              aria-label="blog"
              title="blog"
            >
              LinkedIn
            </a>
            <a
              className={not.error_page__button}
              href="/careers"
              aria-label="services"
              title="services"
            >
              Careers
            </a>
          </div>

          <p className={not.error_page__heading_description}>
            If you need further assistance, please mail us at:{" "}
            <a href="mailto:partner@qurocity.ai">partner@qurocity.ai</a>.
          </p>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default Thankyou;
