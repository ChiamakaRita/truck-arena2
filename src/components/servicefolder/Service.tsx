import React from "react";
import Tyre from "../../assets/images/tyre.png";
import Technician from "../../assets/images/technician.png";
import Truck from "../../assets/images/truck.png"
import "../../components/sharedStyle.css"
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avater: Truck,
    name: "Truck Repair",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id libero, placeat deleniti ad at dolorum sapiente amet laudantium exercitationem unde magni minima incidunt, ex quos nulla animi explicabo est.",
  },
  {
    avater: Tyre,
    name: "Tyre Management",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id libero, placeat deleniti ad at dolorum sapiente amet laudantium exercitationem unde magni minima incidunt, ex quos nulla animi explicabo est.",
  },
  {
    avater: Technician,
    name: "Training Of Technicians",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id libero, placeat deleniti ad at dolorum sapiente amet laudantium exercitationem unde magni minima incidunt, ex quos nulla animi explicabo est.",
  },
  {
    avater: Tyre,
    name: "Truck Maintenance",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id libero, placeat deleniti ad at dolorum sapiente amet laudantium exercitationem unde magni minima incidunt, ex quos nulla animi explicabo est.",
  },
];

const Service = () => {
  return (
    <section id="service" className="service">
      <h3>What People Know Us For</h3>
      <h2>Services</h2>
      <Swiper
        className="container service__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avater, name, description }, index) => {
          return (
            <SwiperSlide key={index} className="service">
              <div className="service__avater">
                <img src={avater} alt="service" />
              </div>
              <h5 className="service__name">{name}</h5>
              <small className="service__description">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Service;
