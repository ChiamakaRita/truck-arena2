import React from 'react';
import Image from "../../assets/images/Truck-Inspection.jpeg";
import { FaAward } from 'react-icons/fa';
import {AiOutlineCustomerService} from "react-icons/ai"
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="about">
      <h3>Get To Know</h3>
      <h2>About Us</h2>
      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={Image} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experienced</h5>
              <small>Technicians</small>
            </article>
            <article className="about__card">
              <AiOutlineCustomerService className="about__icon" />
              <h5>24/7 Customer</h5>
              <small>Services</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            facere modi architecto eos, optio incidunt ut quam quaerat eveniet
            ratione voluptate dolore hic molestiae at sapiente vero consectetur!
            Commodi, dolor!
          </p>
          <Link to="contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About
