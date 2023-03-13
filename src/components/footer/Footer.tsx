import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/services">SERVICE</Link>
              </li>
              <li>
                <Link to="/question">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services">Tyre Management</Link>
              </li>
              <li>
                <Link to="/services">Truck Inspection</Link>
              </li>
              <li>
                <Link to="/services">Truck Maintenance</Link>
              </li>
              <li>
                <Link to="/services">Trainig of Truck Technician</Link>
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
              <Link to="/instagram">
                <BsInstagram />
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
