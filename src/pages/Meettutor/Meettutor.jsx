import { useState, useEffect } from "react";
import Meetcss from "./Meettutor.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import config from "../../services/config";
import { Helmet } from "react-helmet";

function Meettutor() {
  const [allTeachers, setAllTeachers] = useState([]); // Store all fetched teachers
  const [teachers, setTeachers] = useState([]); // Teachers to be displayed
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationEnabled, setPaginationEnabled] = useState(true); // Manage pagination state
  const itemsPerPage = 11;
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchTeachers();
    addGTM();
  }, []);

  const addGTM = () => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SXJ40ZYWNV";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SXJ40ZYWNV');
    `;
    document.head.appendChild(script2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const language = document.getElementById("languageFilter").value;
    const native = document.getElementById("nativeFilter").value;

    let url = `${config.apiUrl}/filterteachers?`;
    if (language) url += `language=${language}&`;
    if (native) url += `native=${native}&`;
    url += `page=${currentPage}&limit=${itemsPerPage}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data.teachers);
        setPaginationEnabled(language === "" && native === "None");
        setNoResults(data.teachers.length === 0); // Set no results state
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    updateCurrentPageTeachers();
  }, [currentPage, allTeachers]);

  const fetchTeachers = () => {
    console.log("Fetching teachers for page", currentPage);
    const loadingSpinner = document.querySelector(`.${Meetcss.loadingSpinner}`);
    if (loadingSpinner) loadingSpinner.style.display = "block";

    fetch(`${config.apiUrl}/teachers`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        if (!data || !Array.isArray(data.teacher))
          throw new Error("Invalid data format");
        setAllTeachers(data.teacher); // Store all fetched teachers
        setLoading(false);
        if (loadingSpinner) loadingSpinner.style.display = "none";
      })
      .catch((error) => {
        console.error("Error fetching or processing data:", error.message);
        setLoading(false);
        if (loadingSpinner) loadingSpinner.style.display = "none";
      });
  };

  const updateCurrentPageTeachers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTeachers = allTeachers.slice(startIndex, endIndex);
    console.log("Current page teachers:", currentTeachers);
    setTeachers(currentTeachers); // Update the teachers to be displayed
  };

  const handlePageChange = (newPage) => {
    if (
      newPage > 0 &&
      newPage <= Math.ceil(allTeachers.length / itemsPerPage)
    ) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://qurocity.ai/meetthetutor" />
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458367327"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16458367327');
    `}
        </script>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PDFXMX24');`}
        </script>
      </Helmet>
      <Newnavbar />
      <div className={Meetcss.containerFluid}>
        <div className="row">
          <div className={`col-lg-7 ${Meetcss.leftSection}`}>
            <h2>Meet The Tutors</h2>
            <form onSubmit={handleSubmit}>
              <div className={Meetcss.formGroup}>
                <label htmlFor="languageFilter">Language</label>
                <select
                  className="form-control"
                  id="languageFilter"
                  name="languageFilter"
                >
                  <option value="">None</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Mandarin">Mandarin</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
              <div className={Meetcss.formGroup}>
                <label htmlFor="nativeFilter">Native</label>
                <select
                  className="form-control"
                  id="nativeFilter"
                  name="nativeFilter"
                >
                  <option value="None">None</option>
                  <option value="Native">Native</option>
                  <option value="Indian">Indian</option>
                </select>
              </div>
              <div className={Meetcss.meetTutorButtonCss}>
                <button type="submit" className="btn btn-primary">
                  FILTER
                </button>
              </div>
            </form>
          </div>
          <div className={`col-lg-5 ${Meetcss.rightSection}`}>
            <img
              src="/meet the tutor/meet-tutor-cover-image.svg"
              alt="placeholder image"
            />
          </div>
        </div>
        <div
          className={Meetcss.loadingSpinner}
          style={{ display: loading ? "block" : "none" }}
        >
          <div className={Meetcss.dotSpinner}>
            <div className={Meetcss.dotSpinnerDot}></div>
            <div className={Meetcss.dotSpinnerDot}></div>
            <div className={Meetcss.dotSpinnerDot}></div>
            <div className={Meetcss.dotSpinnerDot}></div>
            <div className={Meetcss.dotSpinnerDot}></div>
            <div className={Meetcss.dotSpinnerDot}></div>
            <div className={Meetcss.dotSpinnerDot}></div>
            <div className={Meetcss.dotSpinnerDot}></div>
          </div>
        </div>
        <div className={Meetcss.bodydiv} id="teacher-list">
          {teachers.map((teacher) => (
            <div key={teacher.id} className={Meetcss.teacherData}>
              <div className={Meetcss.photoInfo}>
                <img src={teacher.imgurl} alt="Teacher" />
                <div className={Meetcss.infoText}>
                  <h2
                    style={{
                      color: "#00046C",
                    }}
                  >
                    {teacher.name}
                  </h2>
                  <p>Language : {teacher.language}</p>
                  <p>Proficiency level : {teacher.proflevel}</p>
                  <p>No of students taught till date : {teacher.noStud}</p>
                  <p>Experience : {teacher.experience}</p>
                  <p>No of hours taught till date : {teacher.noHours}</p>
                </div>
              </div>
              <div className={Meetcss.videoButton}>
                <iframe
                  src={teacher.ytvideo}
                  title="Teacher Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className={Meetcss.customButton}>
                  <a href="/contactus">
                    <button className={Meetcss.btn1}>Send Message</button>
                  </a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform">
                    <button className={Meetcss.btn2}>Book Demo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          {noResults && (
            <div className={Meetcss.noResultsMessage}>
              No tutors found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {paginationEnabled && (
        <div className={Meetcss.paginationControls}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(allTeachers.length / itemsPerPage)
            }
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}

      <Footer2 />
    </div>
  );
}

export default Meettutor;
