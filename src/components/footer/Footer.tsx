import React, { useState } from "react";
import "./Footer.css";
import { Link as Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link
                  to="about"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link
                  to="services"
                >
                  Truck Inspection & Uptime Service
                </Link>
              </li>
              <li>
                <Link to="service">Truck Repair & Maintenance</Link>
              </li>
              <li>
                <Link to="service">Tyre Management Service</Link>
              </li>
              <li>
                <Link to="service">Truck Technician Training</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <Link to="/facebook">
                <BsFacebook />
              </Link>
              <Link to="/twitter">
                <FaTwitter />
              </Link>
              <Link to="/linkedin">
                <GrLinkedin />
              </Link>
              <Link to="/email">
                <MdOutlineEmail />
              </Link>
            </div>
          </div>
        </div>
        <p className="copyright">
          © 2023 The Truck Arena | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
