import React from 'react'
import './Languages.css'

function Japanese() {
  return (
    <div>
        
        <div class="hero">
    <h1>Japanese Language</h1>
  </div>
  {/* <!-- TW0 COLUMN LAYOUT --> */}
  <div class="row">
    <div class="col sp-2">
      <img src="../images/Languages/japan - 1.jpeg" alt="Language Learning" style="margin: 2rem 0" />
      <h3>From Beginner to Advanced Proficiency</h3>
      <p>
        Embark on an exciting journey to master Japanese, starting with
        essential vocabulary and grammar, then advancing steadily towards
        fluency and a deep cultural understanding.
      </p>
      <p>
        Begin with foundational resources to establish a solid base, then
        progress through intermediate levels, refining your speaking,
        listening, reading, and writing skills.
      </p>
      <p>
        Immerse yourself in authentic Japanese materials, engage in
        conversational exercises, and challenge yourself with advanced content
        to achieve genuine proficiency.
      </p>
    </div>
    <div class="col sp-2">
      <img src="../images/Languages/japan - 2.jpeg" alt="Certification Exams" style="margin: 2rem 0" />

      <h3>Certification Exams and Proficiency Levels</h3>
      <p>
        Validate your Japanese language skills with reputable exams such as
        the JLPT (Japanese-Language Proficiency Test). These exams assess
        competency levels ranging from N5 (Beginner) to N1 (Mastery), offering
        internationally recognized certification for academic and professional
        purposes.
      </p>
      <p>
        Prepare thoroughly for exams tailored to your skill level and obtain
        certification as tangible evidence of your Japanese language ability.
      </p>

      <p>
        <a href="./registrationForm.html" class="btn plain">Discover More</a>
      </p>
    </div>
  </div>

  {/* <!-- BANNER SECTION --> */}
  <div class="banner">
    <h2 id="banner-title">Application</h2>
    <p>
      Proficiency in Japanese opens doors to various opportunities in
      international business, education, tourism, and cultural exchange,
      facilitating connections and enriching global experiences. Whether
      navigating Japanese markets, fostering cross-cultural relationships, or
      immersing yourself in Japanese-speaking communities, fluency in Japanese
      enhances career prospects and fosters meaningful interactions in today's
      interconnected world.
    </p>
  </div>
    </div>
  )
}

export default Japanese