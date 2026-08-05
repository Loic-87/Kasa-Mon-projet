import logoFooter from '../../assets/logo-footer.svg'
import './Footer.scss'
function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa" className="footer-logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer