import React from "react";

import "./Footer.css";
import logo from "../../assets/Index/logo.png";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="container1">
          <div class="row-up">
            {/* Logo */}
            <div class="ss logo-class col-lg-3">
              <div class="single_footer single_footer1">
                <img src={logo} alt="Logo" />
                <p className="logo-bio">An online language learning platform</p>
              </div>
            </div>

            {/* quick links */}
            <div class="col-lg-3 ss">
              <div class="single_footer">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Meet Our Tutor</a>
                  </li>
                  <li>
                    <a href="#">Become a Tutor</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* legal links */}
            <div class="ss col-lg-3">
              <div class="single_footer single_footer_address">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy & NDNC</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contacting Us */}
            <div class="ss col-lg-3">
              <div class="single_footer single_footer_address">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i class="email fa fa-envelope"></i>
                      Support@curiotory.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            {/* social links */}
            <div class="social_profile col-lg-12 col-sm-12 col-xs-12 ">
              <hr />
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin iconlinkdin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* copyright */}
            <div class="col-lg-12 col-sm-12 col-xs-12">
              <p class="copyright">@2024 Chalkboard Academy Private Limited</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
