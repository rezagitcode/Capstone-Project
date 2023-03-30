import "../Componentsdesign/BookingForm.css";
const submitChecker = (value)=>{
  if(typeof value === "string"){
    return true;
  }
  else{
    return false;
  }
}
function BookingForm(props) {
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.changeAvailableTimes();
      const newFormData = {
        date: props.date,
        time: props.time,
        guests: props.guests,
        occasion: props.occasion,
      };
      props.submitForm(newFormData);
      props.setDataChecker(true);
      submitChecker(props.date);
      // code for submitting the form goes here
    };

    

    return (
      <>
        <div className="formContainer" aria-label="On Click">
          <h1>Reserve a Table</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              className="formInputs"
              value={props.date}
              onChange={(event) => props.handleDate(event.target.value)}
            />
            { !props.date &&
            <b id="required">*required</b>
            }
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={props.time}
              disabled={!props.date}
              className="formInputs"
              onChange={(event) => {
                props.setTime(event.target.value);
              }}
            >
              <option value="00:00">00:00</option>
              {props.availableTimes.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              disabled={!props.date}
              className="formInputs"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={props.guests}
              onChange={(event) => {
                const value = parseInt(event.target.value);
                if (value >= 1 && value <= 10) {
                  props.setGuests(value);
                }
              }}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              disabled={!props.date}
              className="formInputs"
              value={props.occasion}
              onChange={(event) => props.setOccasion(event.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input
              type="submit"
              disabled={!props.date}
              className="formInputs submitForm"
              value="Make Your reservation"
            />
          </form>
        </div>
      </>
    );
  
}
BookingForm.defaultProps = {
  availableTimes: [],
};
export {BookingForm, submitChecker};
