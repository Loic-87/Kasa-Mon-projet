import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import { getLogementById } from '../../services/logements'
import './Logement.scss'

function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLogementById(id).then((data) => {
      setLogement(data)
      setLoading(false)
    })
    .catch((error) => {
      console.error("Erreur lors du chargement du logement:", error)
      setLoading(false)
    })
  }, [id])

  if (loading) {
    return null
  }

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <section className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-infos">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <ul className="logement-tags">
            {logement.tags.map((tag) => (
              <li key={tag} className="logement-tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="logement-side">
          <div className="logement-host">
            <span className="logement-host-name">{logement.host.name}</span>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement-host-picture"
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  )
}

export default Logement