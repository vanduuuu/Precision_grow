import React, { useState, useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Add this import at top

import "aos/dist/aos.css"; // Import the CSS for styles
import Modal from "react-modal";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import CropMonitoring from "./Components/Services/SatelliteMonitoring/CropMonitoring/CropMonitoring.js";
import ServiceFishMonitoring from "./Components/Services/SatelliteMonitoring/ServiceFishMonitoring/ServiceFishMonitoring.js";
import Ecrop from "./Components/Product/Ecrop/Ecrop.js";
import Ecoloo from "./Components/Product/Ecoloo/Ecoloo.js";
import Scrolltotop from "./Components/Scroll/Scrolltotop.js";
import Canonical from "./Components/Canonical.js";
import SchemaInjector from "./Components/SchemaMarkup/SchemaInjector.js";
import Footernew from "./Components/Headfoot/Footer/Footernew.js";
import { initFacebookPixel, trackPageView } from "./utils/facebookPixel.js";
import Navbar from "./Components/Headfoot/Header/Subnavbar/Navbar.js";
// import MoreReads from "./Components/MoreReads/MoreReads.js";
import mausamlogo from "../src/assets/icons_About/mausamlogo.png";
import Ecropcoffe from "./Components/Services/Ecropcoffee/Ecropcoffe.js";
import { CartProvider } from "./Components/Product/BuyProduct/CartContext.js";
import MoreReads1 from "./Components/MoreReads/MoreReads1.js";
import { GenericProvider } from "./Contexts/GenericProvider.js";
import Biosense from "./Components/Product/Biosense/Biosense.js";
import Home2 from "./Components/NewHome/Home2.js";
const Home = lazy(() => import("./Components/Home/Home.js"));
const About = lazy(() => import("./Components/About/About.js"));
const Contact = lazy(() => import("./Components/Contact/Contact.js"));
const PrecisionGrowAi = lazy(() =>
  import("./Components/Services/PrecisionGrowAi/PrecisionGrowAi.js")
);
const Blogs1 = lazy(() => import("./Components/Blog/Blog1.js"));
const BlogDetailPgs1 = lazy(() =>
  import("./Components/Blog/Blogdetail1.js")
);
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
const Publications = lazy(() =>
  import("./Components/Home/Publications/Publications.js")
);

const RegenerativeAgri = lazy(() =>
  import("./Components/Services/RegenerativeAgri/RegenerativeAgri.js")
);
const ProductTraceability = lazy(() =>
  import("./Components/Services/ProductTraceability/ProductTraceability.js")
);
const WildfireSolution = lazy(() =>
  import("./Components/Services/WildfireSolution/WildfireSolution.js")
);

const AgriInsurance = lazy(() =>
  import("./Components/Services/AgriInsurance/AgriInsurance.js")
);
const AgricLoan = lazy(() =>
  import("./Components/Services/AgricLoan/AgricLoan.js")
);
const AgriDrone = lazy(() =>
  import("./Components/Services/AgriDrone/AgriDrone.js")
);

const Policy = lazy(() => import("./Components/Policy/Policy.js"));

const KrishakBazar = lazy(() =>
  import("./Components/Services/KrishakBazar/KrishakBazar.js")
);

const Agristack = lazy(() =>
  import("./Components/Services/Agristack/Agristack.js")
);
const CropConsultancy = lazy(() =>
  import("./Components/Services/CropConsultancy/CropConsultancy.js")
);
const SustainableFarmingSolutions = lazy(() =>
  import(
    "./Components/Services/SustainableFarmingSolutions/SustainableFarmingSolutions.js"
  )
);
const TechnologyIntegration = lazy(() =>
  import("./Components/Services/TechnologyIntegration/TechnologyIntegration.js")
);
const BuyProduct = lazy(() =>
  import("./Components/Product/BuyProduct/BuyProduct.js")
);
const Notfound = lazy(() => import("./Components/Notfound.js"));

// Set the root app element for the modal (for accessibility)
Modal.setAppElement("#root");

// Define routes at the top level outside the App function
export const routes = [
  { path: "/", component: Home },
  { path: "/home2", component: Home2 },
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
  // { path: "/buy-product", component: BuyProduct },
  { path: "/ecoloo", component: Ecoloo },
  { path: "/biosense", component: Biosense },
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
  // { path: "/publications", component: Publications },
  // { path: "/more-reads", component: MoreReads },
  { path: "/more-reads", component: MoreReads1 },
  { path: "/ecrop-for-coffee", component: Ecropcoffe },
  // { path: "/blog", component: Blogs },
  // { path: "/post/:slug", component: BlogDetailPgs },
  { path: "*", component: Notfound }, // Wildcard route for unknown paths
];

function App() {
  const location = useLocation(); // ✅ Now it works inside Router

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

useEffect(() => {
  AOS.init({
    duration: 1000,         // animation duration (1s looks smooth)
    once: false,              // run animation only once (no re-trigger)
    easing: "ease-in-out",   // smooth transition
    offset: 80,              // start animation a bit before element fully visible
    mirror: false,           // don’t animate again on scroll up
  });
  initFacebookPixel();
}, []);


  useEffect(() => {
    AOS.refresh(); // Refresh AOS on route change
    trackPageView(); // Track page view on every route change
  }, [location]);

  return (
    // <BrowserRouter>
    <HelmetProvider>
        <SchemaInjector />
<GenericProvider>
        <div className="app-wrapper">
          {/* Feedback Button and Modal */}
         <div id="FlypopButton" className="flypop-button">
      {/* Floating Button */}
      <button onClick={openModal}>
        <span>Give Feedback</span>
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Feedback Form"
        className="Modal"
        overlayClassName="Overlay"
      >
      

        <Suspense fallback={<div>Loading Feedback Form...</div>}>
          <FeedbackForm onClose={closeModal} />
        </Suspense>
      </Modal>
    </div>
          <Navbar />
          <Scrolltotop />
          {/* Add Canonical component here */}
          <Canonical />

          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Routes>
       <Route
      path="/blog"
      element={
        
          <Blogs1 />}
    />
    <Route
  path="/post/:slug"
  element={
   
      <BlogDetailPgs1 />
     }
/>
    <Route
      path="/publications"
      element={
       
          <Publications />
       
      }
    />
       <Route
      path="/more-reads"
      element={
       
          <MoreReads1 />
       
      }
    />
        <Route
      path="/buy-product"
      element={
        <CartProvider>
          <BuyProduct />
        </CartProvider>
      }
    /> 
  
    {/* -------------------------------------- */}
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
        </GenericProvider>
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
      {/* Fixed Button */}
            {/* ✅ WhatsApp Floating Icon Button */}
      <a
  href="https://wa.me/918097283444" // <-- replace with your WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <FaWhatsapp size={24} />
</a>

      <a
        href="https://mausamgpt.co.in"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light border mx-2 border-success position-fixed mausambtn d-flex align-items-center"
      >
        <img
          src={mausamlogo} // apna image path yahan lagana
          alt="MausamGPT"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
        MausamGPT
      </a>
    </>
  );
};

export default App;
