import React, { useState, useRef,useEffect  } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./BuyProduct.css";
import CartSidebar from './CartSidebar';
import rice from '../../../assets/icons_About/rice.png'
import e1 from '../../../assets/icons_About/e1.png'
import p1 from '../../../assets/icons_About/ecrop_3_0_1.webp'
import p2 from '../../../assets/icons_About/ecrop_3_0_3.webp'
import p3 from '../../../assets/icons_About/Soil_Sensor.webp'
import p4 from '../../../assets/icons_About/ecrop_sensor.webp'
import ProductCard from "./ProductCard.js";
import revolfarm from '../../../assets/icons_About/rev-farming.webp'

const BuyProductPage = () => {
  // const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [showCart, setShowCart] = useState(false);

useEffect(() => {
  document.body.style.overflow = showCart ? 'hidden' : 'auto';
}, [showCart]);


const products = [
  {
    id: 1,
    name: "India’s First AI-Powered Smart Farming Device",
    image: p1,
    hoverImage: p3,
    originalPrice: 249999,
    discountRate: 0.40,  // 40%
    gstRate: 0.18,        // 18%
    description: "Track soil, weather & crop health in real-time with the eCROP Smart Device. Boost yields by 30%, save water and fertilizers, and farm smarter with 24/7 AI insights—right from your phone."
  },
  // {
  //   id: 2,
  //   name: "Soil Health Sensor",
  //   image: p3,
  //       hoverImage: p2,
  //   originalPrice: 10000,
  //   discountRate: 0.30,  // 30%
  //   gstRate: 0.12,       // 12%
  //   description: "Soil sensor for NPK and moisture."
  // }
];





  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
// https://play.google.com/store/apps/details?id=com.precisiongrow.ecrop
  return (
    <div className="buy-product-section">

   {/* HERO SECTION */}
<section className="hero-section d-flex align-items-center text-white">
  <div className="hero-overlay w-100">
    <Container>
      <Row className="align-items-center">
        {/* Left Content */}
        <Col sm={6} md={6} lg={6} className="text-start p-4">
          <p className="text-uppercase small fw-semibold mb-2 animate-fade">
            Empowering Farmers with Smart Technology
          </p>

          <h1 className="hero-title fw-bold mb-4">
            <span className="word-animate delay-1">Cultivate</span>
            <img src={rice} alt="rice icon" className="rice-icon mx-2" />
            <span className="word-animate delay-2"> Your</span>
            <span className="word-animate delay-3"> Farm</span>
            <span className="word-animate delay-4"> with</span>
            <span className="word-animate delay-5"> the Power of</span>
            <span className="word-animate delay-6 text-success"> IoT</span>
          </h1>
          <Button
            className="gradient-btn px-4 py-2 fw-semibold fs-6 mt-3"
            size="lg"
            onClick={scrollToGallery}
          >
            Shop Now
          </Button>
        </Col>

        {/* Right Image */}
<Col sm={6} md={6} lg={6} className="d-none d-md-block text-center">
          <img
            src={p1}
            alt="eCrop Device"
            className="img-fluid w-50"
          />
        </Col>
      </Row>
    </Container>
  </div>
</section>


     

    <Container className="my-5" ref={galleryRef}>
  <Row>
    {/* Left: Product Image */}
    <Col lg={6} className="d-flex">
      <img src={p4} alt="ecrop device" className="img-fluid mx-auto w-100 object-fit-cover rounded" />
    </Col>

    {/* Right: Product Info */}
    <Col lg={6}>
      <div className="p-4 d-flex flex-column justify-content-between">

        <p>
          Imagine knowing exactly what your crops need before they need it. eCrop, India’s 1st ICAR-CTCRI patented smart farming device, gives you real-time soil, weather & crop insights on your phone. Boost yields by 30%, save water & fertilizers, and farm with confidence!
        </p>
                    <h5 className="boldlook fs-1">Meet Your 24/7 Farming Assistant</h5>

 {/* New Nested Grid Row */}
        <Row className="my-1 g-4">
          <Col md={7}>
             <ul className="ps-0 mb-5">
      <li className="mb-3"><FaCheckCircle className="me-2 text-success" /> All-in-One Farm Monitoring: Tracks 12+ critical parameters (soil, weather, pests).</li>
      <li className="mb-3"><FaCheckCircle className="me-2 text-success" /> AI-Powered Insights: Get personalized recommendations for irrigation, fertilization & pest control.</li>
      <li><FaCheckCircle className="me-2 text-success" /> Easy-to-Use Mobile App: Manage your farm anytime, anywhere.</li>
    </ul>
  <a href="https://play.google.com/store/apps/details?id=com.precisiongrow.ecrop" target="_blank" className="gradient-btn fw-semibold text-decoration-none mt-5">
    Download Now
  </a>          </Col>
            <Col md={5}>
            <img
              src={e1}
              alt="Solar Powered eCrop"
              className="img-fluid mx-auto"
            />
          </Col>
        </Row>
        <h3 className="boldlook mt-3 fs-1">Key benefits of eCrop</h3>
        <ul className="product-features ps-0 mb-4">
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Simplifies Crop Management</li>
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Accurate Weather Insights</li>
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Real-time NPK monitoring</li>
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Boosts Profitability</li>
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Disease Prevention</li>
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Customized Solutions</li>
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Market Guidance</li>
          <li className="mb-2"><FaCheckCircle className="me-2 text-success" /> Community Support</li>
        </ul>

       
      </div>
    </Col>
  </Row>
</Container>




 <Container className="my-5" ref={galleryRef}>
  <Row className="justify-content-center align-items-center g-4">
    
    {/* 📘 Product Info Block */}
    <Col md={6}>
      <div className="p-4 rounded bg-white h-100">
        <h3 className="boldlook fs-1">Install the Device</h3>
        <h3 className="prrice mb-3 bg-light">Place the eCrop device in your field</h3>
        
        <ul className="product-features ps-0 mb-4">
          <li className="mb-3">
            <FaCheckCircle className="me-2 text-success" /> 
            <b>Get Real-Time Data:</b> Monitor soil moisture, NPK, pH, weather forecasts, pest risks & more on your phone.
          </li>
          <li className="mb-3">
            <FaCheckCircle className="me-2 text-success" /> 
            <b>Follow Smart Alerts:</b> Receive AI-powered advice on when to water, fertilize, or protect crops.
          </li>
          <li className="mb-3">
            <FaCheckCircle className="me-2 text-success" /> 
            <b>Solar-Powered Battery:</b> Zero electricity bills, works 24/7 even in power cuts.
          </li>
          <li>
            <FaCheckCircle className="me-2 text-success" />
            <b>Grow More, Waste Less!:</b> Increase yields, cut costs, and farm sustainably.
          </li>
        </ul>

        <div className="d-flex gap-3 align-items-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
            alt="Free Shipping"
            width="45"
            height="45"
            className="shipping-icon"
          />
          <p className="text-success fw-semibold small mb-0">
            Free Shipping Available on All Products Below
          </p>
        </div>
      </div>
    </Col>

    {/* 📸 Device Image Block */}
    <Col md={6} className="text-center">
      <img src={revolfarm} alt="eCROP Device" className="img-fluid" />
    </Col>

  </Row>

  <h2 className="boldlook fs-1 my-5 text-center">Explore Smart Farming Products</h2>

  <Row className="g-4 justify-content-center">
    {products.map((product) => (
      <Col lg={8} md={6} key={product.id}>
        <ProductCard product={product} onShowCart={() => setShowCart(true)} />
      </Col>
    ))}
  </Row>
</Container>


   <section className="py-5 modern-applications-section">
  <Container>
    <h2 className="fw-bold text-center mb-5 text-dark">
     Applications of <span className="text-success">eCROP</span>
    </h2>
    <Row className="g-4 justify-content-center">
      {[
        "Crop Yield Forecasting",
        "Soil Health Management",
        "Remote Farm Surveillance",
        "Resource Optimization",
        "Real-Time Weather Updates",
        "AI-Based Advisory Alerts",
        "Pest & Disease Prediction",
        "Government Scheme Support",
        "Works Without Power",
      ].map((item, idx) => (
        <Col key={idx} md={4} sm={6} xs={12}>
          <div className="glass-card p-4 rounded-4 text-center h-100 shadow-sm">
            <div className="icon-wrapper mx-auto mb-3">
              <FaCheckCircle className="text-success fs-2" />
            </div>
            <p className="fw-semibold fs-6 text-dark mb-0">{item}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>

<CartSidebar show={showCart} onClose={() => setShowCart(false)} product={products} />

    </div>
  );
};

export default BuyProductPage;
