import React, { useState } from "react";
import "../Componentsdesign/BookingForm.css";
function BookingForm(props){
    
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const handleSubmit = (event) => {
      event.preventDefault();
      props.changeAvailableTimes();
      // code for submitting the form goes here
    };
    return(<>
        <div className="formContainer">
          <h1>Reserve a Table</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" className="formInputs" value={props.date} onChange={(event) => props.handleDate(event.target.value)} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={props.time} disabled={!props.date} className="formInputs" onChange={(event) =>{ props.setTime(event.target.value)}}>
        <option value="00:00">00:00</option>
          {props.availableTimes.map((item, index)=>{
            return <option key={index}>{item}</option>
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" disabled={!props.date} className="formInputs" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(event) => setGuests(parseInt(event.target.value))} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" disabled={!props.date} className="formInputs" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" disabled={!props.date} className="formInputs submitForm" value="Make Your reservation" />
      </form>
        </div>
      </>
    );
}
BookingForm.defaultProps = {
  availableTimes: []
};
export default BookingForm;