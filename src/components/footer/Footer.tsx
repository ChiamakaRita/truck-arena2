import React, { useState } from "react";
import "./Footer.css";
import { Link as LinkR } from "react-scroll";
import { Link as LinkS } from "react-router-dom";
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
                <LinkR to="/home" onClick={handleClose}></LinkR>
              </li>
              <li>
                <LinkR
                  onClick={handleClose}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  ABOUT
                </LinkR>
              </li>
              <li>
                <LinkR
                  onClick={handleClose}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  SERVICE
                </LinkR>
              </li>
              <li>
                <LinkR
                  onClick={handleClose}
                  activeClass="active"
                  to="questions"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  FAQ
                </LinkR>
              </li>
              <li>
                <LinkR to="/contact">CONTACT</LinkR>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <LinkS to="/services">Truck Inspection & Uptime Service</LinkS>
              </li>
              <li>
                <LinkS to="/services">Truck Repair & Maintenance</LinkS>
              </li>
              <li>
                <LinkS to="/services">Tyre Management Service</LinkS>
              </li>
              <li>
                <LinkS to="/services">Truck Technician Training</LinkS>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <LinkS to="/facebook">
                <BsFacebook />
              </LinkS>
              <LinkS to="/twitter">
                <FaTwitter />
              </LinkS>
              <LinkS to="/linkedin">
                <GrLinkedin />
              </LinkS>
              <LinkS to="/email">
                <MdOutlineEmail />
              </LinkS>
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
