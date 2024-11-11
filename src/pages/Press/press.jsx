import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import prs from "./press.module.css";
import config from "../../services/config";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";

const Press = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPressReleases();
  }, []);

  const fetchPressReleases = () => {
    setLoading(true);
    fetch(`${config.apiUrl}/api/press`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid Data Format");
        }
        setPressReleases(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching or processing data: ", error.message);
        setLoading(false);
      });
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
      <Newnavbar />
      <div className={prs.blogbackground}>
        <div className={prs.blogHeading}>
          <h1>Stay Informed with Our Latest Press Releases!</h1>
          <p>
          Get the Inside Scoop: Qurocity’s Press Releases - Where Information Meets Inspiration!
          </p>
        </div>

        {loading && (
          <div id="loadingSpinner" className={prs.loadingSpinner}>
            <div className={prs.spinnerContainer}>
              <div className={prs.spinner}></div>
              <div className={prs.loader}>
                <p>Loading</p>
                <div className={prs.words}>
                  <span className={prs.word}>Date</span>
                  <span className={prs.word}>Title</span>
                  <span className={prs.word}>Content</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={prs.container}>
          {pressReleases.map((press) => (
            <div key={press._id} className={prs.pressItem}>
              <div className={prs.date}>{press.date}</div>
              <h2 className={prs.title}>{press.title}</h2>
              <p className={prs.description}>
                {press.description.length > 550
                  ? `${press.description.substring(0, 550)}...`
                  : press.description}
              </p>
              <div className={prs.buttons}>
                <Link
                  to={`/press/${press.urlTitle}-${press._id}`}
                  className={prs.readMore}
                  style={{
                    textDecoration:"none",
                    fontSize:"0.8rem"
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Press;
