import "./Service.css";
import Technician from "../../assets/images/Truck-Inspection.jpeg";
import Truck from "../../assets/images/hero-truck-repair.jpeg";
import Training from "../../assets/images/truck-training.jpg";
import Tyre from "../../assets/images/tyre-mgnt.jpg";

const data = [
  {
    avater: Truck,
    name: "Truck Repair",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id libero, placeat deleniti ad at dolorum sapiente amet laudantium exercitationem unde magni minima incidunt, ex quos nulla animi explicabo est.",
  },
  {
    avater: Truck,
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
    avater: Training,
    name: "Truck Maintenance",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id libero, placeat deleniti ad at dolorum sapiente amet laudantium exercitationem unde magni minima incidunt, ex quos nulla animi explicabo est.",
  },
];

const Service = () => {
  return (
    <div className="container service">
      <h3>OUR SERVICE OFFERINGS</h3>
      <p className="service-p">
        The Truck Arena has a wide range of truck service management offerings
        you need to keep your fleet running and your business moving forward.
        The good news is, we can tailor truck repair services and fleet
        management to suit your unique business and environment. These are the
        range of our service offering
      </p>
      <div className="service-container">
        <div className="service_card">
          <div className="image-box">
            <img src={Technician} alt="" />
          </div>
          <div className="service-content">
            <h2>Truck Inspection & Uptime Service</h2>
            <p>
              Our Truck Inspection and Uptime (TIU) service is designed to
              deliver bespoke service to fleet owners who want scheduled
              inspection that will help them prevent costly unplanned truck
              break down. This service comes with dedicated professional
              technicians that will conduct regular diagnostics and inspection
              on your fleet and make recommendations on the necessary repairs or
              remediation actions.
            </p>
          </div>
        </div>
        <div className="service_card">
          <div className="image-box">
            <img src={Truck} alt="" />
          </div>
          <div className="service-content">
            <h2>Truck Repair & Maintenance</h2>
            <p>
              Our Truck Repair & Maintenance (TRM) service is designed to
              deliver scheduled inspection and diagnostics on your fleet to help
              prevent costly unplanned truck break down. TRM dedicated
              technicians will also repair any identified issues, replace faulty
              parts, and run scheduled maintenance service. This consolidates
              all activities required to keep your fleet and freight on
              schedule.
            </p>
          </div>
        </div>
        <div className="service_card">
          <div className="image-box">
            <img src={Tyre} alt="" />
          </div>
          <div className="service-content">
            <h2>Tyre Management Service</h2>
            <p>
              We implement practical Tyre management solution with a global
              view, using Digital Tyre inspection Solution to generate reports
              on tyre pressure, tread depth and overall tyre condition in
              real-time. Our tyre management scope covers monitoring,
              maintenance, management, and optimization. This will positively
              influence tyre cost per kilometer, vehicle uptime level, fuel
              efficiency and eco-friendliness.
            </p>
          </div>
        </div>
        <div className="service_card">
          <div className="image-box">
            <img src={Training} alt="" />
          </div>
          <div className="service-content">
            <h2>Truck Technician Training</h2>
            <p>
              We offer instructor led and hands-on training of technicians. The
              objective of the training is to ensure that the next generation of
              truck technicians are trained to tackle today's Truck repair
              challenges. We select our interns from individuals who have first
              degrees in Mechanical Engineering, Electrical Engineering or those
              who have passion for truck repairs without degree in Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
