import "../Languages.css";
// import Footer from "../../../components/Footer/Footer";
// import Navv from "../../../components/Navv/Navv";
import Newnavbar from "../../../components/NewNavbar/Newnavbar";
import Footer2 from "../../../components/Footer/Footer2";

function Dutch() {
  return (
    <div>
      <Newnavbar />
      <div className="hero">
        <h1>Dutch Language</h1>
      </div>
      {/* <!-- TW0 COLUMN LAYOUT --> */}
      <div className="row">
        <div className="col sp-2">
          <img
            src="/Languages/dutch - 1.jpeg"
            alt="Language Learning"
            style={{ margin: "2rem 0" }}
          />
          <h3>From Beginner to Advanced Proficiency</h3>
          <p>
            Embark on an exciting journey to master Dutch, beginning with the
            essentials of vocabulary and grammar, then advancing steadily
            towards fluency and a profound cultural understanding.
          </p>
          <p>
            Start with foundational resources to build a solid base, then
            progress through intermediate levels, refining your speaking,
            listening, reading, and writing skills.
          </p>
          <p>
            Immerse yourself in authentic Dutch materials, engage in
            conversational exercises, and challenge yourself with advanced
            content to achieve genuine proficiency.
          </p>
        </div>
        <div className="col sp-2">
          <img
            src="/Languages/dutch - 2.jpeg"
            alt="Certification Exams"
            style={{ margin: "2rem 0" }}
          />
          <h3>Certification Exams and Proficiency Levels</h3>
          <p>
            Validate your Dutch language skills with reputable exams such as the
            NT2 (Nederlands als Tweede Taal) or the CNaVT (Certificaat
            Nederlands als Vreemde Taal).
          </p>
          <p>
            These exams assess competency levels ranging from beginner to
            advanced, offering internationally recognized certification for
            academic and professional purposes.
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
          Proficiency in Dutch opens doors to various opportunities in
          international business, education, tourism, and cultural exchange,
          facilitating connections and enriching global experiences. Whether
          navigating Dutch-speaking markets, fostering cross-cultural
          relationships, or immersing yourself in Dutch-speaking communities,
          fluency in Dutch enhances career prospects and fosters meaningful
          interactions in today&apos;s interconnected world.
        </p>
      </div>
      <Footer2 />
    </div>
  );
}

export default Dutch;
