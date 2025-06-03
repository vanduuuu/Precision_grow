import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RealtimeCard.css"; // Ensure to add styles for additional customization

const cardData = [
  {
    title: "Live Fire Tracking",
    description:
      "Monitor the wildfire's progression with near-real-time tracking data, allowing for swift action and resource deployment. Our live fire tracking system helps you stay on top of the situation, ensuring that fire measures are implemented without delay.",
  },
  {
    title: "Activity Feed",
    description:
      "Stay updated with a continuous activity feed that includes key data like wind speed, temperature, humidity, and more. This real-time feed is vital for understanding the evolving conditions of a fire and adjusting strategies accordingly.",
  },
  {
    title: "Fire Propagation",
    description:
      "Estimate fire spread with advanced analysis, using multiple data sources to predict how the wildfire will move. This helps anticipate risk zones and allows for more effective evacuation plans and fire containment measures.",
  },
  {
    title: "Incident Management",
    description:
      "Efficient incident management is key to successful wildfire response. Our platform allows for coordinated action between teams, streamlining decision-making and ensuring that resources are deployed quickly to combat the wildfire.",
  },
];

const RealTimeCard = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const cards = document.querySelectorAll(".custom-card");

    let mouseX = 0;
    let mouseY = 0;

    const updateParallax = () => {
      cards.forEach((card) => {
        const depth = 5;
        const cardX =
          (mouseX -
            (card.getBoundingClientRect().left + card.offsetWidth / 2)) /
          100;
        const cardY =
          (mouseY -
            (card.getBoundingClientRect().top + card.offsetHeight / 2)) /
          100;
        card.style.transform = `translateX(${cardX * depth}px) translateY(${cardY * depth}px)`;
      });
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      requestAnimationFrame(updateParallax);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="dark-theme">
      <Container className="text-center py-4">
        <h3 className="gradient-text mb-5 fw-bold">Real-Time Monitoring</h3>

        <Row>
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={3}>
              <Card className="custom-card text-center h-100 shadow-lg p-3">
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RealTimeCard;
