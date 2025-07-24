import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Testomonial.css';
import testi from '../../../assets/icons_About/Testimonial-img.webp';

const Testomonial = () => {
  return (
    <Container className="py-5 px-5 px-lg-5">
      <Row className="gx-5 align-items-stretch d-flex testimonial-row">
        {/* Left Side Image */}
        <Col lg={5} className="d-flex align-items-center justify-content-center mb-4 mb-lg-0 left-image-col">
          <img
            src={testi}
            alt="testimonial"
            className="img-fluid custom-img"
            width="500"
            height="500"
            loading="lazy"
          />
        </Col>

        {/* Right Side Carousel */}
        <Col lg={7} className="d-flex align-items-center justify-content-center gradient-bg text-white">
          <Carousel className="w-100 px-3">
            <Carousel.Item>
              <div className="text-center">
                <h6>
                Precision Grow has transformed my farming! Their technology helps me track soil health, weather changes, and crop needs in real time. Even when I travel, I stay updated about my farm and make the right decisions. Smart farming is the way forward, and I’m proud to be a part of it!
                </h6>
                <h4 className="mt-3 mb-0 fw-semibold">Mahesh Kumar, Pune</h4>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <h6>
                  Before using eCrop, I used to apply fertilizers blindly. Now, the device’s simulation data tells me the exact nutrients my soil needs. My yield has increased, and I’ve cut down on unnecessary fertilizer use, saving money and keeping my farm eco-friendly!
                </h6>
                <h4 className="mt-3 mb-0 fw-semibold">Rajesh Kumar, Madhya Pradesh</h4>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <h6>
                  With e-Crop’s simulation data, I can predict pest infestations based on weather and soil conditions. Last season, I prevented an infection in my tomato field and saved 35% on pesticide costs. The app tells me what precautions to take and which medicines to use at the right time. Now, I prevent problems instead of reacting to them!
                </h6>
                <h4 className="mt-3 mb-0 fw-semibold">Ravi Shankar, Karnataka</h4>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div className="text-center">
                <h6>
Precision Grow’s weather alerts and soil sensors changed the way I farm! Their data alerted me to significant rains during the previous monsoon, which helped me safeguard my wheat crop. I saw a 25% increase in yield and a decrease in expenses. Now, I farm with confidence, not guesswork.                </h6>
                <h4 className="mt-3 mb-0 fw-semibold">Ramesh Patil, Maharashtra</h4>
              </div>
            </Carousel.Item>
              <Carousel.Item>
              <div className="text-center">
                <h6>
SkyWatch has completely changed how we monitor air quality at our plant. Now, we can track pollution levels instantly and take action before issues arise. The mobile app makes it so easy to stay updated from anywhere. A must-have for industries committed to a cleaner environment!</h6>
                <h4 className="mt-3 mb-0 fw-semibold">Amit Verma, Gujarat</h4>
              </div>
            </Carousel.Item>
             <Carousel.Item>
              <div className="text-center">
                <h6>
Last season, heavy rainfall nearly destroyed my crop, but thanks to Precision Grow’s weather alerts, I was prepared. I adjusted my irrigation and saved most of my harvest. My farm is thriving, and I now trust technology to guide my decisions. I highly recommend Precision Grow!
</h6>
                <h4 className="mt-3 mb-0 fw-semibold">Vikram Singh, Uttar Pradesh</h4>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Testomonial;
