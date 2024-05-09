import "../Languages.css";
import Footer from "../../../components/Footer/Footer";
import Navv from "../../../components/Navv/Navv";

function Korean() {
  return (
    <div>
      <Navv />
      <div className="hero">
        <h1>Korean Language</h1>
      </div>
      {/* <!-- TW0 COLUMN LAYOUT --> */}
      <div className="row">
        <div className="col sp-2">
          <img
            src="/Languages/korean - 1.jpeg"
            alt="Language Learning"
            style={{ margin: "2rem 0" }}
          />
          <h3>From Beginner to Advanced Proficiency</h3>
          <p>
            Begin an exciting journey to master Korean, starting with essential
            vocabulary and grammar, then advancing steadily toward fluency and a
            deep cultural understanding.
          </p>
          <p>
            Build a strong foundation with introductory resources, then progress
            through intermediate levels, refining your speaking, listening,
            reading, and writing skills.
          </p>
          <p>
            Immerse yourself in authentic Korean materials, engage in
            conversational practice, and challenge yourself with advanced
            content to achieve genuine proficiency.
          </p>
        </div>
        <div className="col sp-2">
          <img
            src="/Languages/korean - 2.jpeg"
            alt="Certification Exams"
            style={{ margin: "2rem 0" }}
          />

          <h3>Certification Exams and Proficiency Levels</h3>
          <p>
            Validate your Korean language skills with reputable exams such as
            the TOPIK (Test of Proficiency in Korean). These exams assess
            competency levels ranging from beginner to advanced, offering
            internationally recognized certification for academic and
            professional purposes.
          </p>
          <p>
            Prepare thoroughly for exams tailored to your skill level and obtain
            certification as tangible evidence of your Korean language ability.
          </p>

          <p>
            <a href="/teacherform" className="btn plain">
              Discover More
            </a>
          </p>
        </div>
      </div>

      {/* <!-- BANNER SECTION --> */}
      <div className="banner">
        <h2 id="banner-title">Application</h2>
        <p>
          Proficiency in Korean opens doors to diverse opportunities in
          international business, education, tourism, and cultural exchange,
          facilitating connections and enriching global experiences. Whether
          navigating Korean markets, fostering cross-cultural relationships, or
          immersing yourself in Korean-speaking communities, fluency in Korean
          enhances career prospects and fosters meaningful interactions in
          today&apos;s interconnected world.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Korean;
