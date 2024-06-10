import teachercss from './Teacherform.module.css';
import React from 'react';
// import Footer from '../../components/Footer/Footer';
// import Covernav from "../../components/Navv/Covernav";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";

class Teacherform extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef(); // Create a ref for the form
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Creating FormData from form ref
    const formData = new FormData(this.formRef.current);

    fetch('https://backendapi-1bfa.onrender.com/submit_form', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        window.location.reload();  // Reloading the window on successful submission
      } else {
        throw new Error('Failed to submit form');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    });
  };

  render() {
    return (
      <div>
        <Newnavbar />
      <div className={teachercss.content}>
        <div className={teachercss.title}>
          <h1>Teacher Registration Form</h1>
        </div>
        <div className={teachercss.images}>
          <img src="/registration/registerTeacher.png" alt="" />
        </div>
        <div className={teachercss.registrationForm}>
          <form ref={this.formRef} onSubmit={this.handleSubmit} className="teachers">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required /><br />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required /><br />
          <label htmlFor="gender">Gender:</label>
        <div className={teachercss.genderOptions}>
          <input type="radio" id="male" name="gender" value="male" />Male
          <input type="radio" id="female" name="gender" value="female" />Female
          <input type="radio" id="preferNotToDisclose" name="gender" value="preferNotToDisclose" />Prefer not to say
        </div>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"  required/><br />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber"  required/><br />

        <label htmlFor="currentLocation">Current Location:</label>
        <input type="text" id="currentLocation" name="currentLocation"  required/><br />

        <label htmlFor="languages">I want to teach:</label>
        <div className={teachercss.languagesOptions}>
          <input type="checkbox" id="german" name="languages[]" value="german" />German
          <input type="checkbox" id="spanish" name="languages[]" value="spanish" />Spanish
          <input type="checkbox" id="french" name="languages[]" value="french" />French
          <input type="checkbox" id="japanese" name="languages[]" value="japanese" />Japanese
          <input type="checkbox" id="mandarin" name="languages[]" value="mandarin" />Mandarin
          <input type="checkbox" id="korean" name="languages[]" value="korean" />Korean
          <input type="checkbox" id="arabic" name="languages[]" value="arabic" />Arabic
          <input type="checkbox" id="italian" name="languages[]" value="italian" />Italian
          <input type="checkbox" id="sign" name="languages" value="sign" />ISL
          - Indian Sign Language
          <input type="checkbox" id="hindi" name="languages[]" value="hindi" />Hindi
          <input type="checkbox" id="sanskrit" name="languages[]" value="sanskrit" />Sanskrit
          <input type="checkbox" id="english" name="languages[]" value="english" />English
          <input type="checkbox" id="dutch" name="languages[]" value="dutch" />Dutch
          <input type="checkbox" id="portuguese" name="languages[]" value="portuguese" />Portuguese
          <input type="checkbox" id="russian" name="languages[]" value="russian" />Russian
        </div>

        <div className={teachercss.qualification}>
          <label htmlFor="qualification">Highest Qualification:</label>
          <div className={teachercss.qualificationSection}>
            <select id="qualification" name="qualification" required>
              <option value="" disabled selected>
                Please choose an option
              </option>
              <option value="high-school">High School</option>
              <option value="diploma">Diploma</option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="doctorate">Doctorate</option>
              <option value="mphill">Mphil</option>
              <option value="ma">MA</option>
              <option value="ba">BA</option>
              <option value="advance-diploma">Advance Diploma</option>
              <option value="diploma">Diploma</option>
              <option value="c1">C1</option>
              <option value="c2">C2</option>
              <option value="hsk-5">HSK 5</option>
              <option value="hsk-6">HSK 6</option>
              <option value="topik-II-5">TOPIK II - 5</option>
              <option value="topik-II-6">TOPIK II - 6</option>
              <option value="alpt">ALPT</option>
              <option value="n1">N1</option>
              <option value="n2">N2</option>
              <option value="celi4">CELI4 (CEFR)</option>
              <option value="celi5">CELI5 (CEFR)</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <label htmlFor="certifyingInstitution">Name of Certifying Institution:</label>
        <input type="text" id="certifyingInstitution" name="certifyingInstitution"/><br />


        <label htmlFor="student-group">I want to teach:</label>
        <div className={teachercss.studentGroupOptions}>
          <input type="checkbox" id="kids" name="student_group" value="kids" />Kids( 6 - 14 years)
          <input type="checkbox" id="young" name="student_group" value="young" />Young adults
          <input type="checkbox" id="working" name="student_group" value="working" />Working professionals
        </div>


        <label htmlFor="english-proficiency">I want to teach:</label>
        <div className={teachercss.englishLanguageProficiency}>
          <input type="checkbox" id="native" name="english_proficiency" value="native" />Native
          <input type="checkbox" id="bilingual" name="english_proficiency" value="bilingual" />Bilingual
          <input type="checkbox" id="professional" name="english_proficiency" value="professional" />Professional
        </div>


        <label htmlFor="experience">Teaching Experience:</label>
        <div className={teachercss.experienceOptions}>
          <input type="radio" id="one-year" name="experience" value="one-year" />1 year
          <input type="radio" id="two-five-years" name="experience" value="two-five-years" />2-5 years
          <input type="radio" id="five-ten-years" name="experience" value="five-ten-years" />5-10 years
          <input type="radio" id="ten-plus-year" name="experience" value="ten-plus-year" />more than 10 years
        </div>


        <label htmlFor="any-certificates">Do you have any teaching certificates?</label>
        <div className={teachercss.certificatesHaveOrNotOptions}>
          <input type="radio" id="yes" name="certificates" value="yes" />Yes
          <input type="radio" id="no" name="certificates" value="no" />No
        </div>


        <label htmlFor="uploadPhoto">Upload Your Recent Photo:</label>
          <input type="file"  name="uploadPhoto" required className={teachercss.chooseFile}/><br />


        <label htmlFor="uploadCV">Upload Your Updated CV:</label>
          <input type="file" id="uploadCV" name="uploadCV" required className={teachercss.chooseFile}/><br />


        <label htmlFor="expTranslation">Experience in Translation and Interpretation:</label>
        <textarea id="expTranslation" name="expTranslation"
          placeholder="Please describe your experience in translation and interpretation" rows="4" cols="50"
          ></textarea><br />


        <div className={teachercss.rateContainer}>
          <label htmlFor="ratePerHour">Rate Per Hour:</label>
          <div className={teachercss.rateInput}>
            <input type="number" id="ratePerHour" name="ratePerHour" placeholder="Enter rate" min="0" step="1"
               />
          </div>
        </div>


        <div className={teachercss.rateContainer}>
          <label htmlFor="ratePerMonth">Rate Per Month:</label>
          <div className={teachercss.rateInput}>
            <input type="number" id="ratePerMonth" name="ratePerMonth" placeholder="Enter rate" min="0" step="1"
               />
          </div>
        </div>


        <label htmlFor="additionalInformation">Any Other Additional Information:</label><br />
        <textarea id="additionalInformation" name="additionalInformation" rows="4"></textarea><br />


            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer2 />
      </div>
    );
  }
}

export default Teacherform;
