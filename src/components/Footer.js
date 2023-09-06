import React from "react";
import '../styles/footer.css';
import {FaGithubSquare ,FaInstagramSquare ,FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <footer className="footer-container">
        <h1 className="footer-title">Anisha</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#Project" className="footer-link">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer-social-links">
          <a href="github" className="social-link" target="_blank">
            <span className="social-icons"><FaGithubSquare /></span>
          </a>
          <a href="linkedin" className="social-link" target="_blank">
            <span className="social-icons"><FaLinkedin /></span>
          </a>

          <a href="instagram" className="social-link" target="_blank">
            <span className="social-icons"><FaInstagramSquare /></span>
          </a>
        </div>
        <div className="footer-bottom">
            <span className=" footer-copyright-txt">
                 copyright 2023 Anisha kumari | All Rights Reserved
            </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
