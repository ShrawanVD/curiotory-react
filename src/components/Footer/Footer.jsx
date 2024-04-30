import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <>
    
    <footer classname="text-center text-white" style="background-color: #3f51b5; bottom: 0">
    <div classname="container">
      <section>
        <div classname="row text-center d-flex justify-content-center pt-5">
          <div classname="col-md-2">
            <h6 classname="text-uppercase font-weight-bold">
              <a href="html/meetTheTutor.html" classname="text-white">Meet our Tutors</a>
            </h6>
          </div>

          <div classname="col-md-2">
            <h6 classname="text-uppercase font-weight-bold">
              <a href="html/becomeTutor.html" classname="text-white">Become a tutor</a>
            </h6>
          </div>

          <div classname="col-md-2">
            <h6 classname="text-uppercase font-weight-bold">
              <a href="./html/privacyPolicy.html" classname="text-white">Privacy Policy</a>
            </h6>
          </div>

          <div classname="col-md-3">
            <h6 classname="text-uppercase font-weight-bold">
              <a href="./html/refundPolicy.html" classname="text-white">Refund Policy & NDNC</a>
            </h6>
          </div>

          <div classname="col-md-3">
            <h6 classname="text-uppercase font-weight-bold">
              <a href="./html/termsCondition.html" classname="text-white">Terms and Conditions</a>
            </h6>
          </div>
        </div>
      </section>

      <hr classname="my-3" />

      <section classname="text-center mb-4">
        <a href="https://www.linkedin.com/company/chalkboard-academy/?originalSubdomain=in" classname="text-white me-4 mr-3"
          target="_blank">
          <i classname="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/Curiotory/" classname="text-white me-4 mr-3" target="_blank">
          <i classname="fab fa-facebook"></i>
        </a>
        <a href="https://www.google.com/maps/search/?api=1&query=16A%2C%202nd%20floor%2C%20Curiotory%2C%20Downtown%20City%20Vista%2C%20Curiotory%2C%20Building%20A%20Office%20no%2C%20Fountain%20Road%2C%20Rakshak%20Nagar%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014"
          classname="text-white me-4 mr-3" target="_blank">
          <i classname="fas fa-map-marker-alt"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC9PdKfuTTo4i3sWd_HGQUFg" classname="text-white me-4 mr-3" target="_blank">
          <i classname="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/curiotory_/" classname="text-white me-4" target="_blank">
          <i classname="fab fa-instagram"></i>
        </a>
      </section>
    </div>

    <div classname="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      @2024 Chalkboard Academy Private Limited
    </div>
  </footer>
    
    </>
  )
}

export default Footer