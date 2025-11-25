import React from "react";
import "./GlowingButton.css";

const GlowingButton = ({
  text = "Click Me",
  bg = "#28a745",      
  color = "#fff",
  outline = false,
  gradient = false,    
  size = "lg",
  link = "",
  target = "_self",
  className = "",
  onClick = () => {}
}) => {
  
  const style = {
    background: outline ? "transparent" : bg,
    color: color,
    borderColor: outline ? bg : "transparent",
    backgroundSize: gradient ? "300% 300%" : "auto"
  };

  const classes = `btn btn-${size} glowing-btn ${outline ? "glowing-outline" : ""} ${gradient ? "glowing-gradient" : ""} ${className}`;

  if (link) {
    return (
      <a href={link} target={target} className={classes} style={style}>
        {text}
      </a>
    );
  }

  return (
    <button className={classes} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default GlowingButton;
