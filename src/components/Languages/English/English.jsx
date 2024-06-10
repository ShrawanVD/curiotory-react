import "../Languages.css";
// import Footer from "../../../components/Footer/Footer";
// import Navv from "../../../components/Navv/Navv";
import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";

function English() {
  return (
    <div>
      <Newnavbar />
      <div className="hero">
        <h1>English Language</h1>
      </div>
      {/* <!-- TW0 COLUMN LAYOUT --> */}
      <div className="row">
        <div className="col sp-2">
          <img
            src="/Languages/english - 1.jpeg"
            alt="Language Learning"
            style={{ margin: "2rem 0" }}
          />
          <h3>From Beginner to Advanced Proficiency</h3>
          <p>
            Embark on a dynamic journey towards mastering English, commencing
            with essential vocabulary and grammar and progressing steadily to
            fluency and a nuanced cultural understanding.
          </p>
          <p>
            Begin with foundational resources to establish a robust framework,
            then advance through intermediate stages, refining your speaking,
            listening, reading, and writing skills.
          </p>
          <p>
            Immerse yourself in authentic English content, engage in
            conversational practice, and challenge yourself with advanced
            materials to attain genuine proficiency.
          </p>
        </div>
        <div className="col sp-2">
          <img
            src="/Languages/english - 2.jpeg"
            alt="Certification Exams"
            style={{ margin: "2rem 0" }}
          />
          <h3>Certification Exams and Proficiency Levels</h3>
          <p>
            Certify your English language proficiency with recognized exams such
            as the TOEFL (Test of English as a Foreign Language) or the IELTS
            (International English Language Testing System).
          </p>
          <p>
            These exams evaluate proficiency levels from beginner to advanced,
            offering globally recognized certification for academic and
            professional purposes.
          </p>

          <p>
            Tailor your exam preparation to your proficiency level and achieve
            certification as tangible evidence of your English language
            competence.
          </p>

          <p>
            <a href="/contactus" className="btn plain">
              Discover More
            </a>
          </p>
        </div>
      </div>

      {/* <!-- BANNER SECTION --> */}
      <div className="banner">
        <h2 id="banner-title">Application</h2>
        <p>
          Proficiency in English unlocks a myriad of opportunities in
          international business, education, diplomacy, and cultural exchange,
          enriching experiences and broadening horizons. Whether navigating
          English-speaking markets, engaging in cross-cultural communication, or
          pursuing academic endeavors in English-speaking countries, fluency in
          English enhances career prospects and fosters meaningful connections
          in today&apos;s globalized world.
        </p>
      </div>
      <Footer2 />
    </div>
  );
}

export default English;
