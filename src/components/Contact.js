import React from "react";
import "../styles/contact.css";
import { LiaTelegram } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";

function Contact() {
  return (
    <section id="contact"className="contact-section">
      <h2 className="top-heading">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact-card">
              <span className="card-icon">
                {" "}
                <HiOutlineMail />
              </span>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">
                anishakumari200023@gmail.com
              </span>
              <a
                href="mailto:anishakumari200023@gmail.com"
                className="contact-button"
              >
                Write me{" "}
                <span className="write-me-icon">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
            <div className="contact-card">
              <span className="card-icon">
                <AiOutlineWhatsApp />
              </span>

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">7004659893</span>
              <a href="" className="contact-button">
                Write me{" "}
                <span className="write-me-icon">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
            <div className="contact-card">
              <span className="card-icon">
                <AiOutlineLinkedin />
              </span>

              <h3 className="contact-card-title">Linkedin</h3>
              <span className="contact-card-data">Anisha kumari</span>
              <a href="https://www.linkedin.com/in/anisha-kumari-9051a01b5/" className="contact-button">
                Write me{" "}
                <span className="write-me-icon">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Contact Me</h3>
          <form className="contact-form">
            <div className="form-div">
              <label className="tag-name">Name </label>
              <input
                type="text"
                name="name"
                className="input-area"
                placeholder="Insert your name here"
              />
            </div>

            <div className="form-div">
              <label className="tag-name">Email </label>
              <input
                type="text"
                name="email"
                className="input-area"
                placeholder="Insert your name here"
              />
            </div>

            <div className="form-div contact-form-area">
              <label className="tag-name">Your Message</label>
              <textarea
                cols="30"
                rows="30"
                name="message"
                className="input-area"
                placeholder="Write your message"
              />
            </div>
            <button className="send-button">
              Send Message
              <span className="message-icon">
                <LiaTelegram />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
