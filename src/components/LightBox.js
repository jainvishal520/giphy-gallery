import React from "react";

const LightBox = ({ closeLighBox, showPrev, currentImage, showNext }) => {
  const url = currentImage.images["480w_still"].url;
  return (
    <div className="lightbox-wrapper">
      <div className="lightbox-backdrop" onClick={closeLighBox} />
      <div className="lightbox-content">
        <div className="lightbox-close" onClick={closeLighBox}>
          x
        </div>
        <button onClick={showPrev}>Prev</button>
        <img src={url} alt="images 1" />
        <button onClick={showNext}>Next</button>
      </div>
    </div>
  );
};

export default LightBox;
