import '../Componentsdesign/Hero.css';
function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned<br></br> Mediterranean Restaurant,<br></br> focussed on traditional recipes<br></br> served with a modern twist</p>
                <button>Reserve a Table</button>
            </div>
            <div className="image">
                <img src={"../Assets/restauranfood.jpg"} alt="restaurantfood" width="auto" height="430"/>
            </div>
        </div>
        </>
    );
}
export default Hero;