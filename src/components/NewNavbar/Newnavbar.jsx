import newnavv from "./Newnavbar.module.css";
import { useState, useEffect, useRef } from "react";

function Newnavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className={newnavv.navvbarContainer}>
        <header className={newnavv.header}>
          <div className={newnavv.logoContainer}>
            <a href="/">
              <img
                src="/Index/logo.png"
                alt="Qurocity Logo"
                className={newnavv.logo}
              />
            </a>
          </div>
          {/* <div className={newnavv.headerRight}>
            <a
              href="https://qurocity.ai/lms/"
              className={newnavv.studentPortal}
            >
              Student Portal
            </a>
          </div> */}

            <a href="https://qurocity.ai/lms/" className={newnavv.Btn}>

            <div className={newnavv.sign}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  fill="currentColor"
                  stroke="currentColor"
                  class="icon"
                >
                  <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
                </svg>
              </div>

              <div className={newnavv.text}>Student Portal</div>
            </a>
            {/* <button href="https://qurocity.ai/lms/" className={newnavv.Btn}>
              
            </button> */}

          <button
            className={`${newnavv.hamburger} ${
              sideNavOpen ? newnavv.hidden : ""
            }`}
            onClick={toggleSideNav}
          >
            &#9776;
          </button>
        </header>
        <div className={newnavv.imgline}>
          <img src="/navbar/navbarLine.png" alt="Qurocity color line" />
        </div>
        <div
          className={`${newnavv.navList} ${sideNavOpen ? newnavv.showNav : ""}`}
        >
          <button className={newnavv.closebtn} onClick={toggleSideNav}>
            &times;
          </button>
          <nav className={newnavv.nav}>
            <div className={newnavv.dropdown} ref={dropdownRef}>
              <a onClick={toggleDropdown} className={newnavv.dropbtn}>
                Languages
              </a>
              {dropdownOpen && (
                <div className={newnavv.dropdownContent}>
                  <a href="/english">English</a>
                  <a href="/spanish">Spanish</a>
                  <a href="/french">French</a>
                  <a href="/german">German</a>
                  <a href="/russian">Russian</a>
                  <a href="/mandarin">Mandarin</a>
                  <a href="/dutch">Dutch</a>
                  <a href="/japanese">Japanese</a>
                  <a href="/korean">Korean</a>
                  <a href="/portuguese">Portuguese</a>
                  <a href="/arabic">Arabic</a>
                  <a href="/danish">Danish</a>
                </div>
              )}
            </div>
            <a href="/blogs">Blogs</a>
            <a href="/becometutor">Become a Tutor</a>
            <a href="/aboutus">About us</a>
            <a href="/contactus" className={newnavv.contactUs}>
              <span>Contact us</span>
            </a>

            <a
              href="https://qurocity.ai/lms/"
              className={newnavv.sideStudentPortal}
            >
              Student Portal
            </a>
          </nav>
        </div>
        {sideNavOpen && (
          <div className={newnavv.overlay} onClick={toggleSideNav}>
            <div>
              <div className={newnavv.sidelogoContainer}>
                <a href="/">
                  <img
                    src="/Index/logo-course.png"
                    alt="Qurocity Logo"
                    className={newnavv.logo}
                  />
                </a>

                <button className={newnavv.closebtn} onClick={toggleSideNav}>
            &times;
          </button>
              </div>
              <nav className={newnavv.sidenav}>
                <div className={newnavv.navdropdown} ref={dropdownRef}>
                  <a onClick={toggleDropdown} className={newnavv.dropbtn}>
                    Languages
                  </a>
                  {dropdownOpen && (
                    <div className={newnavv.dropdownContent}>
                      <a href="/english">English</a>
                      <a href="/spanish">Spanish</a>
                      <a href="/french">French</a>
                      <a href="/german">German</a>
                      <a href="/russian">Russian</a>
                      <a href="/mandarin">Mandarin</a>
                      <a href="/dutch">Dutch</a>
                      <a href="/japanese">Japanese</a>
                      <a href="/korean">Korean</a>
                      <a href="/portuguese">Portuguese</a>
                      <a href="/arabic">Arabic</a>
                      <a href="/danish">Danish</a>
                    </div>
                  )}
                </div>
                <a href="/blogs">Blogs</a>
                <a href="/becometutor">Become a Tutor</a>
                <a href="/aboutus">About us</a>
                <a href="/contactus" className={newnavv.contactUs}>
                  <span>Contact us</span>
                </a>
                <a
                  href="https://qurocity.ai/lms/"
                  className={newnavv.studentPortalsidenavbar}
                >
                  Student Portal
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Newnavbar;
