import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Contactcss from "./Contact.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import config from '../../services/config';
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await fetch(
        `${config.apiUrl}/sendMsg`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const message = data.message || "Form submitted successfully!";
        toast.success(message, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Optionally, reset form fields
        e.target.reset();
      } else {
        toast.error("Form submission failed. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    addGTM();
  }, []);

  const addGTM = () => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
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
    <Helmet>
        <link rel="canonical" href="https://qurocity.ai/contactus" />
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
      <div className={Contactcss.contactUs}>
        <div className={Contactcss.contactusDetails}>
          <img
            width="auto"
            height="180px"
            src="/mascot/CapLift_crop.gif"
            alt="mascot"
          />
          <h1>Contact Us</h1>
          <p>
            Corp. Off. No 16A, Floor 2, Tower A, Downtown City Vista, Fountain
            Road, Ashoka Nagar, Kharadi, Pune – 411014
            <br />
            <span id="mobile-span">Mobile no. – 93739 02340</span> <br />
            <span id="email-span">
              E-mail Address -
  <a style={{
                color:"#00046C"
              }} href="mailto:partner@qurocity.ai"> partner@qurocity.ai</a>
            </span>
          </p>
        </div>
        <div className={Contactcss.formSection}>
          <form
            method="POST"
            action="https://backendapi-1bfa.onrender.com/sendMsg"
            id="contactFormUrl"
            className={Contactcss.allForm}
            onSubmit={handleSubmit}
          >
            <label htmlFor="sender_name">Your Name</label>
            <br />
            <input type="text" name="fname" autoComplete="name" required />
            <br />
            <label htmlFor="sender_email">Your Email</label>
            <br />
            <input type="email" name="email" autoComplete="email" required />
            <br />
            <label htmlFor="sender_msg">Your Message</label>
            <br />
            <textarea name="msg" autoComplete="msg" required></textarea>
            <br />
            <button style={{
              margin:"1rem auto",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:"7rem"
            }} className={Contactcss.submmit} type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer2 />

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </>
  );
}

export default Contact;

