import React from 'react'

import './Languages.css' 

function Arabic() {
  return (
    <div>
        

        <div class="hero">
    <h1>Arabic Language</h1>
  </div>
  {/* <!-- TW0 COLUMN LAYOUT --> */}
  <div class="row">
    <div class="col sp-2">
      <img src="../images/Languages/arabic - 1.jpeg" alt="Language Learning" style="margin: 2rem 0" />
      <h3>From Beginner to Advanced Proficiency</h3>
      <p>
        Embark on an exciting journey to master Arabic, starting with
        fundamental vocabulary and grammar, then advancing steadily toward
        fluency and a deep cultural understanding.
      </p>
      <p>
        Begin with introductory resources to establish a solid foundation,
        then progress through intermediate levels, refining your speaking,
        listening, reading, and writing skills.
      </p>
      <p>
        Immerse yourself in authentic Arabic materials, engage in
        conversational practice, and challenge yourself with advanced content
        to achieve genuine proficiency.
      </p>
    </div>
    <div class="col sp-2">
      <img src="../images/Languages/arabic - 2.jpeg" alt="Certification Exams" style="margin: 2rem 0" />
      <h3>Certification Exams and Proficiency Levels</h3>
      <p>
        Validate your Arabic language skills with reputable exams such as the
        Arabic Language Proficiency Test (ALPT) or the International Arabic
        Language Testing System (IALTS).
      </p>
      <p>
        These exams assess competency levels ranging from beginner to
        advanced, offering internationally recognized certification for
        academic and professional purposes.
      </p>

      <p>
        Prepare thoroughly for exams tailored to your skill level and obtain
        certification as tangible evidence of your Arabic language ability.
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
      Proficiency in Arabic opens doors to various opportunities in
      international business, diplomacy, academia, and cultural exchange,
      facilitating connections and enriching global experiences. Whether
      navigating Arabic-speaking markets, fostering cross-cultural
      relationships, or immersing yourself in Arabic-speaking communities,
      fluency in Arabic enhances career prospects and fosters meaningful
      interactions in today's interconnected world.
    </p>
  </div>

    </div>
  )
}

export default Arabic