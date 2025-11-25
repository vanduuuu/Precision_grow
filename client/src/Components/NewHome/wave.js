// Wave.js
import React from "react";

const Wave = ({
  color = "#02746a",        // default solid color
  gradient = null,          // optional gradient string
  position = "top",         // top or bottom
  height = 380,             // SVG height
}) => {
  return (
    <svg
      className={`top-wave1 wave-${position}`}
      viewBox="0 0 5950 380"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ height: `${height}px`, width: "100%" }}
    >
      {gradient ? (
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {gradient.map((stop, index) => (
              <stop
                key={index}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity ?? 1}
              />
            ))}
          </linearGradient>
        </defs>
      ) : null}

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 293.923V393.09H330.556H1983.33H3966.67L5950 393.091L5950 203.02C5288.89 244.34 4627.78 194.756 3966.67 128.645C3878.52 119.83 3790.37 110.722 3702.22 101.613C3129.26 42.4069 2556.3 -16.7992 1983.33 4.6869C1322.22 29.4786 661.111 161.701 330.556 227.812L0 293.923Z"
        fill={gradient ? "url(#waveGradient)" : color}
      />
    </svg>
  );
};

export default Wave;
