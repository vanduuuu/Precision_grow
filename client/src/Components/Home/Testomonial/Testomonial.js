import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Testomonial.css';

const Testomonial = () => {
  return (
    <Container className="py-4">
      <Row>
        {/* Left Column */}
        <Col lg={5} className="d-flex align-items-center justify-content-center mb-4">
          <div className="p">
            <img
              src="https://api.ecrop.co/assets/precisiongrow/Testimonial image.webp"
              alt="testimonial img"
              loading="lazy"
              className='testo'
            
            />
          </div>
        </Col>

        {/* Right Column with Background Image */}
        <Col lg={7} className="carousel-container">

        <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
         
          <div className="carousel-content">
              <h6>
                Precision Grow has transformed my farming! Their technology
                helps me track soil health, weather changes, and crop needs in
                real time. Even when I travel, I stay updated about my farm and
                make the right decisions. Smart farming is the way forward, and
                I’m proud to be a part of it!
              </h6>
              <p>Mahesh Kumar, Pune</p>
           
            </div>
         
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
         
            <div className="carousel-content">
              <h6>
                Before using eCrop, I used to apply fertilizers blindly. Now,
                the device’s simulation data tells me the exact nutrients my
                soil needs. My yield has increased, and I’ve cut down on
                unnecessary fertilizer use, saving money and keeping my farm
                eco-friendly!
              </h6>
              <p>Rajesh Kumar, Madhya Pradesh</p>
            
            </div>
      
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          
            <div className="carousel-content">
              <h6>
                With e-Crop’s simulation data, I can predict pest infestations
                based on weather and soil conditions. Last season, I prevented
                an infection in my tomato field and saved 35% on pesticide
                costs. The app tells me what precautions to take and which
                medicines to use at the right time. Now, I prevent problems
                instead of reacting to them!
              </h6>
              <p>Ravi Shankar, Karnataka</p>
         
            </div>
     
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
         
            <div className="carousel-content">
              <h6>
                Precision Grow’s weather alerts and soil sensors changed the
                way I farm! Their data alerted me to significant rains during
                the previous monsoon, which helped me safeguard my wheat crop. I
                saw a 25% increase in yield and a decrease in expenses. Now, I
                farm with confidence, not guesswork.
              </h6>
              <p>Ramesh Patil, Maharashtra</p>
      
         
          </div>
        </Carousel.Item>

        {/* Slide 5 */}
        <Carousel.Item>
          
            <div className="carousel-content">
              <h6>
                SkyWatch has completely changed how we monitor air quality at
                our plant. Now, we can track pollution levels instantly and take
                action before issues arise. The mobile app makes it so easy to
                stay updated from anywhere. A must-have for industries committed
                to a cleaner environment!
              </h6>
              <p>Amit Verma, Gujarat</p>
           
            </div>
        
        </Carousel.Item>

        {/* Slide 6 */}
        <Carousel.Item>
          
            <div className="carousel-content">
              <h6>
                Last season, heavy rainfall nearly destroyed my crop, but thanks
                to Precision Grow’s weather alerts, I was prepared. I adjusted
                my irrigation and saved most of my harvest. My farm is thriving,
                and I now trust technology to guide my decisions. I highly
                recommend Precision Grow!
              </h6>
              <p>Vikram Singh, Uttar Pradesh</p>
           
            </div>
         
        </Carousel.Item>
      </Carousel>
      
    {/* </div> */}

        </Col> 
      </Row>
    </Container>
  );
};

export default Testomonial;
