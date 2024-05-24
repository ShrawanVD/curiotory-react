import "../Languages.css";
import Footer from "../../../components/Footer/Footer";
import Navv from "../../../components/Navv/Navv";

function Spanish() {
  return (
    <div>
      <Navv />
      <div className="hero">
        <h1>Spanish Language</h1>
      </div>
      {/* <!-- TW0 COLUMN LAYOUT --> */}
      <div className="row">
        <div className="col sp-2">
          <img
            src="/Languages/spanish - 1.jpeg"
            alt="Language Learning"
            style={{ margin: "2rem 0" }}
          />
          <h3>From Beginner to Advanced Proficiency</h3>
          <p>
            Embark on a journey toward mastering Spanish, starting with
            fundamental vocabulary and grammar, gradually progressing to fluency
            and a deeper cultural understanding.
          </p>
          <p>
            Begin with introductory resources to establish a strong base, then
            navigate through intermediate stages, refining speaking, listening,
            reading, and writing skills.
          </p>
          <p>
            Immerse yourself in authentic Spanish content, engage in
            conversational practice, and challenge yourself with advanced
            materials to achieve proficiency.
          </p>
        </div>
        <div className="col sp-2">
          <img
            src="/Languages/spanish - 2.jpeg"
            alt="Certification Exams"
            style={{ margin: "2rem 0" }}
          />
          <h3>Certification Exams and Proficiency Levels</h3>
          <p>
            Validate your Spanish language proficiency through recognized exams
            such as DELE (Diplomas de Español como Lengua Extranjera) and SIELE
            (Servicio Internacional de Evaluación de la Lengua Española).
          </p>
          <p>
            These exams assess proficiency levels ranging from A1 (Elementary)
            to C2 (Mastery), offering globally acknowledged certification for
            academic and professional endeavors.
          </p>
          <p>
            Prepare diligently for exams tailored to your proficiency level and
            earn certification as tangible evidence of your Spanish language
            competence.
          </p>
          <a href="/contactus" className="btn plain">
            Discover More
          </a>
        </div>
      </div>

      {/* <!-- BANNER SECTION --> */}
      <div className="banner">
        <h2 id="banner-title">Application</h2>
        <p>
          Proficiency in Spanish opens avenues in international business,
          diplomacy, tourism, and cultural exchange, fostering diverse
          opportunities and enriching global experiences. Whether navigating
          multinational negotiations, facilitating cross-cultural communication,
          or immersing in Spanish-speaking regions, proficiency in Spanish
          enhances career prospects and fosters meaningful connections across
          borders.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Spanish;
