import React, { useState } from "react";
import LightBox from "./LightBox";

const TiledGallery = ({ images, galleryError }) => {
  const [displayLightbox, setDisplayLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState();
  const openLighbox = (image) => {
    setDisplayLightbox(true);
    setCurrentImage(image);
  };
  const closeLighBox = () => {
    setDisplayLightbox(false);
  };

  const getCurrentImageIndex = () => {
    const currentImageId = currentImage.id;
    return images.findIndex((image) => image.id === currentImageId);
  };

  const showNext = () => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === images.length - 1) {
      // that is if last index then show 1st image
      setCurrentImage(images[0]);
    } else {
      setCurrentImage(images[currentIndex + 1]);
    }
  };

  const showPrev = () => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === 0) {
      // that is if first index then show last image
      setCurrentImage(images[images.length - 1]);
    } else {
      setCurrentImage(images[currentIndex - 1]);
    }
  };
  return (
    <div>
      {galleryError ? (
        <p>{galleryError}</p>
      ) : (
        <>
          <div className="gallery-container">
            {images.map((image) => {
              const url = image.images["480w_still"].url;
              return (
                <div className="gallery-image-wrapper" key={image.id}>
                  <img
                    src={url}
                    alt={image.username}
                    onClick={() => openLighbox(image)}
                  />
                </div>
              );
            })}
          </div>
          {displayLightbox && (
            <LightBox
              closeLighBox={closeLighBox}
              currentImage={currentImage}
              showPrev={showPrev}
              showNext={showNext}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TiledGallery;
