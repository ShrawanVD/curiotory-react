import './Meettutor.css'
import Navv from '../../components/Navv/Navv';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';


function Meettutor() {

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    const loadingSpinner = document.querySelector('.loading-spinner');
    loadingSpinner.style.display = 'block';

    fetch('https://backendapi-ay7s.onrender.com/teachers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!data || !Array.isArray(data.teacher)) {
          throw new Error('Invalid data format');
        }
        setTeachers(data.teacher);
        loadingSpinner.style.display = 'none';
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching or processing data:', error.message);
        // Display a user-friendly error message on the page if needed
        loadingSpinner.style.display = 'none';
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const language = document.getElementById('languageFilter').value;
    const native = document.getElementById('nativeFilter').value;

    fetch(`https://backendapi-ay7s.onrender.com/filterteachers?language=${language}&native=${native}`)
      .then(response => response.json())
      .then(data => {
        setTeachers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <Navv />
      <div>
      <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 left-section">
          <h2>Meet The Tutors</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="languageFilter">Language</label>
              <select className="form-control" id="languageFilter" name="languageFilter">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Mandarin">Mandarin</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nativeFilter">Native</label>
              <select className="form-control" id="nativeFilter" name="nativeFilter">
                <option value="Native">Native</option>
                <option value="Indian">Indian</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">FILTER</button>
          </form>
        </div>
        <div className="col-lg-5 right-section">
          <img src="/meet the tutor/meet-tutor-cover-image.svg" alt="placeholder image" />
        </div>
      </div>
      <div className="loading-spinner" style={{ display: loading ? 'block' : 'none' }}>
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </div>
      <div className="bodydiv" id="teacher-list">
        {teachers.map(teacher => (
          <div key={teacher.id} className="teacherData">
            <div className="photoInfo">
              <img src={teacher.imgurl} alt="Teacher" />
              <div className="infoText">
                <h2>{teacher.name}</h2>
                <p>Language : {teacher.language}</p>
                <p>Proficiency level : {teacher.proflevel}</p>
                <p>No of student taught till date : {teacher.noStud}</p>
                <p>Experience : {teacher.experience}</p>
                <p>No of hours taught till date : {teacher.noHours}</p>
              </div>
            </div>
            <div className="videoButton">
              <iframe src={teacher.ytvideo} title="Teacher Video" frameBorder="0" allowFullScreen></iframe>
              <div className="customButton">
                <button>Send Message</button>
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
      <Footer />
    </div>
  )
}

export default Meettutor