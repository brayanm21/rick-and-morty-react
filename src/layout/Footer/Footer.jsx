import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://github.com/brayanm21"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/brayan-mu%C3%B1oz-8bab3227a/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
          <div className="signature">
            <a
              href="https://github.com/brayanm21"
              target="_blank"
              rel="noreferrer"
              className="signature-link"
            >
              ❮❯ by Brayan Muñoz 2025
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;