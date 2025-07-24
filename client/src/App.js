import React, { useState, useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for styles
import Modal from "react-modal";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import RegenerativeAgri from "./Components/Services/RegenerativeAgri/RegenerativeAgri.js";
// import ProductTraceability from "./Components/Services/ProductTraceability/ProductTraceability.js";
// import WildfireSolution from "./Components/Services/WildfireSolution/WildfireSolution.js";
// import AgriInsurance from "./Components/Services/AgriInsurance/AgriInsurance.js";
// import AgricLoan from "./Components/Services/AgricLoan/AgricLoan.js";
// import AgriDrone from "./Components/Services/AgriDrone/AgriDrone.js";
import CropMonitoring from "./Components/Services/SatelliteMonitoring/CropMonitoring/CropMonitoring.js";
import ServiceFishMonitoring from "./Components/Services/SatelliteMonitoring/ServiceFishMonitoring/ServiceFishMonitoring.js";
// import Policy from "./Components/Policy/Policy.js";
import Ecrop from "./Components/Product/Ecrop/Ecrop.js";
import Ecoloo from "./Components/Product/Ecoloo/Ecoloo.js";
import Scrolltotop from "./Components/Scroll/Scrolltotop.js";
import Canonical from "./Components/Canonical.js";
import SchemaInjector from "./Components/SchemaMarkup/SchemaInjector.js";
// import Notfound from "./Components/Notfound.js";
import Footernew from "./Components/Headfoot/Footer/Footernew.js";
import { initFacebookPixel, trackPageView } from "./utils/facebookPixel.js";
import Navbar from "./Components/Headfoot/Header/Subnavbar/Navbar.js";
// import KrishakBazar from "./Components/Services/KrishakBazar/KrishakBazar.js";
// import Agristack from "./Components/Services/Agristack/Agristack.js";
// import CropConsultancy from "./Components/Services/CropConsultancy/CropConsultancy.js";
// import SustainableFarmingSolutions from "./Components/Services/SustainableFarmingSolutions/SustainableFarmingSolutions.js";
// import TechnologyIntegration from "./Components/Services/TechnologyIntegration/TechnologyIntegration.js";
// import BuyProduct from "./Components/Product/BuyProduct/BuyProduct.js";
// import Publications from "./Components/Home/Publications/Publications.js";
import GlobalProvider from "./Contexts/GlobalProvider.js";
import MoreReads from "./Components/MoreReads/MoreReads.js";

const Home = lazy(() => import("./Components/Home/Home.js"));
const About = lazy(() => import("./Components/About/About.js"));
const Contact = lazy(() => import("./Components/Contact/Contact.js"));
const PrecisionGrowAi = lazy(() => import("./Components/Services/PrecisionGrowAi/PrecisionGrowAi.js"));
const Blogs = lazy(() => import("./Components/Blog/Blogs.js"));
const BlogDetailPgs = lazy(() => import("./Components/Blog/BlogDetailPages.js"));
const ContactU = lazy(() => import("./Components/Home/ContactU/ContactU.js"));
const Cropadvisory = lazy(() => import("./Components/Services/Cropadvisory/Cropadvisory.js"));
const Farmboundary = lazy(() => import("./Components/Services/Farmboundary/Farmboundary.js"));
const Skywatch = lazy(() => import("./Components/Product/Skywatch/Skywatch.js"));
const FeedbackForm = lazy(() => import("./Components/Feedback/Feedback.js"));
const Sustainability = lazy(() => import("./Components/Sustainability/Sustainability.js"));
const Publications = lazy(() => import("./Components/Home/Publications/Publications.js"));


const RegenerativeAgri = lazy(() => import("./Components/Services/RegenerativeAgri/RegenerativeAgri.js"));
const ProductTraceability = lazy(() => import("./Components/Services/ProductTraceability/ProductTraceability.js"));
const WildfireSolution = lazy(() => import("./Components/Services/WildfireSolution/WildfireSolution.js"));

const AgriInsurance = lazy(() => import("./Components/Services/AgriInsurance/AgriInsurance.js"));
const AgricLoan = lazy(() => import("./Components/Services/AgricLoan/AgricLoan.js"));
const AgriDrone = lazy(() => import("./Components/Services/AgriDrone/AgriDrone.js"));

// const CropMonitoring = lazy(() => import("./Components/Services/SatelliteMonitoring/CropMonitoring/CropMonitoring.js"));
// const ServiceFishMonitoring = lazy(() => import("./Components/Services/SatelliteMonitoring/ServiceFishMonitoring/ServiceFishMonitoring.js"));
const Policy = lazy(() => import("./Components/Policy/Policy.js"));

// const Ecrop = lazy(() => import("./Components/Product/Ecrop/Ecrop.js"));
// const Ecoloo = lazy(() => import("./Components/Product/Ecoloo/Ecoloo.js"));
const KrishakBazar = lazy(() => import("./Components/Services/KrishakBazar/KrishakBazar.js"));

const Agristack = lazy(() => import("./Components/Services/Agristack/Agristack.js"));
const CropConsultancy = lazy(() => import("./Components/Services/CropConsultancy/CropConsultancy.js"));
const SustainableFarmingSolutions = lazy(() => import("./Components/Services/SustainableFarmingSolutions/SustainableFarmingSolutions.js"));
const TechnologyIntegration = lazy(() => import("./Components/Services/TechnologyIntegration/TechnologyIntegration.js"));
const BuyProduct = lazy(() => import("./Components/Product/BuyProduct/BuyProduct.js"));
const Notfound = lazy(() => import("./Components/Notfound.js"));

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
  { path: "/buy-product", component: BuyProduct },
  { path: "/ecoloo", component: Ecoloo },
  { path: "/skywatch", component: Skywatch },
  { path: "/feedback", component: FeedbackForm },
  { path: "/farm-boundary", component: Farmboundary },
  { path: "/crop-advisory", component: Cropadvisory },
  { path: "/krishak-bazar", component: KrishakBazar },
  { path: "/agristack", component: Agristack },
  { path: "/crop-consultancy", component: CropConsultancy },
  {
    path: "/sustainable-farming-solutions",
    component: SustainableFarmingSolutions,
  },
  { path: "/technology-integration", component: TechnologyIntegration },
  { path: "/publications", component: Publications },
  { path: "/more-reads", component: MoreReads },
  { path: "/blog", component: Blogs },
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
      <GlobalProvider>
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
      </GlobalProvider>
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
