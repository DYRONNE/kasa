import logo from '../../assets/img/logo2.png';
import '../../style/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-logo" alt="logo_kasa_app" src={logo}></img>
            <p className="footer-p">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer