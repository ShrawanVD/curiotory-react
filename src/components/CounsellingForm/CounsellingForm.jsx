import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import cForm from "./CounsellingForm.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../services/config";
import { useNavigate } from "react-router-dom";

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

function CounsellingForm() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const navigate = useNavigate(); // Hook to handle redirection

  const handleLanguageChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLanguages(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const formDataObject = {
      name: formData.get("name"),
      email: formData.get("email"),
      contactNumber: formData.get("contactNumber"),
      language: selectedLanguages, // Store selected languages as array
      category: "counseling", // Include category field
    };

    // "http://localhost:3000/counseling"
    // `${config.apiUrl}/counseling`

    try {
      const response = await fetch(`${config.apiUrl}/counseling`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });

      if (response.ok) {
        e.target.reset();
        setSelectedLanguages([]);
        navigate("/thankyou");
        // const data = await response.json();
        // const message = data.message || "Will connect you shortly, Thankyou!";
        // toast.success(message, {
        //   position: "bottom-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        // // Optionally, reset form fields
        // e.target.reset();
        // setSelectedLanguages([]); // Reset languages selection
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
    <div className={cForm.container}>
      {/* Left Side Content */}
      <div className={cForm.content}>
        <h2>Need guidance on language learning, career options, and more?</h2>
        <p>
          Find no more, contact us now to get a free personalized counselling
          session.
        </p>

        <h3>The benefits of our personalized sessions:</h3>
        <ul>
          <li>Connect with top coaches for expert guidance.</li>
          <li>Get personalized support tailored to your needs.</li>
          <li>
            Discover industry insights and career options for any language.
          </li>
          <li>Access a foolproof plan for mastering the language and exams.</li>
          <li>Get full-time support in your language journey.</li>
        </ul>
      </div>

      {/* Right Side Form */}
      <div className={cForm.form}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={cForm.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email-ID"
            className={cForm.input}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact No."
            className={cForm.input}
            required
          />

          <FormControl
            sx={{
              marginBottom: 2,
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
            }}
            variant="outlined"
            required
          >
            <Select
              multiple
              displayEmpty
              value={selectedLanguages}
              onChange={handleLanguageChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <span style={{ color: "rgba(0,0,0,0.6)" }}>Languages</span>
                  );
                }
                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              sx={{
                width: "100%",
                backgroundColor: "#ffffff",
                color: "#00046C",
                textAlign: "left",
              }}
            >
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  <Checkbox checked={selectedLanguages.includes(language)} />
                  <ListItemText primary={language} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <button type="submit" className={cForm.submitButton}>
            Schedule an enquiry
          </button>
        </form>
      </div>
      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </div>
  );
}

export default CounsellingForm;
