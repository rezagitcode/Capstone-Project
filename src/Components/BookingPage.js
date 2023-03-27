import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import "../Componentsdesign/BookingPage.css";
function BookingPage(props){
    return(<>
    <div className="formContainerPage">
    <BookingSlot date={props.date}/>
    <BookingForm availableTimes={props.availableTimes} time={props.time} setTime={props.setTime} changeAvailableTimes={props.changeAvailableTimes} handleAvailableTimes={props.handleAvailableTimes} date={props.date} handleDate={props.handleDate}/>
    </div>
    </>);
}
export default BookingPage;