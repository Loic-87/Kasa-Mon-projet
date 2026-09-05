import { useState, useEffect } from 'react'
import { getLogements } from '../services/logements'

export function useLogements() {
  const [logements, setLogements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getLogements()
      .then((data) => setLogements(data))
      .catch((err) => {
        console.error('Erreur lors du chargement des logements :', err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  return { logements, loading, error }
}