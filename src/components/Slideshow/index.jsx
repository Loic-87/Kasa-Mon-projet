import { useState } from 'react'
import './Slideshow.scss'

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0)

  const goPrevious = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1)
  }

  const goNext = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1)
  }

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
          <button className="slideshow-arrow slideshow-arrow--left" onClick={goPrevious}>
            ‹
          </button>
          <button className="slideshow-arrow slideshow-arrow--right" onClick={goNext}>
            ›
          </button>
          <span className="slideshow-counter">
            {index + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow
