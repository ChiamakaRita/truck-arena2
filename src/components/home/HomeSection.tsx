import {useState} from "react";
import "./HomeSection.css";
import { Link } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
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
              to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Learn More {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
            </Link>
          </div>
        </div>
      </div>
  );
};

export default HomeSection;
