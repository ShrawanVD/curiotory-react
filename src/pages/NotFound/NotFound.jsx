import React from "react";
import not from "./NotFound.module.css";

const NotFound = ({ message = "Page Not Found" }) => (

  // 

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
        <a
          className={not.error_page__button}
          href="/"
          aria-label="back to home"
          title="back to home"
        >
          back to home
        </a>
      </div>
    </div>
  </div>
);

export default NotFound;
