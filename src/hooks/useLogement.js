import { useState, useEffect } from 'react'
import { getLogementById } from '../services/logements'

export function useLogement(id) {
  const [logement, setLogement] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getLogementById(id)
      .then((data) => setLogement(data))
      .catch((err) => {
        console.error('Erreur lors du chargement du logement :', err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [id])

  return { logement, loading, error }
}