import { Link } from 'react-router-dom'
import '../../style/header.scss';
import logo from '../../assets/img/logo.png';




 
function Header() {
    return (
        <header className="header">
            <img className="header-logo" alt="logo_kasa_app" src={logo}></img>
            <nav className="header-nav">
                <Link className="header-nav_link" to="/">Accueil</Link>
                <Link className="header-nav_link" to="/info">A propos</Link>
            </nav>
        </header>
    )
}

export default Header