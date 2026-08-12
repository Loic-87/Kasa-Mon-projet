import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
  return (
    <main className="error">
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error