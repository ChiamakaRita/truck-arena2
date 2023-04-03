import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarLink.css";
// import { Link as LinkR } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import Fab from "@mui/material/Fab";
import logo from "../../assets/images/truck_arena_logo.png";

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
          <LinkR to="home" onClick={handleClose} className="logo">
            <img
              src={logo}
              alt="Truck Arena logo"
              width={60}
              className="image"
            />
          </LinkR>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <div className="first__align">
            <li>
              <LinkR
                onClick={handleClose}
                to="about"
               
              >
                ABOUT US
              </LinkR>
            </li>
            <li>
              <LinkR
                onClick={handleClose}
                to="services"
              >
                SERVICES
              </LinkR>
            </li>
          </div>
          <div className="second__align">
            <li>
              <LinkR
                onClick={handleNav}
                to="contact"
                
              >
                <Fab variant="extended">
                  <PhoneIcon sx={{ mr: 1 }} />
                  Contact
                </Fab>
              </LinkR>
            </li>
          </div>
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

