import React from "react";
import not from "./NotFound.module.css";

const NotFoundDev = ({ message = "Page Under Development" }) => (

  <div>
    <div className={not.error_page}>
      <div className={not.container1}>
        <div className={not.eyes}>
          <div className={not.eye}>
            <div className={not.eye__pupil}></div>
          </div>
          <div className={not.eye}>
            <div className={not.eye__pupil}></div>
          </div>
        </div>
        <div className={not.error_page__heading}>
          <h1 className={not.error_page__heading_title}>{message}</h1>
          <p className={not.error_page__heading_desciption}>404 error</p>
        </div>
        <p className={not.error_page__heading_description} style={{
          marginLeft:"1rem",
          marginRight:"1rem"
        }}>
          Sorry, the page you are looking for is currently under Development. Here are some helpful links:
        </p>
        <div className={not.row}>
        <a className={not.error_page__button} href="/" aria-label="back to home" title="back to home">Home</a>
        <a className={not.error_page__button} href="/aboutus" aria-label="about us" title="about us">About Us</a>
        <a className={not.error_page__button} href="/contactus" aria-label="contact us" title="contact us">Contact Us</a>
        <a className={not.error_page__button} href="/blogs" aria-label="blog" title="blog">Blogs</a>
        <a className={not.error_page__button} href="/careers" aria-label="services" title="services">Careers</a>
        </div>
        <p className={not.error_page__heading_description} style={{
          marginLeft:"1rem",
          marginRight:"1rem"
        }}>
          If you need further assistance, please mail us at: <a href="mailto:support@curiotory.com">support@curiotory.com</a>.
        </p>
      </div>
    </div>
  </div>
);

export default NotFoundDev;
