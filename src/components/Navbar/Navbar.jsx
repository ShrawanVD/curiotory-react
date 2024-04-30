import React from 'react'
import './Navbar.css';




function Navbar() {
  return (
    <>
    
  <nav>
    <div id="navbar">
      <div id="logo" classname="reverse">
        <div classname="mobile-btn" style="font-size: 30px; cursor: pointer; font-weight: bold" onclick="openNav()">
          &#9776;
        </div>
        <a href="../index.html"><img width="178px" height="44px" src="./images/Index/0 - logo.png" classname="logo" /></a>
      </div>
      <div id="links">
        <div classname="dropdown">
          <a href="#" classname="dropdown-toggle">Language Solution</a>
          <div classname="dropdown-content">
            <a href="./html/french.html" style="font-size: 0.9rem">French</a>
            <a href="./html/spanish.html" style="font-size: 0.9rem">Spanish</a>
            <a href="./html/german.html" style="font-size: 0.9rem">German</a>
            <a href="./html/russian.html" style="font-size: 0.9rem">Russian</a>
            <a href="./html/english.html" style="font-size: 0.9rem">English</a>
            <a href="./html/mandarin.html" style="font-size: 0.9rem">Mandarin</a>
            <a href="./html/dutch.html" style="font-size: 0.9rem">Dutch</a>
            <a href="./html/portuguese.html" style="font-size: 0.9rem">Portuguese</a>
            <a href="./html/japanese.html" style="font-size: 0.9rem">Japanese</a>
            <a href="./html/korean.html" style="font-size: 0.9rem">Korean</a>
            <a href="./html/arabic.html" style="font-size: 0.9rem">Arabic</a>
          </div>
        </div>

        <a href="./html/blogs.html">Blogs</a>
        <a href="./html/meetTheTutor.html">Meet the Tutors</a>
        <a href="./html/aboutUs.html">About Us</a>
        <a href="./html/contactus.html">Contact Us</a>
        <div classname="button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"><button
              id="nav-button">
              Register for our<br />
              FREE Demo
            </button></a>
        </div>
        <a href="https://play.google.com/store/apps/details?id=stage.curiotory.com&hl=en-IN"><img width="61px"
            height="58px" id="playstore-img" src="./images/Index/0 - playstore.png" /></a>
      </div>
    </div>
  </nav>


  <div id="mySidenav" classname="sidenav">
    <a style="cursor: pointer; color: rgb(18, 63, 122)" classname="closebtn closebtn-rotate"
      onclick="closeNav()">&times;</a>
    <div classname="dropdown">
      <a href="#"><img width="170px" height="45px" src="./images/Index/0 - logo.png" classname="logo" /></a>
      <a href="#" classname="dropdown-toggle">Language Solution</a>
      <div classname="dropdown-content">
        <a href="./html/french.html" style="font-size: 0.9rem">French</a>
        <a href="./html/spanish.html" style="font-size: 0.9rem">Spanish</a>
        <a href="./html/german.html" style="font-size: 0.9rem">German</a>
        <a href="./html/russian.html" style="font-size: 0.9rem">Russian</a>

        <a href="./html/english.html" style="font-size: 0.9rem">English</a>
        <a href="./html/mandarin.html" style="font-size: 0.9rem">Mandarin</a>
        <a href="./html/dutch.html" style="font-size: 0.9rem">Dutch</a>
        <a href="./html/portuguese.html" style="font-size: 0.9rem">Portuguese</a>
        <a href="./html/japanese.html" style="font-size: 0.9rem">Japanese</a>
        <a href="./html/korean.html" style="font-size: 0.9rem">Korean</a>
        <a href="./html/arabic.html" style="font-size: 0.9rem">Arabic</a>
      </div>
    </div>
    <a href="./html/blogs.html">Blogs</a>
    <a href="./html/meetTheTutor.html">Meet the Tutors</a>
    <a href="./html/aboutUs.html">About Us</a>
    <a href="./html/contactus.html">Contact Us</a>
    <div classname="text-center mb-4 d-flex">
      <a href="https://www.linkedin.com/company/chalkboard-academy/?originalSubdomain=in" classname="text-black"
        style="color: #0a66c2" target="_blank">
        <i classname="fab fa-linkedin"></i>
      </a>

      <a href="https://www.facebook.com/Curiotory/" classname="text-black" target="_blank" style="color: #1877f2">
        <i classname="fab fa-facebook"></i>
      </a>
      <a href="https://www.youtube.com/channel/UC9PdKfuTTo4i3sWd_HGQUFg" classname="text-black" style="color: #ff0000"
        target="_blank">
        <i classname="fab fa-youtube"></i>
      </a>
      <a href="https://www.instagram.com/curiotory_/" classname="text-black" style="color: #e95950" target="_blank">
        <i classname="fab fa-instagram"></i>
      </a>
    </div>
  </div>
    
    </>
  )
}

export default Navbar