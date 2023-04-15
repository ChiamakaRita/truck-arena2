import { useState } from "react";
import "./HomeSection.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Service from "components/servicefolder2/Service";
import { NavbarLink } from "components/navbar/NavbarLink";
import Footer from "components/footer/Footer";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <NavbarLink />
      <div className="home">
        <div className="content">
          <p>LOOKING FOR</p>
          <p>THE RIGHT TRUCK</p>
          <p>REPAIR SERVICES</p>
          <div className="btn-container">
            <Link
              to="/about"
              className="link"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Learn More {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
            </Link>
          </div>
        </div>
      </div>
      <Service />
      <Footer />
    </>
  );
};

export default HomeSection;
