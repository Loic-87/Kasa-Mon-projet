import './Card.scss'

function Card({ title, cover }) {
  return (
    <article className="card">
      <img src={cover} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </article>
  )
}

export default Card