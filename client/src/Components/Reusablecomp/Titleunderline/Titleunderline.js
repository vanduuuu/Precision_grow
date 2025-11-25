import "./Titleunderline.css";
import cropImg from "../../../assets/icons_About/icon-heading.png";

const Titleunderline = ({
  title,
  tag = "h2",
  titleClass = "",
  titleColor = "", // now optional; will use gradient by default
  align = "center",
}) => {
  const HeadingTag = tag;

  return (
    <div className={`title-container my-4 text-${align}`} data-aos="fade-up">
      <div className="title-line left"></div>

      <img
        src={cropImg}
        alt="eco leaf"
        className="title-icon fade-in"
        loading="lazy"
      />

      <HeadingTag
        className={`fs-1 fw-bold heading-style ${!titleColor ? "modern-gradient" : ""} ${titleClass}`}
        style={titleColor ? { color: titleColor } : {}}
      >
        {title}
      </HeadingTag>

      <img
        src={cropImg}
        alt="eco leaf right"
        className="title-icon right-icon fade-in"
        loading="lazy"
      />

      <div className="title-line right"></div>
    </div>
  );
};

export default Titleunderline;
