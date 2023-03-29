import { fireEvent, getByDisplayValue, render, screen } from "@testing-library/react";
import {BookingForm, submitChecker} from "../src/Components/BookingForm.js";
import { initializeTimes, updateTimes } from "../src/Components/Main.js";
import { Main} from "../src/Components/Main.js";
import { BrowserRouter as Router } from "react-router-dom";

describe("testing components", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });
  test("testing initializeTimes function", () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
  });
  //testing updateTimes function below:
  test("should return the same state if action type is not recognized", () => {
    const initialState = initializeTimes();
    const action = { type: "UNKNOWN_ACTION_TYPE" };
    const state = updateTimes(initialState, action);
    expect(state).toEqual(initialState);
  });

  test('should return the new array of available times when action type is "NEWDATE"', () => {
    const initialState = initializeTimes();
    const action = { type: "NEWDATE" };
    const state = updateTimes(initialState, action);
    expect(state).not.toBe(initialState);
  });

  test('should return a filtered array of available times when action type is "CHANGEAVAILABLETIMES"', () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const action = { type: "CHANGEAVAILABLETIMES", bookedTime: "18:00" };
    const state = updateTimes(initialState, action);
    expect(state).toEqual(["17:00", "19:00", "20:00", "21:00"]);
  });

  test("should save data to localStorage when form is submitted", () => {
    render(
    <>
    <Router>
    <Main/>
    </Router>
    <BookingForm/>
    </>
    );
    const submitButton = screen.getByDisplayValue("Make Your reservation");
    fireEvent.click(submitButton);
    expect(submitChecker()).toBe(true);
  });

  test("should get data from localStorage",()=>{
    render(
      <>
      <Router>
      <Main/>
      </Router>
      <BookingForm/>
      </>
      );
      const submitButton = screen.getByDisplayValue("Make Your reservation");
      fireEvent.click(submitButton);
      expect(submitChecker()).toBe(true);
  });

 
});
