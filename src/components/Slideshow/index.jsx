import { useState } from "react";
import ChevronIcon from "../ChevronIcon";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);
  const lastIndex = pictures.length - 1;

  const goPrevious = () => {
    setIndex(index === 0 ? lastIndex : index - 1);
  };

  const goNext = () => {
    setIndex(index === lastIndex ? 0 : index + 1);
  };

  return (
    <div className="slideshow">
      <img
        key={index}
        src={pictures[index]}
        alt={`Logement ${index + 1}`}
        className="slideshow-image"
      />

      {pictures.length > 1 && (
        <>
          <button
            type="button"
            className="slideshow-arrow slideshow-arrow--left"
            onClick={goPrevious}
            aria-label="Image precedente"
          >
            <ChevronIcon />
          </button>

          <button
            type="button"
            className="slideshow-arrow slideshow-arrow--right"
            onClick={goNext}
            aria-label="Image suivante"
          >
            <ChevronIcon />
          </button>

          <span className="slideshow-counter">
            {index + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
