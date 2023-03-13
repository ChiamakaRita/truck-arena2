import "./App.css";
import { NavbarLink } from "components/navbar/NavbarLink";
import HomeSection from "components/home/HomeSection";
import Footer from "components/footer/Footer";
import Contact from "components/contactfolder/Contact";
import SimpleAccordion from "components/accordian/Accordian";
import { BrowserRouter } from "react-router-dom";
import About from "components/aboutfolder/About";
import Services from "components/service/Service";

function App() {
  return (
    <BrowserRouter>
      <NavbarLink />
      <HomeSection />
      <About />
      <Services />
      <SimpleAccordion />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
