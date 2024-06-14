import Meetcss from "./Meettutor.module.css";
// import Navv from "../../components/Navv/Navv";
// import Footer from "../../components/Footer/Footer";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import { useState, useEffect } from "react";

function Meettutor() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  // const fetchTeachers = () => {
  //   const loadingSpinner = document.querySelector('.loadingSpinner');
  //   loadingSpinner.style.display = 'block';

  //   fetch('https://backendapi-ay7s.onrender.com/teachers')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (!data || !Array.isArray(data.teacher)) {
  //         throw new Error('Invalid data format');
  //       }
  //       setTeachers(data.teacher);
  //       loadingSpinner.style.display = 'none';
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching or processing data:', error.message);
  //       // Display a user-friendly error message on the page if needed
  //       loadingSpinner.style.display = 'none';
  //       setLoading(false);
  //     });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const language = document.getElementById('languageFilter').value;
  //   const native = document.getElementById('nativeFilter').value;

  //   fetch(`https://backendapi-ay7s.onrender.com/filterteachers?language=${language}&native=${native}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setTeachers(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // };

  const fetchTeachers = () => {
    const loadingSpinner = document.querySelector(`.${Meetcss.loadingSpinner}`);

    // Display loading spinner
    if (loadingSpinner) {
      loadingSpinner.style.display = "block";
    }

    fetch("https://backendapi-1bfa.onrender.com/teachers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !Array.isArray(data.teacher)) {
          throw new Error("Invalid data format");
        }
        setTeachers(data.teacher);
        // Hide loading spinner
        if (loadingSpinner) {
          loadingSpinner.style.display = "none";
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching or processing data:", error.message);
        // Display a user-friendly error message on the page if needed
        // Hide loading spinner
        if (loadingSpinner) {
          loadingSpinner.style.display = "none";
        }
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const language = document.getElementById("languageFilter").value;
    const native = document.getElementById("nativeFilter").value;

    fetch(
      `https://backendapi-1bfa.onrender.com/filterteachers?language=${language}&native=${native}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <Newnavbar />
      <div>
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
                    <h2>{teacher.name}</h2>
                    <p>Language : {teacher.language}</p>
                    <p>Proficiency level : {teacher.proflevel}</p>
                    <p>No of student taught till date : {teacher.noStud}</p>
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
                      <button>Send Message</button>
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSezEFqtQiqJFcT8NcVjkoYIjZylKeMNOqP1fRuh8CxFhfgxkg/viewform">
                      <button>Book Demo</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Meettutor;
