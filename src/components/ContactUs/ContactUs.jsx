import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div>
        
        <div class="contact-us">
      <div class="contactus-details">
        <img
          width="143"
          height="143"
          src="../images/contact us/contact us page logo.png"
        />
        <h1>Contact Us</h1>
        <p>
          Corp. Off. No 16A, Floor 2, Tower A, Downtown City Vista, Fountain
          Road, Ashoka Nagar, Kharadi, Pune – 411014
          <br />
          <span id="mobile-span">Mobile no. – 93739 02340</span> <br />
          <span id="email-span"
            >E-mail Address -
            <a href="mailto:Support@curiotory.com">Support@curiotory.com</a>
          </span>
        </p>
      </div>
      <div class="form-section">
        <form
          method="POST"
          action="https://backendapi-ay7s.onrender.com/sendMsg"
          id="contactFormUrl"
          class="allForm"
        >
          <label for="sender_name">Your Name</label><br />
          <input type="text" name="fname" autocomplete="name" required /><br />
          <label for="sender_email">Your Email</label><br />
          <input
            type="email"
            name="email"
            autocomplete="email"
            required
          /><br />
          <label for="sender_msg">Your Message</label><br />
          <textarea name="msg" autocomplete="msg" required></textarea><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ContactUs