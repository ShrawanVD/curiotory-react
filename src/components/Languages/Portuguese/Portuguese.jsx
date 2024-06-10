import "../Languages.css";
// import Footer from "../../../components/Footer/Footer";
// import Navv from "../../../components/Navv/Navv";
import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";

function Portuguese() {
  return (
    <div>
      <Newnavbar />
      <div className="hero">
        <h1>Portuguese Language</h1>
      </div>
      {/* <!-- TW0 COLUMN LAYOUT --> */}
      <div className="row">
        <div className="col sp-2">
          <img
            src="/Languages/port - 1.jpeg"
            alt="Language Learning"
            style={{ margin: "2rem 0" }}
          />
          <h3>From Beginner to Advanced Proficiency</h3>
          <p>
            Embark on an enriching journey to master Portuguese, commencing with
            fundamental vocabulary and grammar, then progressing steadily
            towards fluency and a deep cultural understanding.
          </p>
          <p>
            Begin with introductory resources to establish a strong foundation,
            then advance through intermediate levels, refining your speaking,
            listening, reading, and writing skills.
          </p>
          <p>
            Immerse yourself in authentic Portuguese content, engage in
            conversational practice, and challenge yourself with advanced
            materials to attain genuine proficiency.
          </p>
        </div>
        <div className="col sp-2">
          <img
            src="/Languages/port - 2.jpeg"
            alt="Certification Exams"
            style={{ margin: "2rem 0" }}
          />

          <h3>Certification Exams and Proficiency Levels</h3>
          <p>
            Certify your Portuguese language skills with recognized exams such
            as the CELPE-Bras (Certificate of Proficiency in Portuguese for
            Foreigners).
          </p>
          <p>
            These exams assess proficiency levels ranging from A1 (Elementary)
            to C2 (Mastery), providing internationally recognized certification
            for academic and professional purposes.
          </p>

          <p>
            Prepare thoroughly for exams tailored to your skill level and obtain
            certification as tangible evidence of your Dutch language ability.
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
          Proficiency in Portuguese unlocks doors to diverse opportunities in
          international business, diplomacy, tourism, and cultural exchange,
          offering enriching experiences and fostering global connections.
          Whether navigating Portuguese-speaking markets, engaging in
          cross-cultural communication, or immersing yourself in
          Portuguese-speaking communities, fluency in Portuguese enhances career
          prospects and facilitates meaningful interactions in today&apos;s
          interconnected world.
        </p>
      </div>
      <Footer2 />
    </div>
  );
}

export default Portuguese;
