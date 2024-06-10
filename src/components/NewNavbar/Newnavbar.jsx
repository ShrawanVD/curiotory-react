import newnavv from './Newnavbar.module.css';
import { useState,useEffect, useRef } from "react";

function Newnavbar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
            <a href="https://curiotory.com/lms/" className={newnavv.studentPortal}>
              Student Portal
            </a>
          </div>
        </header>
        <div className={newnavv.imgline}>
          <img src="/navbar/navbarLine.png" />
        </div>
        <div className={newnavv.navList}>
          <nav className={newnavv.nav}>
            {/* <a href="#">Solutions</a> */}
            <div className={newnavv.dropdown} ref={dropdownRef}>
            <a onClick={toggleDropdown} className={newnavv.dropbtn}>Languages</a>
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
              </div>
            )}
          </div>
            {/* <div className={newnavv.dropdown}>
            <a onClick={toggleDropdown} className={newnavv.dropbtn}>Languages</a>
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
              </div>
            )}
          </div> */}
           <a href="/blogs">Blogs</a>
            <a href="/becometutor">Become a Tutor</a>
            <a href="/aboutus">About us</a>
            <a href="/contactus" className={newnavv.contactUs}>
              <span>Contact us</span>
            </a>
          </nav>
        </div>
        </div>
    </>
  )
}

export default Newnavbar