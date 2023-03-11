import '../Componentsdesign/Nav.css';
function Nav(){
    return(
        <>
        <nav>
            <ul className="links">
                <li className="link"><a href="/">Home</a></li>
                <li className="link"><a href="/">About</a></li>
                <li className="link"><a href="/">Menu</a></li>
                <li className="link"><a href="/">Reservations</a></li>
                <li className="link"><a href="/">Order&nbsp;Online</a></li>
                <li className="link"><a href="/">Login</a></li>
            </ul>
        </nav>
        </>
    );
}
export default Nav;