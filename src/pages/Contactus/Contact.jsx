// import Footer from "../../components/Footer/Footer";
// import Navv from "../../components/Navv/Navv";
import Contactcss from "./Contact.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await fetch(
        "https://backendapi-1bfa.onrender.com/sendMsg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          alert(data.message);
        } else {
          alert("Form submitted successfully!");
        }
        window.location.reload();
      } else {
        // console.error('Error:', response.statusText);
        alert("Form submitted successfully!");
        window.location.reload();
      }
    } catch (error) {
      // console.error('Error:', error);
      alert("Form submitted successfully!");
      window.location.reload();
    }
  };

  return (
    <>
      <Newnavbar />
      <div className={Contactcss.contactUs}>
        <div className={Contactcss.contactusDetails}>
          <img
            width="auto"
            height="180px"
            src="/mascot/CapLift_crop.gif"
          />
          <h1>Contact Us</h1>
          <p>
            Corp. Off. No 16A, Floor 2, Tower A, Downtown City Vista, Fountain
            Road, Ashoka Nagar, Kharadi, Pune – 411014
            <br />
            <span id="mobile-span">Mobile no. – 93739 02340</span> <br />
            <span id="email-span">
              E-mail Address -
              <a href="mailto:Support@curiotory.com">Support@curiotory.com</a>
            </span>
          </p>
        </div>
        <div className={Contactcss.formSection}>
          <form
            method="POST"
            action="https://backendapi-1bfa.onrender.com/sendMsg"
            id="contactFormUrl"
            className={Contactcss.allForm}
            onSubmit={handleSubmit}
          >
            <label htmlFor="sender_name">Your Name</label>
            <br />
            <input type="text" name="fname" autoComplete="name" required />
            <br />
            <label htmlFor="sender_email">Your Email</label>
            <br />
            <input type="email" name="email" autoComplete="email" required />
            <br />
            <label htmlFor="sender_msg">Your Message</label>
            <br />
            <textarea name="msg" autoComplete="msg" required></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Contact;
