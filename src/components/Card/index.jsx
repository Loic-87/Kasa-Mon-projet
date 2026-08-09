import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ id,title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </Link>
  )
}

export default Card