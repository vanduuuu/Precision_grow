import './Titleunderline.css';

const Titleunderline = ({ title, tag = "h2", titleClass = "" }) => {
  const HeadingTag = tag;

  return (
    <div className="text-center my-4">
      <HeadingTag className={`heading-style ${titleClass}`}>{title}</HeadingTag>
      <div className="underline mx-auto mt-2"></div>
    </div>
  );
};

export default Titleunderline;
