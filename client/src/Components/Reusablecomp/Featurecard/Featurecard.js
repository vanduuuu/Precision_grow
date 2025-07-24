import './Featurecard.css';

const Featurecard = ({
  title,
  description,
  icon, // ✅ new prop
  aos,
  duration,
  customClass = '',
  bgColor = '#ffffffd4',
  titleColor = '#88bb40',
  descColor = '#413a3a'
}) => (
  <div
    className={`feature-box1 space-infeature p-4 shadow-sm h-100 ${customClass}`}
    data-aos={aos}
    data-aos-duration={duration}
    style={{ background: bgColor }}
  >
    {/* ✅ Conditionally render icon if passed */}
    {icon && (
      <div className="mb-3 fs-2 text-white d-inline-block">
        {icon}
      </div>
    )}

    {title && (
      <h4 className="mb-2 fw-bold" style={{ color: titleColor }}>
        {title}
      </h4>
    )}

    {description && (
      <p className="m-0 p-0" style={{ color: descColor }}>
        {description}
      </p>
    )}
  </div>
);

export default Featurecard;
