import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import { useAccommodation } from '../../hooks/useAccommodation'
import './Accommodation.scss'

function Accommodation() {
  const { id } = useParams()
  const { accommodation, loading } = useAccommodation(id)

  if (loading) {
    return <p className="accommodation-status">Chargement...</p>
  }

  if (!accommodation) {
    return <Navigate to="/404" replace />
  }

  return (
    <section className="accommodation">
      <Slideshow pictures={accommodation.pictures} />

      <div className="accommodation-header">
        <div className="accommodation-infos">
          <h1 className="accommodation-title">{accommodation.title}</h1>
          <p className="accommodation-location">{accommodation.location}</p>
          <ul className="accommodation-tags">
            {accommodation.tags.map((tag) => (
              <li key={tag} className="accommodation-tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="accommodation-side">
          <div className="accommodation-host">
            <span className="accommodation-host-name">{accommodation.host.name}</span>
            <img
              src={accommodation.host.picture}
              alt={accommodation.host.name}
              className="accommodation-host-picture"
            />
          </div>
          <Rating rating={accommodation.rating} />
        </div>
      </div>

      <div className="accommodation-collapses">
        <Collapse title="Description" content={accommodation.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {accommodation.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  )
}

export default Accommodation
