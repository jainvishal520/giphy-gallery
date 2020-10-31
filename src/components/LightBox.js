import React from "react";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
const LightBox = ({ closeLighBox, showPrev, currentImage, showNext }) => {
  const url = currentImage.images["480w_still"].url;
  return (
    <div className="lightbox-wrapper">
      <div className="lightbox-backdrop" onClick={closeLighBox} />
      <div className="lightbox-content">
        <img src={url} alt="images 1" />
        <MdChevronLeft
          onClick={showPrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            fontSize: "44px",
          }}
        />
        <MdChevronRight
          onClick={showNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "0%",
            fontSize: "44px",
          }}
        />
        <MdClose
          onClick={closeLighBox}
          style={{ position: "absolute", top: "0%", right: "0%" }}
        />
      </div>
    </div>
  );
};

export default LightBox;
