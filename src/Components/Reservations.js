import BookingSlot from "./BookingSlot";
import "../Componentsdesign/BookingPage.css";
function Reservations(props){
    return(<>
    <div className="formContainerPage">
    <BookingSlot bookSlotData={props.bookSlotData}/>
    </div>
    </>);
}
export default Reservations;