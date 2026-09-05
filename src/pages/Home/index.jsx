import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { getLogements } from '../../services/logements'
import bannerHome from '../../assets/Banners/banner-home.webp'
import './Home.scss'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    getLogements().then((data) => setLogements(data))
    .catch((error) => console.error("Erreur lors du chargement des logements:", error))
  }, [])

  return (
    <>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </>
  )
}

export default Home