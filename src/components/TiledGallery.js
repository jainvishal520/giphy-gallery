import React from "react";

const TiledGallery = ({ images, galleryError }) => {
  return (
    <div>
      {galleryError ? (
        <p>{galleryError}</p>
      ) : (
        <div className="gallery-container">
          {images.map((image) => {
            const url = image.images["480w_still"].url;
            return (
              <div className="gallery-image-wrapper" key={image.id}>
                <img src={url} alt={image.username} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TiledGallery;
