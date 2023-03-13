import React from 'react';
import "../../components/sharedStyle.css";
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What We Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>Truck Repair</h3>
          </div>
          <ul className="service__list">
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Tyre Management</h3>
          </div>
          <ul className="service__list">
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Truck Maintenance</h3>
          </div>
          <ul className="service__list">
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services
