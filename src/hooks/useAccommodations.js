import { useState, useEffect } from 'react'
import { getAccommodations } from '../services/accommodations'

export function useAccommodations() {
  const [accommodations, setAccommodations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getAccommodations()
      .then((data) => setAccommodations(data))
      .catch((err) => {
        console.error('Error while loading accommodations:', err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  return { accommodations, loading, error }
}
