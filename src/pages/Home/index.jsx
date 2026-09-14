import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { useAccommodations } from '../../hooks/useAccommodations'
import bannerHome from '../../assets/Banners/banner-home.webp'
import './Home.scss'

function Home() {
  const { accommodations, loading, error } = useAccommodations()

  return (
    <>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />

      {loading && <p className="home-status">Chargement des logements...</p>}

      {error && (
        <p className="home-status">
          Une erreur est survenue lors du chargement des logements.
        </p>
      )}

      {!loading && !error && (
        <section className="gallery">
          {accommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              id={accommodation.id}
              title={accommodation.title}
              cover={accommodation.cover}
            />
          ))}
        </section>
      )}
    </>
  )
}

export default Home
