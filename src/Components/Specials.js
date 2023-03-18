import "../Componentsdesign/Specials.css";
import Card from "./Card";
import data from "../Data/items.json";
function Specials(){
    return(
        <>
        <div className="specials-container">
        <div className="highlight">
            <h1>This weeks specials</h1>
            <button>Online Menu</button>
        </div>
        <div className="cards">
            {data.map((item)=>{
              return <Card item={item} key={item.id} isBtn={false}/>
            })}
        </div>
        </div>
        </>
    );
}
export default Specials;