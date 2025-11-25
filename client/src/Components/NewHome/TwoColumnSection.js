import React from "react";
import ListItem from "../Reusablecomp/ListItem.js";
import GlowingButton from "./GlowingButton.js";

const TwoColumnSection = ({
  smallTitle = "",      // NEW → Small top title
  title = "",
  titleColor = "#ffffff", // NEW → Custom title color
  paragraphs = [],
  listData = [],
  imageSrc = "",
  imageAlt = "section image",
  reverse = false,
toptitleColor="#000",
  // NEW → Button props
  showButton = false,
  buttonText = "Learn More",
  buttonLink = "",
  buttonBg = "#28a745",
  buttonColor = "#fff",
  buttonOutline = false,
  buttonGradient = false,
  buttonSize = "lg",
  buttonTarget = "_self",
  buttonClass = "",
}) => {
  return (
    <>
      <div className={`row gx-5 ${reverse ? "flex-row-reverse" : ""}`}>

        {/* LEFT COLUMN */}
        <div className="col-lg-6 px-5">

          {/* SMALL TITLE (OPTIONAL) */}
          {smallTitle && (
            // <h6 className="text-uppercase fw-semibold mb-2" style={{ color: toptitleColor }}>
            //   {smallTitle}
            // </h6>

             <span className="badge rounded-pill px-3 py-2 mb-3"
          style={{ background: "rgba(0,255,170,0.15)", color: "#75ffd7" }}>
          {smallTitle}
        </span>
          )}

          {/* MAIN TITLE */}
          {title && (
            <h2 className="mb-3 boldlook" style={{ color: titleColor }}>
              {title}
            </h2>
          )}

          {/* PARAGRAPHS */}
          {paragraphs.length > 0 &&
            paragraphs.map((para, i) => (
              <p key={i} className="fs-5" style={{color:toptitleColor}}>
                {para}
              </p>
            ))}

          {/* LIST ITEMS */}
          {listData.length > 0 && (
            <div className="mt-4">
              {listData.map((item, index) => (
                <ListItem
                  key={index}
                  iconComponent={item.iconComponent}
                  title={item.title}
                  label={item.label}
                  bgClass={item.bgClass}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* BUTTON (OPTIONAL) */}
          {showButton && (
            <div className="mt-4">
              <GlowingButton
                text={buttonText}
                link={buttonLink}
                bg={buttonBg}
                color={buttonColor}
                outline={buttonOutline}
                gradient={buttonGradient}
                size={buttonSize}
                target={buttonTarget}
                className={buttonClass}
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (IMAGE) */}
        <div className="col-lg-6 text-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="img-fluid"
            />
          )}
        </div>

      </div>
    </>
  );
};

export default TwoColumnSection;
