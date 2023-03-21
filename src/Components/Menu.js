import "../Componentsdesign/Menu.css";
import Card from "./Card";
import data from "../Data/menuItems.json";
function Menu(){
    return(<>
    <div className="menuContainer">
        <h1 className="menuHeading">Our&nbsp;Menu</h1>
        <div className="cards">
        {data.map((item)=>{
              return <Card item={item} key={item.id} isBtn={true}/>
            })}
        </div>
    </div>
    </>);
}
export default Menu;