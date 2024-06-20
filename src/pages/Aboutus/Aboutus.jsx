// import Footer from "../../components/Footer/Footer";
// import Covernav from "../../components/Navv/Covernav";
import Aboutuscss from "./About.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";

function Aboutus() {
  return (
    <>
      {/* <Covernav /> */}
      <Newnavbar />
      {/* <!-- Heading section - top --> */}

      <div className={Aboutuscss.headingTag}>
        <h1>
          We are one of the India&apos;s <br />
          fastest growing language <br />
          learning platforms
        </h1>
        <div className={Aboutuscss.stats}>
          <ul>
            {/* + +{" "}  */}
            <li>
              <span className={Aboutuscss.boldFirst}>30+ years</span> of
              combined language training experience
            </li>
            <li>
              Network of
              <span className={Aboutuscss.boldFirst}>
                {" "}
                5K+ language specialists
              </span>{" "}
              & growing
            </li>
            <li>
              Students from{" "}
              <span className={Aboutuscss.boldFirst}>15+ countries</span> on 3
              continents
            </li>
          </ul>
        </div>
        {/* <!-- <a className="register-button" href="">Get Started</a> --> */}
        <div>
        <img
              src="/mascot/Trophy.gif"
              alt="mascot trophy"
              className={Aboutuscss.mascotAbout}
              type="gif"
            />
        </div>
        <a
          className={Aboutuscss.registerButton}
          href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>

      {/* <!-- sidebar to be opened after clicking the register button --> */}

      <div className={Aboutuscss.sidebar} id="sidebar">
        <div className={Aboutuscss.closeBtn} onClick="closeSidebar()">
          ×
        </div>
        <h1>Quick and Simple enrollment</h1>
        <form
          className={Aboutuscss.registrationForm}
          action="https://backendapi-ay7s.onrender.com/enroll"
          method="post"
          id="quickFormUrl"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="fullName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />

          <label htmlFor="languages">Languages:</label>
          <select id="languages" name="languages" required>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Hindi">Hindi</option>
            <option value="Sanskrit">Sanskrit</option>
            <option value="German">German</option>
            <option value="Japanese">Japanese</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Korean">Korean</option>
            <option value="Italian">Italian</option>
          </select>
          {/* <!-- onClick="registerNow()" --> */}
          <button type="submit" className={Aboutuscss.registerNowBtn}>
            Register Now
          </button>
        </form>
      </div>

      {/* <!-- bio section --> */}

      <div className={Aboutuscss.bio}>
        <p>
          Right about now, more than 1.2 billion people across the world are
          speaking a foreign language. But we, at Curiotory, are not in the
          business of merely empowering you to speak a new language. Founded in
          2020, Curiotory is an ambitious, India-based start-up looking to
          reimagine the EduTech space by ensuring you can speak, read, write and
          listen to new languages. In the process, we enable people of all ages
          to set and achieve breakthrough personal or professional goals.
        </p>
      </div>

      {/* <!-- tabular section --> */}

      <div className={Aboutuscss.tableComparison}>
        <table>
          <tr>
            <td>
              India’s fastest-growing language learning partner for individuals,
              educational institutions, and corporate companies
            </td>
            <td>
              One platform that offers customizable and scalable Asian,
              European, and Indian Sign language courses
            </td>
          </tr>
          <tr>
            <td>
              Live and interactive lectures Hundreds of students from 15 +
              countries across 3 continents on-board
            </td>
            <td>
              A massive and still growing ecosystem of Indian and native private
              tutors with a proven track record
            </td>
          </tr>
          <tr>
            <td>
              World-class preparation for globally-recognized language
              certifications
            </td>
            <td>
              Real-time analytics and custom reports to enhance learning
              outcomes
            </td>
          </tr>
        </table>
      </div>

      {/* <!-- origin story section --> */}

      <div className={Aboutuscss.originStorySection}>
        <div className={Aboutuscss.leftSide}>
          <img src="/about us/origin.png" alt="origin" />
        </div>

        <div className={Aboutuscss.rightSide}>
          <h1>Origin Story</h1>
          <br />
          <br />
          <p>
            Like any good origin story, ours also started with addressing a
            problem. In 2020, with the pandemic taking a severe toll, we
            realized that individuals, whether kids or adults, need to be
            empowered to control their destinies. Considering how quickly the
            world is shrinking, we know that learning new languages can truly
            help unlock and maximize human potential. <br />
            <br />
            Just over two years later, we’re now one of India’s fastest-growing
            language learning partners of choice.
          </p>
        </div>
      </div>

      {/* <!-- vision section --> */}

      <div className={Aboutuscss.visionSection}>
        <h1>Why we are here</h1>

        <div className={Aboutuscss.visionOfOurs}>
          <div className={Aboutuscss.leftSide}>
            <img src="/about us/vision.png" alt="vision" />
          </div>

          <div className={Aboutuscss.rightSide}>
            <h1>
              Our <br />
              <span className={Aboutuscss.boldFirst}>Vision</span>
            </h1>
            <br />
            <br />
            <p>
              To empower individuals and institutions to tap into the power of
              learning foreign languages to transform simple curiosities into
              career-making and life-changing experiences.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- mission section --> */}

      <div className={Aboutuscss.missionSection}>
        <div className={Aboutuscss.leftSide}>
          <h1>
            Our <span className={Aboutuscss.boldFirst}>Mission</span> <br />
          </h1>
          <br />
          <p>
            To create transformative multilingual journeys that contribute to a
            more inclusive and empathetic society where language is neither a
            barrier nor a threat – but a bridge that brings people together.
          </p>
        </div>

        <div className={Aboutuscss.rightSide}>
          <img
            loading="lazy"
            decoding="async"
            width="463"
            height="611"
            src="/about us/mission.png"
            alt="mission"
          />
        </div>
      </div>

      {/* <!-- founder sections --> */}

      <div className={Aboutuscss.founderSection}>
        <h1>Meet our Founders</h1>

        <div className={Aboutuscss.persons}>
          <div className={Aboutuscss.sheetalMam}>
            <div className={Aboutuscss.image}>
              <img src="/about us/Sheetal-mam.jpeg" alt="sheetal" />
            </div>
            <div className={Aboutuscss.name}>
              <h1>
                <span className={Aboutuscss.boldFirst}>Sheetal</span> Ramkumar
              </h1>
            </div>
            <div className={Aboutuscss.info}>
              <p>
                Sheetal, CEO of Curiotory, brings two decades of education
                experience and is celebrated among India&apos;s influential
                women and business leaders. With an MBA from Symbiosis, a PG in
                PR & Advertising from MICA, and a diploma in International
                Telecom System Management from IIT Delhi. She&apos;s a
                powerhouse in both business and technical domains. Recognized
                among the 21 Most Influential Women Leaders in India and the 10
                Most Inspiring Business Leaders, Sheetal is shaping the future
                of Curiotory with her leadership and expertise.
              </p>
            </div>
          </div>

          <div className={Aboutuscss.ramSir}>
            <div className={Aboutuscss.image}>
              <img src="/about us/Ram-sir.jpg" alt="Ram" />
            </div>
            <div className={Aboutuscss.name}>
              <h1>
                <span className={Aboutuscss.boldFirst}>Ramkumar</span> Kayarat
              </h1>
            </div>
            <div className={Aboutuscss.info}>
              <p>
                Ram, Curiotory&apos;s Chief People and Culture Officer, brings
                over two decades of Telecom industry experience, prioritizing
                customer-centric approaches. With a background at Idea Cellular
                Ltd., Reliance Communications, and Tata Communications,
                he&apos;s adept in learning development. Besides, Ram is an avid
                football enthusiast, adventurer, cyclist, trekker, and sports
                blogger. Holding an MBA from IIM Ahmedabad and a PGCBM from XLRI
                Jamshedpur, he&apos;s committed to fostering a collaborative
                internal culture at Curiotory for mutual success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Aboutus;
