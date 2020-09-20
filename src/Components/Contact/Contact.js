import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form action="">
            <div className="left">
              <input type="text" placeholder="Your Name" name="username" />
              <input type="text" placeholder="Your phone" name="phone" />
              <input type="text" placeholder="Your Email" name="email" />
              <input type="text" placeholder="Your Subject" name="subject" />
            </div>
            <div className="right">
              <textarea name="message" placeholder="Your Message" />
              <input type="submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
