import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { useLogements } from '../../hooks/useLogements'
import bannerHome from '../../assets/Banners/banner-home.webp'
import './Home.scss'

function Home() {
  const { logements } = useLogements()

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