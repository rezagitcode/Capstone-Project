import "../Componentsdesign/About.css";
function About(){
    return(<>
    <div className="aboutContainer">
        <div className="aboutDescription">
            <h1>Little&nbsp;Lemon</h1>
            <h2>Chicago</h2>
            <p>Welcome to Little Lemon Restaurant, where we offer a fresh and unique dining experience. Our menu features a delightful selection of dishes made with locally sourced ingredients, from savory entrees to mouth-watering desserts. Our cozy and inviting atmosphere is perfect for a romantic evening or a fun night out with friends. We take pride in providing exceptional service and look forward to serving you soon. Come and discover the taste of Little Lemon!</p>
        </div>
        <div className="aboutImage">
            <div className="aboutImageBox aboutImageBox1">
           <img src="../Assets/Mario and Adrian A.jpg" alt="Mario&Adrian" />
            </div>
            <div className="aboutImageBox aboutImageBox2">
           <img src="../Assets/Mario and Adrian b.jpg" alt="Mario&Adrian" />
            </div>
        </div>
    </div>
    </>);
}
export default About;