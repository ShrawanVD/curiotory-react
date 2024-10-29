// Popup.jsx
import React from "react";
import "./Popup.css";

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Sign up for Updates!</h2>
        <input type="email" placeholder="Enter your email" />
        <button onClick={onClose}>Sign Up</button>
      </div>
    </div>
  );
}

export default Popup;
