import "./App.css";
import { NavbarLink } from "components/navbar/NavbarLink";
import HomeSection from "components/home/HomeSection";
import Footer from "components/footer/Footer";
import Contact from "components/contactfolder/Contact";
import SimpleAccordion from "components/accordian/Accordian";
import Service from "components/servicefolder2/Service";
import About from "components/aboutfolder/About";

function App() {
  return (
    <>
      <NavbarLink />
      <HomeSection />
      <About />
      <Service />
      <SimpleAccordion />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
