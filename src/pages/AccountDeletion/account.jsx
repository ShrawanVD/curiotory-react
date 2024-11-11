import React, { useState } from "react";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import acc from "./account.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../services/config";
import { Helmet } from "react-helmet";

function Account() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${config.apiUrl}/account`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const message = data.message || "Account deletion request submitted successfully!";
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
        setFormData({ name: "", email: "", phone: "", reason: "" });
      } else {
        toast.error("Failed to submit the request. Please try again.", {
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

      <div className={acc.container}>
        <h1 className={acc.heading}>Account Deletion Privacy Policy</h1>
        <h3 className={acc.subheading}>
          At Qurocity, we respect your decision to delete your account and ensure that your personal information is handled securely.
        </h3>

        <div className={acc.content}>
          <h4>1. Data Required for Account Deletion</h4>
          <p>To delete your account, we only need:</p>
          <ul>
            <li>Your <strong>username</strong></li>
            <li>Your <strong>email address</strong></li>
            <li>Your <strong>phone number</strong></li>
            <li>The <strong>reason for account deletion</strong> (optional)</li>
          </ul>

          <h4>2. Deletion Process</h4>
          <p>
            Once your account deletion is requested, all your personal data will be permanently removed from our servers, including your profile and activity history. This data will no longer be accessible or recoverable.
          </p>

          <h4>3. Retention for Legal Reasons</h4>
          <p>
            In certain cases, we may need to retain some data for legal, security, or fraud-prevention purposes, but this will be limited to the required retention period.
          </p>

          <h4>4. Third-Party Data</h4>
          <p>
            If you have linked third-party services, such as payment gateways or social logins, you will need to manage data deletion directly with those services.
          </p>

          <h4>5. Contact Us</h4>
          <p>
            For assistance with account deletion or any questions, contact us at <a href="mailto:support@qurocity.ai">support@qurocity.ai</a>.
          </p>
        </div>

        <form method="POST" action="/account" className={acc.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="reason">Reason for Account Deletion (Optional)</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="4"
          />

          <button type="submit" className={acc.submitButton}>Submit</button>
        </form>
      </div>

      <Footer2 />

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </>
  );
}

export default Account;
