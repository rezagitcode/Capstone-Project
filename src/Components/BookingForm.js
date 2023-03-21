import React, { useState } from "react";
import "../Componentsdesign/BookingForm.css";
function BookingForm(){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // code for submitting the form goes here
    };
    return(<>
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(event) => setDate(event.target.value)} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(event) => setTime(event.target.value)}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(event) => setGuests(parseInt(event.target.value))} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
      </>
    );
}
export default BookingForm;