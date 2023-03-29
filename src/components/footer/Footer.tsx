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
                <LinkR
                  to="home"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  HOME
                </LinkR>
              </li>
              <li>
                <LinkR
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  ABOUT
                </LinkR>
              </li>
              <li>
                <LinkR
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  SERVICE
                </LinkR>
              </li>
              <li>
                <LinkR
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
                <LinkR
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  CONTACT
                </LinkR>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <LinkR
                  to="service"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Truck Inspection & Uptime Service
                </LinkR>
              </li>
              <li>
                <LinkR to="service">Truck Repair & Maintenance</LinkR>
              </li>
              <li>
                <LinkR to="service">Tyre Management Service</LinkR>
              </li>
              <li>
                <LinkR to="service">Truck Technician Training</LinkR>
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
