import "../Componentsdesign/Card.css";
function Card(props){
    return(<>
    <div className="cardContainer">
        <img src={props.item.imageSrc} alt="My items"/>
        <div className="details">
        <h1 className="itemName">{props.item.itemName}</h1>
        <h1 className="itemPrice">{props.item.itemPrice}</h1>
        <p>{props.item.itemDesc}</p>
        {props.isBtn === false && <a href="/" id="orderDelivery">
            <h1>Order a delivery</h1><img src={"../Assets/Scooter.jpg"} alt="scooter" height="17" width="20"></img>
            </a>}
        {props.isBtn === true && 
        <a href="/" className="OBtn">
            <button id="orderBtn">Order</button>
        </a>}
        </div>
    </div>
    </>);
}
export default Card;