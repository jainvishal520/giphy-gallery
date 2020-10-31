import React from "react";

const TiledGallery = ({ images, galleryError }) => {
  return <div>{galleryError ? <p>{galleryError}</p> : <p>images</p>}</div>;
};

export default TiledGallery;
