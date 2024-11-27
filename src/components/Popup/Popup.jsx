import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Popup.css";
import config from '../../services/config';

function Popup({ onClose }) {
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null); // Store user ID

  // "http://localhost:3000/popup"
    `${config.apiUrl}/popup`

  const handleSignup = async () => {
    try {

      const response = await fetch(`${config.apiUrl}/popup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setUserId(data.userId); // Save user ID in state
        toast.success("You have subscribed!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          onClose(); // Close popup after 3 seconds (when toast disappears)
        }, 3000);
      } else {
        toast.error("Error: " + data.message, {
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
      toast.error("Error: Unable to sign up. Please try again later.", {
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
    <div className="popup-overlay">
      <div className="popup-content">
        <img src="/Index/logo-course.png" alt="Qurocity Logo" className="popup-logo" />
        <h2>Don’t Miss Out!</h2>
        <p>
          Get exclusive discounts, free personalized sessions, and all the latest language-related updates.
          Receive job alerts and important dates delivered right to your inbox!
        </p>

        <div className="popup-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="popup-email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="popup-signup-btn" onClick={handleSignup}>Sign Up</button>
        </div>

        <button className="popup-close-btn" onClick={onClose}>No Thanks</button>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Popup;
