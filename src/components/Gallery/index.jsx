import { useState } from 'react'
import './Gallery.scss'

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0)

  const goPrevious = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1)
  }

  const goNext = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="gallery">
      <img
        src={pictures[index]}
        alt={`Logement ${index + 1}`}
        className="gallery-image"
      />

      {pictures.length > 1 && (
        <>
          <button className="gallery-arrow gallery-arrow--left" onClick={goPrevious}>
            ‹
          </button>
          <button className="gallery-arrow gallery-arrow--right" onClick={goNext}>
            ›
          </button>
          <span className="gallery-counter">
            {index + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Gallery