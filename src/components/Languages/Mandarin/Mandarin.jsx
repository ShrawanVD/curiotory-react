import React from 'react'
import './Languages.css'

function Mandarin() {
  return (
    <div>
        
        <div class="hero">
    <h1>Mandarin Language</h1>
  </div>
  {/* <!-- TW0 COLUMN LAYOUT --> */}
  <div class="row">
    <div class="col sp-2">
      <img src="../images/Languages/mandarin - 1.jpeg" alt="Language Learning" style="margin: 2rem 0" />
      <h3>From Beginner to Advanced Proficiency</h3>
      <p>
        Explore the rich tapestry of Mandarin Chinese as you progress from
        foundational vocabulary and grammar to nuanced fluency and cultural
        acumen. Begin your journey with basic greetings and essential phrases,
        then delve deeper into conversational skills and comprehension.
      </p>
      <p>
        Advance through intermediate levels, honing your ability to express
        ideas and understand nuances of tone and context.
      </p>
      <p>
        Embrace authentic Mandarin content, from traditional texts to
        contemporary media, and engage in immersive experiences to refine your
        language skills and cultural understanding.
      </p>
    </div>
    <div class="col sp-2">
      <img src="../images/Languages/mandarin - 2.jpeg" alt="Certification Exams" style="margin: 2rem 0" />
      <h3>Certification Exams and Proficiency Levels</h3>
      <p>
        Certify your command of Mandarin Chinese with internationally
        recognized exams such as the HSK (Hanyu Shuiping Kaoshi) or the TOCFL
        (Test of Chinese as a Foreign Language).
      </p>
      <p>
        These assessments measure proficiency levels from elementary to
        advanced, evaluating your listening, speaking, reading, and writing
        abilities.
      </p>

      <p>
        Whether pursuing academic or professional goals, achieving
        certification demonstrates your proficiency and opens doors to
        opportunities in education, business, and beyond.
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
      Mastering Mandarin Chinese offers a gateway to a myriad of opportunities
      across diverse fields. In international business, fluency in Mandarin
      facilitates communication and negotiation with Chinese partners and
      clients, enhancing collaboration and driving success in global markets.
      In diplomacy, proficiency in Mandarin fosters mutual understanding and
      strengthens diplomatic ties between nations. Moreover, cultural
      enrichment and personal growth await those who immerse themselves in
      Mandarin-speaking communities, offering unique insights into the rich
      heritage and traditions of Chinese culture.
    </p>
  </div>
    </div>
  )
}

export default Mandarin