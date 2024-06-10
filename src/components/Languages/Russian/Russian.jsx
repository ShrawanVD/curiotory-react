import "../Languages.css";
// import Footer from "../../../components/Footer/Footer";
// import Navv from "../../../components/Navv/Navv";
import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";

function Russian() {
  return (
    <div>
      <Newnavbar />
      <div className="hero">
        <h1>Russian Language</h1>
      </div>
      {/* <!-- TW0 COLUMN LAYOUT --> */}
      <div className="row">
        <div className="col sp-2">
          <img
            src="/Languages/russian - 1.jpeg"
            alt="Language Learning"
            style={{ margin: "2rem 0" }}
          />
          <h3>From Beginner to Advanced Proficiency</h3>
          <p>
            Embark on an exciting journey to master Russian, starting with
            fundamental vocabulary and grammar, then progressing steadily
            towards fluency and a rich cultural appreciation.
          </p>
          <p>
            Begin with foundational resources to establish a sturdy base, then
            advance through intermediate levels, refining your speaking,
            listening, reading, and writing skills.
          </p>
          <p>
            Immerse yourself in authentic Russian content, engage in
            conversation practice, and challenge yourself with advanced
            materials to reach true proficiency.
          </p>
        </div>
        <div className="col sp-2">
          <img
            src="/Languages/russian - 2.jpeg"
            alt="Certification Exams"
            style={{ margin: "2rem 0" }}
          />
          <h3>Certification Exams and Proficiency Levels</h3>
          <p>
            Certify your Russian language skills with reputable exams such as
            the TORFL (Test of Russian as a Foreign Language). These exams
            assess proficiency levels from A1 (Elementary) to C2 (Mastery),
            offering internationally recognized certification for academic and
            professional purposes.
          </p>

          <p>
            Prepare diligently for exams tailored to your proficiency level and
            obtain certification as concrete evidence of your Russian language
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
          Proficiency in Russian opens doors to diverse opportunities in
          international business, diplomacy, academia, and cultural exchange,
          facilitating connections and enriching global experiences. Whether
          navigating Russian-speaking markets, fostering diplomatic relations,
          or delving into the rich cultural heritage of Russian-speaking
          regions, fluency in Russian enhances career prospects and fosters
          meaningful interactions across borders.
        </p>
      </div>
      <Footer2 />
    </div>
  );
}

export default Russian;
