import './Featurecard.css';

const Featurecard = ({
  title,
  description,
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
    style={{ background: bgColor }} // ✅ updated here
  >
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
