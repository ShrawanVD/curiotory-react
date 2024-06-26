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
                alt="Curiotory Logo"
                className={newnavv.logo}
              />
            </a>
          </div>
          <div className={newnavv.headerRight}>
            <a
              href="https://curiotory.com/lms/"
              className={newnavv.studentPortal}
            >
              Student Portal
            </a>
          </div>
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
          <img src="/navbar/navbarLine.png" alt="curiotory color line" />
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
              href="https://curiotory.com/lms/"
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
                    src="/Index/logo.png"
                    alt="Curiotory Logo"
                    className={newnavv.logo}
                  />
                </a>
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
                  href="https://curiotory.com/lms/"
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
