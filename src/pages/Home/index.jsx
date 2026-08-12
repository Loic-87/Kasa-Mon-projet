import logements from '../../data/logements.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import bannerHome from '../../assets/banner-home.webp'
import './Home.scss'

function Home() {
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