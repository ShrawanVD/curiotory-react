import React from "react";
import { Helmet } from "react-helmet";
import Newnavbar from "../NewNavbar/Newnavbar";
import Footer2 from "../Footer/Footer2";
import job from "./Careers.module.css";
import Accordian3Careers from "../Accordian3Careers";
import { useEffect } from "react";

function Careers() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "English Teacher",
      description:
        "Join our team as an English Teacher with 24/7 rotational shifts. Work from our office and engage with students dynamically.",
      identifier: {
        "@type": "PropertyValue",
        name: "Job ID",
        value: "1",
      },
      datePosted: "2024-09-03", // Use the actual posting date
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Qurocity",
        sameAs: "https://qurocity.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "MH",
          addressCountry: "IN",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: 540000,
          unitText: "YEAR",
        },
      },
      workHours: "24/7 rotational shifts",
      workLocation: "Work From Office",
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Tamil Language Interpreter",
      description:
        "We are looking for a Tamil Language Interpreter for Colorbar Cosmetics Private Limited. The role is for 3 months with 24/7 rotational shifts.",
      identifier: {
        "@type": "PropertyValue",
        name: "Job ID",
        value: "2",
      },
      datePosted: "2024-09-03",
      employmentType: "CONTRACTOR",
      hiringOrganization: {
        "@type": "Organization",
        name: "Colorbar Cosmetics Private Limited",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "MH",
          addressCountry: "IN",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: 420000,
          unitText: "YEAR",
        },
      },
      workHours: "24/7 rotational shifts",
      employmentDuration: "3 Months",
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Hindi Language Interpreter",
      description:
        "Join Colorbar Cosmetics Private Limited as a Hindi Language Interpreter for a 3-month contract role with 24/7 rotational shifts.",
      identifier: {
        "@type": "PropertyValue",
        name: "Job ID",
        value: "3",
      },
      datePosted: "2024-09-03",
      employmentType: "CONTRACTOR",
      hiringOrganization: {
        "@type": "Organization",
        name: "Colorbar Cosmetics Private Limited",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "MH",
          addressCountry: "IN",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: 420000,
          unitText: "YEAR",
        },
      },
      workHours: "24/7 rotational shifts",
      employmentDuration: "3 Months",
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "Inside Sales Executive",
      description:
        "Join our dynamic team as an Inside Sales Executive with rotational shifts from 7 AM to 9 PM. Fluency in English and Hindi is a must.",
      identifier: {
        "@type": "PropertyValue",
        name: "Job ID",
        value: "4",
      },
      datePosted: "2024-09-03",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Qurocity",
        sameAs: "https://qurocity.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "MH",
          addressCountry: "IN",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: 25000 * 12,
          unitText: "YEAR",
        },
      },
      workHours: "7 AM to 9 PM (rotational)",
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "French Language Interpreter",
      description:
        "We are hiring a French Language Interpreter for Colorbar Cosmetics Private Limited for a 3-month contract role with 24/7 rotational shifts.",
      identifier: {
        "@type": "PropertyValue",
        name: "Job ID",
        value: "5",
      },
      datePosted: "2024-09-03",
      employmentType: "CONTRACTOR",
      hiringOrganization: {
        "@type": "Organization",
        name: "Colorbar Cosmetics Private Limited",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "MH",
          addressCountry: "IN",
        },
      },
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
          "@type": "QuantitativeValue",
          value: 1000000,
          unitText: "YEAR",
        },
      },
      workHours: "24/7 rotational shifts",
      employmentDuration: "3 Months",
    },
  ];

  useEffect(() => {
    addGTM();
  }, []);
  const openings = [
    // {
    //   id: 1,
    //   title: "Digital Marketing Executive",
    //   location: "Pune",
    //   salary: "3.2LPA",
    //   experience: "0-1 Year",
    //   education: "Graduate",
    // },
    // {
    //   id: 2,
    //   title: "HR Executive",
    //   location: "Pune",
    //   salary: "3.2LPA",
    //   experience: "0-1 Year",
    //   education: "Graduate",
    // },
    // {
    //   id: 3,
    //   title: "Web Developer",
    //   location: "Pune",
    //   salary: "3.2LPA",
    //   experience: "0-1 Year",
    //   education: "Graduate",
    // },
    // {
    //   id: 4,
    //   title: "Android Developer",
    //   location: "Pune",
    //   salary: "3.2LPA",
    //   experience: "0-1 Year",
    //   education: "Graduate",
    // },
    // {
    //   id: 5,
    //   title: "Customer Support Executive (language: Malayalam)",
    //   language: "Proficiency in Malayalam",
    //   Shift: "6 days a week with rotational off days",
    //   salary: "3.2 CTC",
    // },
    // {
    //   id: 6,
    //   title: "Nepali Language Interpreter",
    //   language: "Nepali",
    //   company: "Colorbar Cosmetics Private Limited",
    //   Shift: "24/7 rotational shifts",
    //   salary: "5.4 LPA",
    //   duration: "3 Months",
    // },
    {
      id: 1,
      title: "English Teacher",
      language: "English",
      Shift: "24/7 rotational shifts",
      salary: "5.4 LPA",
    },
    {
      id: 2,
      title: "Tamil Language Interpreter",
      language: "Tamil",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "4.2 LPA",
      duration: "3 Months",
    },
    {
      id: 3,
      title: "Hindi Language Interpreter",
      language: "Hindi",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "4.2 LPA",
      duration: "3 Months",
    },
    // {
    //   id: 9,
    //   title: "Bengali Language Interpreter",
    //   language: "Bengali",
    //   company: "Colorbar Cosmetics Private Limited",
    //   Shift: "24/7 rotational shifts",
    //   salary: "4.2 LPA",
    //   duration: "3 Months",
    // },
    // {
    //   id: 10,
    //   title: "Urdu Language Interpreter",
    //   language: "Urdu",
    //   company: "Colorbar Cosmetics Private Limited",
    //   Shift: "24/7 rotational shifts",
    //   salary: "4.2 LPA",
    //   duration: "3 Months",
    // },
    {
      id: 4,
      title: "Inside Sales Executive ",
      language: "English, Hindi",
      Shift: "7 AM to 9 PM (rotational)",
      salary: "25k CTC, 21k in hand",
    },
    // {
    //   id: 12,
    //   title: "Back Office Executives",
    //   language: "English, Hindi",
    //   Shift: "10 AM to 7 PM",
    //   salary: "25k CTC, 21k in hand (for Experienced)",
    // },
    // {
    //   id: 13,
    //   title: "Customer Support Executive (only for male candidate)",
    //   language: "English and Kannada",
    //   Shift: "24/7 rotational",
    //   salary: "25k CTC, 21k in hand",
    // },
    {
      id: 5,
      title: "French Language Interpreter",
      language: "French",
      company: "Colorbar Cosmetics Private Limited",
      Shift: "24/7 rotational shifts",
      salary: "10 LPA",
      duration: "3 Months",
    },
  ];

  const handleViewDetails = (id) => {
    window.location.href = `careers/details/${id}`;
  };
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
          Build Your Dream Language Career With Qurocity : Foreign Language Jobs
        </title>
        <meta
          name="description"
          content="Want to shape your language career path? Explore an ocean of language career opportunities at Qurocity where skill developments and opportunities are endless! 
    Apply for remote language jobs or work with us and give an elevated shift to your linguistics career for a life changing opportunity! Join our dynamic team now!"
        />
        <meta
          name="keywords"
          content="language career, foreign language jobs, language career opportunities, language jobs remote, linguistics career"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>

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
      </Helmet>

      <Newnavbar />

      {/* title section */}
      <div className={job.hero}>
        <div className={job.heroContent}>
          <h2 className={job.herotitle}>
            Build Your Dream Language Career With Qurocity : Foreign Language
            Jobs
          </h2>
          <p>
            Want to shape your language career path? Explore an ocean of
            language career opportunities at Qurocity where skill developments
            and opportunities are endless!{" "}
          </p>
          <p>
            Apply for remote language jobs or work with us and give an elevated
            shift to your linguistics career for a life changing opportunity!
            Join our dynamic team now!
          </p>
        </div>
      </div>

      {/* Steps Section */}

      <div className={job.steps}>
        <div className={job.firstRow}>
          {/* first step */}
          <div className={`${job.resp1} ${job.cover}`}>
            <h3>Step 1:</h3>
            <div className={job.step1}>
              <div className={job.stepContent}>
                <p>Download Qurocity App</p>
                <a
                  href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={job.button2}>Download the App</button>
                </a>
              </div>
              <div className={job.stepIcon}>
                <img src="/Careers/step1.png" alt="Menu Section" />
              </div>
            </div>
          </div>

          {/* second step */}
          <div className={job.cover}>
            <h3>Step 2:</h3>
            <div className={job.step2}>
              <div className={job.stepContent}>
                <p>Go to Menu section of the Homepage</p>
              </div>
              <div className={job.stepIcon}>
                <img src="/Careers/step2.png" alt="Menu Section" />
              </div>
            </div>
          </div>

          {/* third step */}
          <div className={job.cover}>
            <h3>Step 3:</h3>
            <div className={job.step3}>
              <div className={job.stepContent}>
                <p>Select the “Career with Us” option</p>
              </div>
              <div className={job.stepIcon}>
                <img src="/Careers/step3.png" alt="Career Option" />
              </div>
            </div>
          </div>
        </div>

        {/* fourth step */}
        <div className={`${job.cover} ${job.resp4}`}>
          <h3>Step 4:</h3>
          <div className={job.step4}>
            <div className={`${job.stepContent} ${job.stepContent4}`}>
              <p>
                Choose your preferred Job title, read the details and
                requirements carefully.{" "}
              </p>
              <p>Apply to the Job role by filling up the form given.</p>
              <p>We'll review your profile and connect with you soon.</p>
              <a
                href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={job.button2}>Download the App</button>
              </a>
            </div>
            <div className={job.stepIcon}>
              <img src="/Careers/step4.png" alt="Apply" />
            </div>
          </div>
        </div>
      </div>

      {/* job avialable */}
      <div className={job.applyJobContainer}>
        <div className={job.opening}>
          <h2>Latest Opening</h2>
        </div>
        <div className={job.containeropening}>
          {openings.map((opening) => (
            <div
              key={opening.id}
              onClick={() => handleViewDetails(opening.id)}
              className={job.cardopening}
            >
              <h3>{opening.title}</h3>
              <hr />
              {[].includes(opening.id) ? (
                <>
                  <p>Location: {opening.location}</p>
                  <p>Experience: {opening.experience}</p>
                  <p>Salary: {opening.salary}</p>
                </>
              ) : (
                <>
                  <p>Language: {opening.language}</p>
                  <p>Shift: {opening.Shift}</p>
                  <p>Salary: {opening.salary}</p>
                </>
              )}
              <div className={job.footeropening}>
                <button
                  onClick={() => handleViewDetails(opening.id)}
                  className={job.buttonopening}
                >
                  View details &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* faq section */}
      <div>
        <div className={job.faqHeadingDivCss}>
          <h2 className={job.faq_heading}>Frequently Asked Questions</h2>
        </div>
        <div className={job.body_faq}>
          <div className={job.image_container}>
            <img src="/Index/faq.png" alt="FAQ FAQs" />
          </div>
          <div className={job.layout}>
            <Accordian3Careers />
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Careers;
