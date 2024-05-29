import fr from "./Frenchnew.module.css";

function Frenchnew() {
  return (
    <>
      <div className={fr.container}>
        {/* <header className={fr.header}>
          <div className={fr.headerLeft}>
            <img
              src="/Index/logo.png"
              alt="Curiotory Logo"
              className={fr.logo}
            />
          </div>
          <div className={fr.headerRight}>
            <a href="#" className={fr.studentPortal}>
              Student Portal {" >|"}
            </a>
          </div>
        </header> */}
        <header className={fr.header}>
          <div className={fr.logoContainer}>
            <img
              src="/Index/logo.png"
              alt="Curiotory Logo"
              className={fr.logo}
            />
          </div>
          <div className={fr.headerRight}>
            <a href="#" className={fr.studentPortal}>
              Student Portal
            </a>
          </div>
        </header>
        <div className={fr.imgline}>
          <img src="/navbar/navbarLine.png" />
        </div>
        <div className={fr.navList}>
          <nav className={fr.nav}>
            <a href="#">Solutions</a>
            <a href="#">Languages</a>
            <a href="#">Meet Our Tutors</a>
            <a href="#">Blogs</a>
            <a href="#">About us</a>
            <a href="#" className={fr.contactUs}>
              <span>Contact us</span>
            </a>
          </nav>
        </div>
        <main className={fr.main}>
          <section className={fr.hero}>
            <h1>
              Indulge in the epitome of <br />
              <span className={fr.highlight}>French Culture</span>
            </h1>
            <hr className={fr.horizontalLine} />
            <div className={fr.stats}>
              <span>⭐ 4.5</span>
              <span>• 11,302 students</span>
              <span>
                • <a href="#">Average duration: 70Hrs</a>
              </span>
            </div>
            <p>
              Mastering French elevates both career and personal life, offering
              diverse opportunities in India and abroad. Fluency in French
              enhances career prospects and enriches personal experiences
              globally.
            </p>
          </section>
        </main>
      </div>

      {/* Why learn French section */}
      <div className={fr.learnFrenchContainer}>
        <div className={fr.learnFrenchHeading}>
          <h2>Why Learn French</h2>
        </div>
        <div className={fr.whyLearnFrench}>
          <div className={fr.whyLearnFrenchLeft}>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft1.png"
                alt="Diplomacy"
                className={fr.learnFrenchIcon}
              />
              <p>
                French, official in 29 countries and key in UN, EU, and Red
                Cross, opens doors in diplomacy, business, and NGOs.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft2.png"
                alt="Communication"
                className={fr.learnFrenchIcon}
              />
              <p>
                Fluent French ensures seamless communication and enriched
                experiences in Francophone regions.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft3.png"
                alt="Economic"
                className={fr.learnFrenchIcon}
              />
              <p>
                French proficiency unlocks markets in France, Africa, bolstering
                economic.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft4.png"
                alt="Scholarship"
                className={fr.learnFrenchIcon}
              />
              <p>
                French proficiency facilitates scholarships, studies in France,
                broadening horizons.
              </p>
            </div>
            <div className={fr.learnFrenchReason}>
              <img
                src="/Languages/whyLearnFrenchLeft5.png"
                alt="Job"
                className={fr.learnFrenchIcon}
              />
              <p>
                Multinational demand for French speakers spans sectors like
                tourism, IT.
              </p>
            </div>
          </div>
          <div className={fr.whyLearnFrenchRight}>
            <img
              src="/Languages/JOBS 1.png"
              alt="Main"
              className={fr.learnFrenchMainImage}
            />
          </div>
        </div>
      </div>

      {/* benefits of learning */}
      <div className={fr.benefitOfLearningSection}>
        <h2>Benefits of learning French language</h2>
        <div className={fr.benefitsLearningFrench}>
          <div className={fr.benefitLeft}>
            <img
              src="/Languages/benefits11.png"
              alt="Cultural"
              className={fr.benefitLeftIcon}
            />
            <img
              src="/Languages/benefits12.png"
              alt="Global"
              className={fr.benefitLeftIcon}
            />
          </div>
          <div className={fr.benefitRight}>
            <p>
              <strong style={{ color: "#EF4B2B" }}>Cultural Riches:</strong>{" "}
              Learning French opens doors to France&apos;s rich culture,
              literature, and arts.
            </p>
            <p>
              <strong style={{ color: "#F4AD28" }}>
                Global Opportunities:
              </strong>{" "}
              French is spoken in many countries, enhancing career prospects
              globally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frenchnew;
