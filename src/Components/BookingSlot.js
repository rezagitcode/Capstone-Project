import "../Componentsdesign/BookingSlot.css";
function BookingSlot(props) {
  return (
    <>
        <div className="bookingSlotContainer">
          <div className="bookedTables">
            <b className="heading">Booked&nbsp;Tables:</b>
            <b>Date:{props.date? props.date:"00-00-00"}</b>
            <b>Time:00:00</b>
          </div>
          <div className="availableTimes">
            <b className="heading">Available&nbsp;Times:</b>
            <b>Time</b>
            <b>Time</b>
            <b>Time</b>
          </div>
        </div>
    </>
  );
}
export default BookingSlot;
