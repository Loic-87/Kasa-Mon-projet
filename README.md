# Kasa

Application web d'une agence de location immobilière entre particuliers, réalisée dans le cadre de la formation **Développeur d'application JavaScript React** d'OpenClassrooms.

Il s'agit d'une refonte du site en **React** : une Single Page Application (SPA) qui affiche une liste de logements, la fiche détaillée de chaque logement, une page « À propos » et une page d'erreur 404.

## Technologies

- **React 19** (composants fonctionnels, hooks)
- **React Router v7** (routage côté client)
- **Vite** (build et serveur de développement)
- **Sass (SCSS)** — approche **mobile-first**
- **Oxlint** (linter)

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- npm (installé avec Node.js)

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/Loic-87/Kasa-Mon-projet.git
cd Kasa-Mon-projet

# Installer les dépendances
npm install
```

## Lancement

```bash
# Démarrer le serveur de développement (http://localhost:5173)
npm start

# Générer la version de production dans /dist
npm run build

# Prévisualiser la version de production en local
npm run preview

# Analyser le code avec le linter
npm run lint
```

## Structure du projet

```
public/               Données servies statiquement (accommodations.json)
src/
  assets/             Images et logos (SVG, bannières WebP)
  components/         Composants réutilisables (Banner, Card, Collapse,
                      Slideshow, Rating, ChevronIcon, Header, Footer, Layout)
  pages/              Pages (Home, About, Accommodation, Error)
  hooks/              Hooks personnalisés (useAccommodations, useAccommodation)
  services/           Couche d'accès aux données (fetch)
  data/               Contenu statique de la page À propos
  router/             Configuration des routes
  styles/             Variables et mixins Sass (breakpoints)
```

## Choix techniques

- **Approche mobile-first** : les styles de base ciblent le mobile, un mixin `desktop`
  (breakpoint 768px) ajoute les styles pour les écrans larges.
- **Couche service** : les données sont récupérées via `fetch` depuis un fichier JSON
  servi statiquement, dans une couche dédiée (`services/`) prête à être branchée sur
  une véritable API sans toucher aux composants.
- **Hooks personnalisés** : la logique de chargement des données est isolée dans des
  hooks (`useAccommodations`, `useAccommodation`) qui gèrent les états `loading` et
  `error`, laissant les composants purement présentationnels.
- **Composants réutilisables** : par exemple `Banner` (avec ou sans titre), `Collapse`
  (texte ou JSX) ou `ChevronIcon`.

## Auteur

Loïc — Projet OpenClassrooms.
