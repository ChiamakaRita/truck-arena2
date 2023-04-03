import "./App.css";
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from "components/home/HomeSection";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";
import ServiceComponent from "components/hiddenService/ServiceComponent";

export default observer(function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/about" element={< AboutPage />} />
          <Route path="/services" element={<ServiceComponent />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
  );
})
