import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Gallery from '../../components/Gallery'
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
  }, [id])

  if (loading) {
    return null
  }

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <main className="logement">
      <Gallery pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </main>
  )
}

export default Logement