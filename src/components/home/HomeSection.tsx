import { useState } from "react";
import "./HomeSection.css";
import { Routes, Route, Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import About from "components/aboutfolder/About";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="home">
      <div className="content">
        <p>LOOKING FOR</p>
        <p>THE RIGHT TRUCK</p>
        <p>REPAIR SERVICES</p>
        <div className="btn-container">
          <Link
            className="link"
            to="/about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Learn More {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
          </Link>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
