import { Routes, Route } from "react-router-dom";
import "./App.css";
import { observer } from "mobx-react-lite";
import HomeSection from "components/home/HomeSection";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";
import ServiceComponent from "components/hiddenService/ServiceComponent";

export default observer(function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomeSection />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServiceComponent />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
});
