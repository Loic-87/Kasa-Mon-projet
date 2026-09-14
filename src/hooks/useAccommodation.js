import { useState, useEffect } from 'react'
import { getAccommodationById } from '../services/accommodations'

export function useAccommodation(id) {
  const [accommodation, setAccommodation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getAccommodationById(id)
      .then((data) => setAccommodation(data))
      .catch((err) => {
        console.error('Error while loading the accommodation:', err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [id])

  return { accommodation, loading, error }
}
