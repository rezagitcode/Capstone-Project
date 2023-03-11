import '../Componentsdesign/Footer.css';
import myfooter from '../Assets/footlogo.png';
function Footer(){
    return(
        <>
        <footer className="myFooter">
          <img src={myfooter} alt="Footer" width="159px" height="281px"/>
          <div className="nav-links">
            <h1>Doormat&nbsp;Navigation</h1>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Menu</a>
            <a href="/">Reservations</a>
            <a href="/">Order&nbsp;Online</a>
            <a href="/">Login</a>
          </div>
          <div>
            <h1>Contact</h1>
            <h2>Chicago</h2>
            <h2>89798989789</h2>
            <h2>lemon@lemon.com</h2>
          </div>
          <div className='nav-links'>
            <h1>Social&nbsp;Media&nbsp;Links</h1>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.twitter.com/">Twitter</a>
            <a href="https://www.instagram.com/">Instagram</a>
          </div>
        </footer>
        </>
    );
}
export default Footer;