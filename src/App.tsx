import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Servis from "./components/Service";
import Softwares from "./components/Softwares";
import Blog from "./components/Blog";
import CaseStudies from "./components/CaseStudies";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "./redux/darkModeSlice";

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
      <div className={isDarkMode?"bg-darkBlue text-secondary":"bg-secondary text-primary"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<Servis />} />
          <Route path="/software/:softwaresId" element={<Softwares />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route
            path="/case-studies/:caseStudiesId"
            element={<CaseStudies />}
          />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
