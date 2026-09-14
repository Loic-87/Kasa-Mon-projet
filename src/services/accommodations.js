// Data access layer for accommodations.
// Data is served statically from public/accommodations.json (simulates a backend).
// To connect a real API later, just change the fetch URL below.

export async function getAccommodations() {
  try {
    const response = await fetch('/accommodations.json')
    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error while fetching accommodations:', error)
    throw error
  }
}

export async function getAccommodationById(id) {
  const accommodations = await getAccommodations()
  return accommodations.find((accommodation) => accommodation.id === id)
}
