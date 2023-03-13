import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarLink.css";
import { Link as LinkS } from "react-scroll";
import logo from "../../assets/images/truck_arena_logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import Fab from "@mui/material/Fab";

export const NavbarLink = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="container1">
        <div>
          <LinkS to="home" onClick={handleClose} className="logo">
            <img
              src={logo}
              alt="Truck Arena logo"
              width={60}
              className="image"
            />
          </LinkS>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <LinkS
              onClick={handleClose}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              ABOUT US
            </LinkS>
          </li>
          <li>
            <LinkS
              onClick={handleClose}
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              SERVICES
            </LinkS>
          </li>
          <li>
            <LinkS
              onClick={handleClose}
              activeClass="active"
              to="questions"
              spy={true}
              smooth={true}
              duration={500}
            >
              FQA
            </LinkS>
          </li>
          <li>
            <LinkS
              onClick={handleNav}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Fab variant="extended">
                <PhoneIcon sx={{ mr: 1 }} />
                Contact
              </Fab>
            </LinkS>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={25} style={{ color: "#000080" }} />
          ) : (
            <FaBars style={{ color: "#000080" }} size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

// export default NavbarLink;
