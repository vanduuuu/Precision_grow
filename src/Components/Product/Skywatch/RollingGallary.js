import { useEffect, useRef, useState } from "react";
import "./RollingGallary.css";


const IMGS = ["https://api.ecrop.co/assets/precisiongrow/sky0.webp", "https://api.ecrop.co/assets/precisiongrow/sky1.webp", "https://api.ecrop.co/assets/precisiongrow/sky2.webp", "https://api.ecrop.co/assets/precisiongrow/sky3.webp", "https://api.ecrop.co/assets/precisiongrow/sky4.webp", "https://api.ecrop.co/assets/precisiongrow/sky6.webp"];

const RollingGallery = ({ images = [] }) => {
  const galleryImages = images.length ? images : IMGS;
  const [isPaused, setIsPaused] = useState(false);
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const galleryTrackRef = useRef(null);
  const rotationRef = useRef(0);
  const animationRef = useRef();

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = galleryImages.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth animation
  useEffect(() => {
    const animate = () => {
      if (!isPaused && galleryTrackRef.current) {
        rotationRef.current -= 0.4; // Adjust speed here
        galleryTrackRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <div
          ref={galleryTrackRef}
          className="gallery-track"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(i * 360) / faceCount}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={url} alt={`gallery-${i}`} className="gallery-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollingGallery;
