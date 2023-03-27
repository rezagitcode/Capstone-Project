import '../Componentsdesign/Nav.css';
import { Link } from 'react-router-dom';
function Nav(){
    return(
        <>
        <nav>
            <ul className="links">
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="/about">About</Link></li>
                <li className="link"><Link to="/menu">Menu</Link></li>
                <li className="link"><Link to="/reservations">Reservations</Link></li>
                <li className="link"><Link to="/">Order&nbsp;Online</Link></li>
                <li className="link"><Link to="/">Login</Link></li>
            </ul>
        </nav>
        </>
    );
}
export default Nav;