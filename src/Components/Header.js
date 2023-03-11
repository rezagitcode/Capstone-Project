import headlogo from "../Assets/headlogo.png";
import '../Componentsdesign/Header.css';
import Nav from "./Nav";
function Header(){
    return(
        <>
        <header className="myHeader">
            <img src={headlogo} alt="This is a logo" height="56px" width="auto"/>
            <Nav/>
        </header>
        </>
    );
}
export default Header;