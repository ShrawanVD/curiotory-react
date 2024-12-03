import React from "react";
import { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import iForm from "./InquiryForm.module.css";
import Newnavbar from "../../components/NewNavbar/Newnavbar";
import Footer2 from "../../components/Footer/Footer2";
import { useLocation } from "react-router-dom";
import config from "../../services/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Russian",
  "Mandarin",
  "Dutch",
  "Japanese",
  "Korean",
  "Portuguese",
  "Arabic",
  "Danish",
];

function InquiryForm() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const [userId, setUserId] = useState(null);
  const location = useLocation();

  // Parse the userId from URL query params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setUserId(queryParams.get("userId"));
  }, [location]);

  const handleLanguageChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLanguages(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect other form data here
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      languages: selectedLanguages,
      message: e.target.message.value,
      userId: userId, // Include userId in the form data
    };

    // "http://localhost:3000/inquiry"
    // `${config.apiUrl}/inquiry`

    // Submit form data to the backend
    try {
      const response = await fetch(`${config.apiUrl}/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const message = data.message || "Will connect you shortly, Thankyou!";
        toast.success(message, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Optionally, reset form fields
        e.target.reset();
        setSelectedLanguages([]); // Reset languages selection
      } else {
        toast.error("Form submission failed. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Newnavbar />
      <div className={iForm.inquiryFormContainer}>
        <h2>
          Want to start learning a language quickly and speak in it fluently
          too?
        </h2>
        <p>
          Then you’re at the right place. Whether getting a personal tutor,
          knowing your career options, or getting help in the language exam, our
          one-on-one sessions are there for you to be the ultimate game changer!
          Sign up now and you will hear from us at the speed of a lightning
          bolt!
        </p>

        <form className={iForm.inquiryForm} onSubmit={handleSubmit}>
          <div
            className={iForm.formRow}
            style={{
              marginTop: "1rem",
            }}
          >
            <div className={iForm.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className={iForm.formGroup}>
              <label htmlFor="email">Email ID</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>

          <div className={iForm.formRow}>
            <div className={iForm.formGroup}>
              <label htmlFor="phone">Phone No</label>
              <input type="tel" id="phone" placeholder="Phone Number" />
            </div>

            <div className={iForm.formGroup}>
              <label htmlFor="language">Language</label>
              <FormControl sx={{ width: "100%" }} variant="outlined" required>
                <Select
                  multiple
                  displayEmpty
                  value={selectedLanguages}
                  onChange={handleLanguageChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <span style={{ color: "rgba(0,0,0,0.6)" }}>
                          Languages
                        </span>
                      );
                    }
                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  sx={{ backgroundColor: "#ffffff", borderRadius: "5px" }}
                >
                  {languages.map((language) => (
                    <MenuItem key={language} value={language}>
                      <Checkbox
                        checked={selectedLanguages.includes(language)}
                      />
                      <ListItemText primary={language} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div
            className={iForm.formGroup}
            style={{
              margin: "0rem 1rem",
            }}
          >
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button type="submit" className={iForm.submitBtn}>
            Submit
          </button>
        </form>

        <div className={iForm.contactInfo}>
          <p>
            Corp. Off. No 16A, Floor 2, Tower A, Downtown City Vista, Fountain
            Road, Ashoka Nagar, Kharadi, Pune – 411014 <br />
            Mobile no. – 93739 02340 <br />
            E-mail Address -{" "}
            <a
              style={{
                color: "#00046C",
                fontFamily: "Raleway, sans-serif",
              }}
              href="mailto:partner@qurocity.ai"
            >
              {" "}
              partner@qurocity.ai
            </a>
          </p>
        </div>
      </div>
      <Footer2 />

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </>
  );
}

export default InquiryForm;
