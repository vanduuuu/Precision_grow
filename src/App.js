import React, { useState } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Modal from 'react-modal'; 
import './App.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'; 
import Home from './Components/Home/Home'; 
import About from './Components/About/About'; 
import Contact from './Components/Contact/Contact'; 
import Footer from '../src/Components/Headfoot/Footer/Footer'; 
import RefundPolicy from './Components/Policy/RefundPolicy'; 
import Subnavbar from './Components/Headfoot/Header/Subnavbar/Subnavbar'; 
import Services from './Components/Services/Services'; 
import PrecisionGrowAi from './Components/Services/PrecisionGrowAi/PrecisionGrowAi'; 
import RegenerativeAgri from './Components/Services/RegenerativeAgri/RegenerativeAgri'; 
import ProductTraceability from './Components/Services/ProductTraceability/ProductTraceability'; 
import WildfireSolution from './Components/Services/WildfireSolution/WildfireSolution'; 
import AgriInsurance from './Components/Services/AgriInsurance/AgriInsurance'; 
import AgricLoan from './Components/Services/AgricLoan/AgricLoan'; 
import AgriDrone from './Components/Services/AgriDrone/AgriDrone'; 
import CropMonitoring from './Components/Services/SatelliteMonitoring/CropMonitoring/CropMonitoring'; 
import ServiceFishMonitoring from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/ServiceFishMonitoring'; 
import TermPolicy from './Components/Policy/TermPolicy'; 
import PrivacyPolicy from './Components/Policy/PrivacyPolicy'; 
import AutomaticIdentificationSystem from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/AutomaticIdentificationSystem'; 
import VesselMonitoringSystem from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/VesselMonitoringSystem'; 
import SatelliteImageryIntegration from './Components/Services/SatelliteMonitoring/ServiceFishMonitoring/SatelliteImageryIntegration'; 
import Ecrop from './Components/Product/Ecrop/Ecrop'; 
import Overview from './Components/Sustainability/Overview'; 
import Glossary from './Components/Sustainability/Glossary'; 
import Ecoloo from './Components/Product/Ecoloo/Ecoloo'; 
import FaqPage from './Components/FAQ/FaqPage/FaqPage'; 
import Scrolltotop from './Components/Scroll/Scrolltotop'; 
import FeedbackForm from './Components/Feedback/Feedback'; 
import Biosence from './Components/Product/Biosence/Biosence'; 
import Farmboundary from './Components/Services/Farmboundary/Farmboundary'; 
import Cropadvisory from './Components/Services/Cropadvisory/Cropadvisory'; 
import Product from './Components/Product/Products'; 
import Sustainability from './Components/Sustainability/Sustainability'; 

// Set the root app element for the modal (for accessibility)
Modal.setAppElement('#root');

// Define routes at the top level outside the App function
export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/product', component: Product },
  { path: '/precision-grow-ai', component: PrecisionGrowAi },
  { path: '/regenerative-agriculture', component: RegenerativeAgri },
  { path: '/product-traceability', component: ProductTraceability },
  { path: '/wildfire-solution', component: WildfireSolution },
  { path: '/agri-insurance', component: AgriInsurance },
  { path: '/agri-loan', component: AgricLoan },
  { path: '/agri-drone', component: AgriDrone },
  { path: '/contact', component: Contact },
  { path: '/crop-monitoring', component: CropMonitoring },
  { path: '/fish-monitoring', component: ServiceFishMonitoring },
  { path: '/automatic-identification-system', component: AutomaticIdentificationSystem },
  { path: '/vessel-monitoring-system', component: VesselMonitoringSystem },
  { path: '/satellite-imagery-integration', component: SatelliteImageryIntegration },
  { path: '/refund-policy', component: RefundPolicy },
  { path: '/terms-conditions', component: TermPolicy },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/ecrop', component: Ecrop },
  { path: '/sustainability-overview', component: Overview },
  { path: '/sustainability-glossary', component: Glossary },
  { path: '/ecoloo', component: Ecoloo },
  { path: '/biosence', component: Biosence },
  { path: '/faq', component: FaqPage },
  { path: '/feedback', component: FeedbackForm },
  { path: '/farmboundary', component: Farmboundary },
  { path: '/crop-advisory', component: Cropadvisory },
  { path: '/sustainability', component: Sustainability },
];

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <BrowserRouter>
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
          overlayClassName="Overlay">
          <FeedbackForm />
          <button onClick={closeModal} className='close-popup'>
            <i className="fa fa-close"></i>
          </button>
        </Modal>
      </div>

      <Subnavbar />
      <Scrolltotop />

      <Routes>
        {/* Dynamically create Route elements using the `routes` array */}
        {routes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={<route.component />} // JSX for components
          />
        ))}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
