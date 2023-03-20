import '../Componentsdesign/Testimonials.css';
function Testimonials(){
    return(<>
    <div className="containerTestimonials">
        <h1>Testimonials</h1>
        <div className="minCardsContainer">
        <div className="minCards">
            <div className="starContainer">
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
            </div>
            <div className="photoName">
                <img src="../Assets/Avatar.png" alt="Avatar"/>
                <h2>John</h2>
            </div>
            <p className="comment">Exquisite flavors, impeccable service.</p>
        </div>
        <div className="minCards">
            <div className="starContainer">
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
            </div>
            <div className="photoName">
                <img src="../Assets/JapanBoy.png" alt="Avatar"/>
                <h2>Andrew</h2>
            </div>
            <p className="comment">Delicious food, welcoming atmosphere.</p>
        </div>
        <div className="minCards">
            <div className="starContainer">
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
            </div>
            <div className="photoName">
                <img src="../Assets/Photo.jpg" alt="Avatar"/>
                <h2>Manik</h2>
            </div>
            <p className="comment">Delicious cuisine, cozy ambiance.</p>
        </div>
        <div className="minCards">
            <div className="starContainer">
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
                <img src="../Assets/star.jpg" alt="star" />
            </div>
            <div className="photoName">
                <img src="../Assets/Photo (2).jpg" alt="Avatar"/>
                <h2>Ayan</h2>
            </div>
            <p className="comment">Exceptional dining experience, highly recommend.</p>
        </div>
        </div>
    </div>
    </>);
}
export default Testimonials;