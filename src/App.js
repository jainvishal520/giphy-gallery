import "./App.scss";
import { useState, useEffect } from "react";
import { GIPHY_SECRET_KEY } from "./constants.js";
import TiledGallery from "./components/TiledGallery";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  const [images, setImages] = useState([]);
  const [galleryError, setGalleryError] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?" +
        new URLSearchParams({
          api_key: GIPHY_SECRET_KEY,
          limit: 25,
        })
    )
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((giphyData) => setImages(giphyData.data))
      .catch((error) => {
        setGalleryError(error.message);
      });
  }, []);
  return (
    <div className="App">
      <h2>Giphy Gallery App</h2>
      <ErrorBoundary>
        <TiledGallery galleryError={galleryError} images={images} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
