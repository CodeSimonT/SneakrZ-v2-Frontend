import React, { useState } from "react";

const ZoomImage = ({ src, alt }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setTooltipPosition({ x: clientX + 10, y: clientY + 10 });
  };

  return (
    <div className="zoom-image" onMouseMove={handleMouseMove}>
      <img
        src={src}
        alt={alt}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <div
          className="tooltip"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          <img src={src} alt={alt} className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default ZoomImage;
