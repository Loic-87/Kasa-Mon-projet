import './Banner.scss'

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner-image" />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  )
}

export default Banner