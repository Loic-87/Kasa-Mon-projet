import { useState } from "react";
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
            <svg
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L7 1L13 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="slideshow-arrow slideshow-arrow--right"
            onClick={goNext}
            aria-label="Image suivante"
          >
            <svg
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L7 1L13 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
