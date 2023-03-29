import "../Componentsdesign/BookingSlot.css";
function BookingSlot(props) {
  return (
    <>
        <div className="bookingSlotContainer">
          <h1 id="reserve">Reservations</h1>
        {props.bookSlotData.map((item, index) => {
                return (<div key={index} className="subContainer">
                <h1>Date: {item.date}</h1>
                <h1>Reserved Time: {item.time}</h1>
                <h1>Number of Guests: {item.guests}</h1>
                <h1>Occasion: {item.occasion}</h1>
                </div>);
              })}
          
        </div>
    </>
  );
}
export default BookingSlot;
