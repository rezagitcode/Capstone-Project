import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
function Main(){
    return(
        <>
        <main className="main">
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </main>
        </>
    );
}
export default Main;