import Footer from "components/footer/Footer";
import { NavbarLink } from "components/navbar/NavbarLink";
import { GiStairsGoal } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Image from "../../assets/images/Truck-Inspection.jpeg";

const About = () => {
  return (
    <>
    <NavbarLink />
      <section id="about" className="about">
        <h3>THE TRUCK ARENA AT A GLANCE</h3>
        <div className="container about__container">
          <div className="about__us">
            <div className="about__us-image">
              <img src={Image} alt="about" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <GiStairsGoal className="about__icon" />
                <h5>Mission</h5>
                <small>
                  We are on a mission to build the first ultra-modern Truck
                  Management ecosystem in Nigeria.
                </small>
              </article>
            </div>
            <p>
              The Truck Arena is set up with a clear focus on delivering maximum
              vehicle uptime to ensure fleet owners focus on their core
              operations. With advanced diagnostic equipment, highly qualified
              service technicians and a comprehensive suite of service, our
              clients are assured of minimal monthly cost on truck repairs and
              maintenance.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
