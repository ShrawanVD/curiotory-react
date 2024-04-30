import React from 'react'
import './Languages.css'

function French() {
  return (
    <div>
        <div class="hero">
    <h1>French Language</h1>
  </div>
  {/* <!-- TW0 COLUMN LAYOUT --> */}
  <div class="row">
    <div class="col sp-2">
      <img src="../images/Languages/french - 1.jpeg" alt="Language Learning" style="margin: 2rem 0" />
      <h3>From Beginner to Advanced Proficiency</h3>
      <p>
        Start your journey to mastering French, progressing from basic
        vocabulary and grammar to fluency and cultural understanding.
      </p>
      <p>
        Explore beginner resources to lay a solid foundation, then advance
        through intermediate levels, honing your speaking, listening, reading,
        and writing skills.
      </p>
      <p>
        Immerse yourself in authentic French content, engage in conversation
        practice, and challenge yourself with advanced materials to reach
        proficiency.
      </p>
    </div>
    <div class="col sp-2">
      <img src="../images/Languages/french - 2.jpeg" alt="Certification Exams" style="margin: 2rem 0" />
      <h3>Certification Exams and Proficiency Levels</h3>
      <p>
        Certify your French language skills with recognized exams such as DELF
        (Diplôme d'Études en Langue Française) and DALF (Diplôme Approfondi de
        Langue Française).
      </p>
      <p>
        These exams assess proficiency levels ranging from A1 (Beginner) to C2
        (Mastery), providing internationally recognized certification for
        academic and professional purposes.
      </p>
      <p>
        Prepare for exams tailored to your proficiency level and achieve
        certification as proof of your French language competence.
      </p>
      <a href="./registrationForm.html" class="btn plain">Discover More</a>
    </div>
  </div>

  {/* <!-- BANNER SECTION --> */}
  <div class="banner">
    <h2 id="banner-title">Application</h2>
    <p>
      Proficiency in French opens doors to international business, diplomacy,
      tourism, and cultural enrichment, offering opportunities in diverse
      fields and enriching global experiences.
    </p>
  </div>
    </div>
  )
}

export default French