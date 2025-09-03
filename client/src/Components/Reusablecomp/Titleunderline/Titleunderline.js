

import './Titleunderline.css';

const Titleunderline = ({ title, tag = "h2", titleClass = "", titleColor = "#357f82" }) => {
  const HeadingTag = tag;

  return (
    <div className="text-center my-4">
      <HeadingTag
        className={`heading-style ${titleClass}`}
        style={{ color: titleColor }}
      >
        {title}
      </HeadingTag>
      <div className="underline mx-auto mt-2"></div>
    </div>
  );
};

export default Titleunderline;
