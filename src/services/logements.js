import logementsData from '../data/logements.json'

// Couche d'accès aux données des logements.
// Aujourd'hui : lecture du JSON local (simule le back-end).
// Demain : il suffira de remplacer le corps de ces fonctions par un fetch
// vers la vraie API, sans toucher aux composants qui les appellent.

export async function getLogements() {
  return logementsData
}

export async function getLogementById(id) {
  return logementsData.find((logement) => logement.id === id)
}
