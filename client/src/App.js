import React, { useState, useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for styles
import Modal from "react-modal";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import RegenerativeAgri from "./Components/Services/RegenerativeAgri/RegenerativeAgri.js";
import ProductTraceability from "./Components/Services/ProductTraceability/ProductTraceability.js";
import WildfireSolution from "./Components/Services/WildfireSolution/WildfireSolution.js";
import AgriInsurance from "./Components/Services/AgriInsurance/AgriInsurance.js";
import AgricLoan from "./Components/Services/AgricLoan/AgricLoan.js";
import AgriDrone from "./Components/Services/AgriDrone/AgriDrone.js";
import CropMonitoring from "./Components/Services/SatelliteMonitoring/CropMonitoring/CropMonitoring.js";
import ServiceFishMonitoring from "./Components/Services/SatelliteMonitoring/ServiceFishMonitoring/ServiceFishMonitoring.js";
import Policy from "./Components/Policy/Policy.js";
import Ecrop from "./Components/Product/Ecrop/Ecrop.js";
import Ecoloo from "./Components/Product/Ecoloo/Ecoloo.js";
// import Sustainability from './Components/Sustainability/Sustainability.js';
import Scrolltotop from "./Components/Scroll/Scrolltotop.js";
// import FeedbackForm from './Components/Feedback/Feedback.js';
// import Skywatch from './Components/Product/Skywatch/Skywatch.js';
// import Farmboundary from './Components/Services/Farmboundary/Farmboundary.js';
// import Cropadvisory from './Components/Services/Cropadvisory/Cropadvisory.js';
import Canonical from "./Components/Canonical.js";
// import ContactU from './Components/Home/ContactU/ContactU.js'
// import BlogDetailPg from './Components/Blog/BlogDetailPg.js';
import SchemaInjector from "./Components/SchemaMarkup/SchemaInjector.js";
// import Blog from './Components/Blog/Blog.js';
import Notfound from "./Components/Notfound.js";
import Footernew from "./Components/Headfoot/Footer/Footernew.js";
import { initFacebookPixel, trackPageView } from "./utils/facebookPixel.js";
import Navbar from "./Components/Headfoot/Header/Subnavbar/Navbar.js";
import { BlogProvider } from "./Components/Blog/BlogProvider.js";
const Home = lazy(() => import("./Components/Home/Home.js"));
const About = lazy(() => import("./Components/About/About.js"));
const Contact = lazy(() => import("./Components/Contact/Contact.js"));
const PrecisionGrowAi = lazy(() =>
  import("./Components/Services/PrecisionGrowAi/PrecisionGrowAi.js")
);
const Blogs = lazy(() => import("./Components/Blog/Blogs.js"));
const BlogDetailPgs = lazy(() => import("./Components/Blog/BlogDetailPages.js"));
const ContactU = lazy(() => import("./Components/Home/ContactU/ContactU.js"));
const Cropadvisory = lazy(() =>
  import("./Components/Services/Cropadvisory/Cropadvisory.js")
);
const Farmboundary = lazy(() =>
  import("./Components/Services/Farmboundary/Farmboundary.js")
);
const Skywatch = lazy(() =>
  import("./Components/Product/Skywatch/Skywatch.js")
);
const FeedbackForm = lazy(() => import("./Components/Feedback/Feedback.js"));
const Sustainability = lazy(() =>
  import("./Components/Sustainability/Sustainability.js")
);
// Set the root app element for the modal (for accessibility)
Modal.setAppElement("#root");

// Define routes at the top level outside the App function
export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/precision-grow-ai", component: PrecisionGrowAi },
  { path: "/regenerative-agriculture", component: RegenerativeAgri },
  { path: "/product-traceability", component: ProductTraceability },
  { path: "/wildfire-solution", component: WildfireSolution },
  { path: "/agri-insurance", component: AgriInsurance },
  { path: "/agri-loan", component: AgricLoan },
  { path: "/agri-drone", component: AgriDrone },
  { path: "/sustainability", component: Sustainability },
  { path: "/contact", component: Contact },
  { path: "/crop-monitoring", component: CropMonitoring },
  { path: "/fish-monitoring", component: ServiceFishMonitoring },
  { path: "/policy", component: Policy },
  { path: "/ecrop", component: Ecrop },
  { path: "/ecoloo", component: Ecoloo },
  { path: "/skywatch", component: Skywatch },
  { path: "/feedback", component: FeedbackForm },
  { path: "/farm-boundary", component: Farmboundary },
  { path: "/crop-advisory", component: Cropadvisory },
  { path: "/blog", component: Blogs },
  // { path: "/Notfound", component: Notfound },
  { path: "/post/:slug", component: BlogDetailPgs },
  { path: "*", component: Notfound }, // Wildcard route for unknown paths
];

function App() {
  const location = useLocation(); // ✅ Now it works inside Router

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    initFacebookPixel(); // Initialize Facebook Pixel on first load
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on route change
    trackPageView(); // Track page view on every route change
  }, [location]);

  return (
    // <BrowserRouter>
    <HelmetProvider>
       <BlogProvider>
      <SchemaInjector />

      <div className="app-wrapper">
        {/* Feedback Button and Modal */}
        <div id="FlypopButton" className="flypop-button">
          <button onClick={openModal}>
            <span>Give Feedback</span>
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Feedback Form"
            className="Modal"
            overlayClassName="Overlay"
          >
            <Suspense fallback={<div>Loading Feedback Form...</div>}>
              <FeedbackForm />
            </Suspense>
            <button onClick={closeModal} className="close-popup">
              <i className="fa fa-close"></i>
            </button>
          </Modal>
        </div>
        <Navbar />
        <Scrolltotop />
        {/* Add Canonical component here */}
        <Canonical /> 
    
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
        <LocationWrapper />
      </div>
       </BlogProvider>
    </HelmetProvider>
    // </BrowserRouter>
  );
}

const LocationWrapper = () => {
  const location = useLocation(); // Use the hook here

  // Check if the current route is "/contact"
  const showFooter = location.pathname !== "/contact"; // Don't show footer on "/contact" page

  return (
    <>
      {/* Conditionally render Footer */}
      {showFooter && <ContactU />}
      {showFooter && <Footernew />}
    </>
  );
};

export default App;
