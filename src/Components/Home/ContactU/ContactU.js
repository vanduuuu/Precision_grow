import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ContactU.css";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";

const ObfuscatedEmail = () => {
  const email = "mail@precisiongrow.co.in";
  const obfuscated = [...email].map((char) => `&#${char.charCodeAt(0)};`).join("");
  return (
    <a
      href={`mailto:${email}`}
      className="text-white text-decoration-none"
      dangerouslySetInnerHTML={{ __html: obfuscated }}
      aria-label="Email us at mail@precisiongrow.co.in"
    />
  );
};

const ContactU = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  // Refs to card wrapper elements
  const cardsRef = useRef([]);

  const tabs = ["New to Us?", "Existing Customer"];

  const cards = [
    {
      icon: <FaUser size={28} />,
      title: "Request a Call Back",
      desc: "We will be happy to address your queries over a call.",
      link: "/contact",
      linkText: "Contact Us",
      type: "internal",
    },
    {
      icon: <FaWhatsapp size={28} />,
      title: "Connect On WhatsApp",
      desc: (
        <div className="whatsapp-desc">
          <div className="row-info">
            <span>Live Chat - +91 8097283444</span>
            <span>Mon - Sat, 9:30 am - 6:30 pm</span>
          </div>
        </div>
      ),
      link: "https://wa.me/918097283444",
      linkText: "Chat Now",
      type: "external",
    },
    {
      icon: <FaEnvelope size={28} />,
      title: "Connect via Email",
      desc: (
        <div className="email-desc">
          <ObfuscatedEmail />
        </div>
      ),
      link: "mailto:mail@precisiongrow.co.in",
      linkText: "Click Here",
      type: "external",
    },
  ];

  useEffect(() => {
    const idx = hoveredCard !== null ? hoveredCard : activeCard;
    if (idx !== null && cardsRef.current[idx]) {
      const cardElem = cardsRef.current[idx];
      const parentElem = cardElem.parentElement;
      if (parentElem) {
        const parentRect = parentElem.getBoundingClientRect();
        const cardRect = cardElem.getBoundingClientRect();

        const left = cardRect.left - parentRect.left;
        const width = cardRect.width;

        setHighlightStyle({ left, width });
      }
    }
  }, [hoveredCard, activeCard]);

  return (
    <section className="contact-section">
      <Titleunderline title="Connect With Us" tag="h3" />

      {/* Tabs */}
      <div className="tabs-wrapper">
        <div className="tabs">
          {tabs.map((tab, idx) => (
            <div
              key={idx}
              className={`tab ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </div>
          ))}
          <div
            className="tab-highlight"
            style={{ left: `${activeTab * 50}%` }}
          />
        </div>
      </div>

      {/* Cards */}
      <div
        className="card-group1"
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div
          className="card-highlight"
          style={{
            left: highlightStyle.left,
            width: highlightStyle.width,
            display:
              hoveredCard !== null || activeCard !== null ? "block" : "none",
          }}
        />
        {cards.map((card, idx) => {
          const isExternal = card.type === "external";
          const Wrapper = isExternal ? "a" : Link;

          return (
            <Wrapper
              key={idx}
              to={!isExternal ? card.link : undefined}
              href={isExternal ? card.link : undefined}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="card-item-wrapper"
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <div
                className={`card-item ${activeCard === idx ? "active" : ""}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onClick={() => setActiveCard(idx)}
              >
                <div className="card-icon">{card.icon}</div>
                <div className="card-content text-white">
                  <h4 className="fs-4">{card.title}</h4>
                  <div>{card.desc}</div>
                  <span className="card-link">{card.linkText}</span>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default ContactU;
