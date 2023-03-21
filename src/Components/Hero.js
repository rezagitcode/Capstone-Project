import '../Componentsdesign/Hero.css';
import { Link } from 'react-router-dom';
function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned<br></br> Mediterranean Restaurant,<br></br> focussed on traditional recipes<br></br> served with a modern twist</p>
                <Link to="/book"><button>Reserve a Table</button></Link>
            </div>
            <div className="heroImage">
                <img src={"../Assets/restauranfood.jpg"} alt="restaurantfood" width="auto" height="430"/>
            </div>
        </div>
        </>
    );
}
export default Hero;