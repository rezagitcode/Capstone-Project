import BookingForm from "./BookingForm";
import "../Componentsdesign/BookingPage.css";
function BookingPage(props) {
  return (
    <>
      <div className="formContainerPage">
        <BookingForm
          submitForm={props.submitForm}
          availableTimes={props.availableTimes}
          time={props.time}
          setTime={props.setTime}
          changeAvailableTimes={props.changeAvailableTimes}
          handleAvailableTimes={props.handleAvailableTimes}
          date={props.date}
          handleDate={props.handleDate}
          dataChecker={props.dataChecker}
          setDataChecker={props.setDataChecker}
          guests={props.guests}
          setGuests={props.setGuests}
          occasion={props.occasion}
          setOccasion={props.setOccasion}
        />
      </div>
    </>
  );
}
export default BookingPage;
