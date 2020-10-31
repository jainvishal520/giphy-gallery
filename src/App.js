import "./App.scss";
import { useState, useEffect } from "react";
import { GIPHY_SECRET_KEY } from "./constants.js";
import TiledGallery from "./components/TiledGallery";
import ErrorBoundary from "./components/ErrorBoundary";
import { IconContext } from "react-icons";
function App() {
  const [images, setImages] = useState([]);
  const [galleryError, setGalleryError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadAllImages = async (images) => {
    // wait for all images to load
    const promises = await images.map((g_img) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = g_img.images["480w_still"].url;
        img.onload = () => {
          resolve();
        };
        img.onerror = () => {
          reject();
        };
      });
    });
    await Promise.all(promises);
    // at this point all images are loaded
    setImages(images);
    setLoading(false);
  };

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?" +
        new URLSearchParams({
          api_key: GIPHY_SECRET_KEY,
          limit: 25,
        })
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((giphyData) => loadAllImages(giphyData.data))
      .catch((error) => {
        setGalleryError(error.message);
      });
  }, []);
  return (
    <div className="App">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <h2>Giphy Gallery App</h2>
        <ErrorBoundary>
          {loading ? (
            "loading..."
          ) : (
            <TiledGallery galleryError={galleryError} images={images} />
          )}
        </ErrorBoundary>
      </IconContext.Provider>
    </div>
  );
}

export default App;
