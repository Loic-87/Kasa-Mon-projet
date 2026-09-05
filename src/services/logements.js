// Couche d'acces aux donnees des logements.
// Les donnees sont servies statiquement depuis public/logements.json
// (simule un back-end). Pour brancher une vraie API plus tard,
// il suffira de changer l'URL du fetch ci-dessous.

export async function getLogements() {
  try {
    const response = await fetch('/logements.json')
    if (!response.ok) {
      throw new Error(`Erreur reseau : ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Erreur lors de la recuperation des logements :', error)
    throw error
  }
}

export async function getLogementById(id) {
  const logements = await getLogements()
  return logements.find((logement) => logement.id === id)
}