import Home from './Home';
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';
import Reservations from './Reservations';
import { fetchAPI, submitAPI } from '../Data/fetch';
const updateTimes = (state, action) =>{
    switch(action.type){
        case "NEWDATE": return ["17:00","18:00","19:00","20:00","21:00"];
        case "CHANGEAVAILABLETIMES": return state.filter((time)=>{ return time !== action.bookedTime});
        default: return state;
    }
}
const initializeTimes = ()=>{
    let today = new Date();
    return fetchAPI(today);
}
function Main(){
    const [date,setDate] = useState("");
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());
    const [time, setTime] = useState("00:00");
    const handleDate = (value)=>{
        setDate(value);
        dispatch({type:"NEWDATE", newdate:date});
    }
    const changeAvailableTimes = ()=>{
        dispatch({type:"CHANGEAVAILABLETIMES", bookedTime:time})
    };
    return(
        <>
        <main className="main">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/menu" element={<Menu/>}/>
                    <Route exact path="/book" element={<BookingPage time={time} setTime={setTime} availableTimes={availableTimes} changeAvailableTimes={changeAvailableTimes} handleAvailableTimes={updateTimes} date={date} handleDate={handleDate}/>}/>
                    <Route exact path="/reservations" element={<Reservations/>}/>
                </Routes>
        </main>
        </>
    );
}
export {Main,initializeTimes,updateTimes};