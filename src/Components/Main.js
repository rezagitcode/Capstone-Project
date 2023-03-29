import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import Reservations from "./Reservations";
import { fetchAPI, submitAPI } from "../Data/fetch";
import { useNavigate } from "react-router-dom";
const updateTimes = (state, action) => {
  switch (action.type) {
    case "NEWDATE":
      return fetchAPI(new Date(action.newdate));
    case "CHANGEAVAILABLETIMES":
      return state.filter((time) => {
        return time !== action.bookedTime;
      });
    default:
      return state;
  }
};
const initializeTimes = () => {
  let today = new Date();
  return fetchAPI(today);
};
function Main() {
  const [dataChecker, setDataChecker] = useState(false);
  const [date, setDate] = useState("");
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [time, setTime] = useState("00:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [bookSlotData, setBookSlotData] = useState([]);
  const handleDate = (value) => {
    setDate(value);
    dispatch({ type: "NEWDATE", newdate: date });
  };
  const changeAvailableTimes = () => {
    dispatch({ type: "CHANGEAVAILABLETIMES", bookedTime: time });
  };
  const navigate = useNavigate();
  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate("/booking-confirmed");
    }
  };

  useEffect(()=>{
    if(dataChecker === true){
      const newData = {
        date: date,
        time: time,
        guests: guests,
        occasion: occasion
      }
      const formData = JSON.parse(localStorage.getItem("formData")) || [];
      localStorage.setItem("formData", JSON.stringify([...formData, newData]));
      setBookSlotData(JSON.parse(localStorage.getItem("formData")) || []);
      setDataChecker(false);
    }
    // eslint-disable-next-line
  },[dataChecker])

  return (
    <>
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route
            exact
            path="/book"
            element={
              <BookingPage
                time={time}
                submitForm={submitForm}
                setTime={setTime}
                availableTimes={availableTimes}
                changeAvailableTimes={changeAvailableTimes}
                handleAvailableTimes={updateTimes}
                date={date}
                handleDate={handleDate}
                dataChecker={dataChecker}
                setDataChecker={setDataChecker}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
              />
            }
          />
          <Route exact path="/reservations" element={<Reservations bookSlotData={bookSlotData}/>} />
          <Route
            exact
            path="/booking-confirmed"
            element={<ConfirmedBooking />}
          />
        </Routes>
      </main>
    </>
  );
}
export { Main, initializeTimes, updateTimes};
