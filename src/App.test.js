import { fireEvent,  render, screen, waitFor } from "@testing-library/react";
import {BookingForm, submitChecker} from "../src/Components/BookingForm.js";
import { initializeTimes, updateTimes } from "../src/Components/Main.js";
import { Main} from "../src/Components/Main.js";
import { BrowserRouter as Router } from "react-router-dom";
import BookingSlot from "./Components/BookingSlot.js";

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

  test("should save and get data to and from localStorage when form is submitted", () => {
    render(
    <>
    <Router>
    <Main/>
    </Router>
    <BookingForm/>
    </>
    );
    const submitButton = screen.getByDisplayValue("Make Your reservation");
    const date = jest.fn(()=>{return "12-12-2023"});
    fireEvent.click(submitButton);
    expect(submitChecker(date())).toBe(true);
  });

  test("should get data from localStorage",()=>{
    const bookSlotData = jest.fn(()=>{return [];});
    const myData = bookSlotData();
    render(
    <>
    <BookingSlot bookSlotData={myData}/>
    </>
    )
      
  });

  test("renders the date input field correctly", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "res-date");
    expect(dateInput).toHaveClass("formInputs");
  });

  test("renders the time select field correctly", () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute("id", "res-time");
    expect(timeSelect).toHaveClass("formInputs");
    expect(timeSelect).toHaveAttribute("disabled");
  });

  test("renders the guests input field correctly", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("id", "guests");
    expect(guestsInput).toHaveClass("formInputs");
    expect(guestsInput).toHaveAttribute("placeholder", "1");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("disabled");
  });

  test("renders the occasion select field correctly", () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionSelect).toHaveClass("formInputs");
    expect(occasionSelect).toHaveAttribute("disabled");
  });

  test("renders the submit button correctly", () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toHaveClass("formInputs");
    expect(submitButton).toHaveAttribute("disabled");
  });
  test("shows *required when date is not selected", () => {
    const handleDate = jest.fn(); // Define a mock handleDate function
    const props = {
      date: "",
      handleDate: handleDate, // Pass the mock handleDate function as a prop
      availableTimes: ["12:00", "14:00", "16:00"],
      time: "12:00",
      guests: 2,
      occasion: "Birthday",
      submitForm: jest.fn(),
      setDataChecker: jest.fn(),
      changeAvailableTimes: jest.fn(),
    };
    render(<BookingForm {...props} />);
  
    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const occasionInput = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
  
    expect(screen.getByText("*required")).toBeInTheDocument();
  
    fireEvent.change(dateInput, { target: { value: "2022-03-30" } });
  
     waitFor(() => {
      expect(screen.queryByText("*required")).not.toBeInTheDocument();
      expect(timeSelect).not.toHaveAttribute("disabled");
      expect(guestsInput).not.toHaveAttribute("disabled");
      expect(occasionInput).not.toHaveAttribute("disabled");
      expect(submitButton).not.toHaveAttribute("disabled");
    });
  });
});
