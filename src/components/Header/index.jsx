import { NavLink } from 'react-router-dom'
import logo from '../../assets/SVG/LOGO.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header-logo" />
      <nav className="header-nav">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header