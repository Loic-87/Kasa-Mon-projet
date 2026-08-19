import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { getLogements } from '../../services/logements'
import bannerHome from '../../assets/banner-home.webp'
import './Home.scss'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    getLogements().then((data) => setLogements(data))
  }, [])

  return (
    <main>
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
    </main>
  )
}

export default Home