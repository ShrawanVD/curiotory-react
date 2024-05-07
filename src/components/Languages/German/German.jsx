import '../Languages.css'
import Footer from "../../../components/Footer/Footer";
import Navv from "../../../components/Navv/Navv";

function German() {
  return (
    <div>
        <Navv />
        <div className="hero">
    <h1>German Language</h1>
  </div>
  {/* <!-- TW0 COLUMN LAYOUT --> */}
  <div className="row">
    <div className="col sp-2">
      <img src="/Languages/german - 1.jpeg" alt="Language Learning" style={{margin: '2rem 0'}} />
      <h3>From Beginner to Advanced Proficiency</h3>
      <p>
        Embark on a transformative journey toward mastering German, beginning
        with essential vocabulary and grammar, and gradually progressing to
        fluency and a deep cultural understanding.
      </p>
      <p>
        Lay a solid groundwork with beginner resources, then navigate through
        intermediate levels, honing your speaking, listening, reading, and
        writing skills.
      </p>
      <p>
        Immerse yourself in authentic German content, practice conversing, and
        challenge yourself with advanced materials to achieve true
        proficiency.
      </p>
    </div>
    <div className="col sp-2">
      <img src="/Languages/german - 2.jpeg" alt="Certification Exams" style={{margin: '2rem 0'}} />
      <h3>Certification Exams and Proficiency Levels</h3>
      <p>
        Certify your German language proficiency through esteemed exams like
        the Goethe-Zertifikat series (ranging from A1 to C2).
      </p>

      <p>
        These exams evaluate proficiency levels from entry-level to mastery,
        offering globally recognized certification for academic and
        professional purposes.
      </p>
      <p>
        Tailor your exam preparation to your proficiency level and earn
        certification as tangible proof of your German language aptitude.
      </p>

      <p>
        <a href="/TeacherForm" className="btn plain">Discover More</a>
      </p>
    </div>
  </div>

  {/* <!-- BANNER SECTION --> */}
  <div className="banner">
    <h2 id="banner-title">Application</h2>
    <p>
      Proficiency in German unlocks opportunities in international business,
      diplomacy, tourism, and cultural exploration, enriching experiences and
      broadening horizons. Whether forging connections in global markets,
      participating in cross-cultural exchanges, or immersing yourself in
      German-speaking communities, fluency in German enhances career prospects
      and fosters meaningful connections in an interconnected world.
    </p>
  </div>
  <Footer />
    </div>
  )
}

export default German