import Collapse from '../../components/Collapse'

function About() {
  return (
    <main>
      <h1>À propos</h1>
      <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale." />
      <Collapse title="Equipements" content="Wi-Fi, cuisine équipée, télévision." />
    </main>
  )
}

export default About