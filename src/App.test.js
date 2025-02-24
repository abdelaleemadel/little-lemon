import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./Pages/BookingPage";
import { fetchAPI } from "./api";

/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("app");
  expect(linkElement).toBeInTheDocument();
}); */
/* test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
}); */
/* ================================================================ */
/* intializeTimes */
/* jest.mock("./api.js", () => ({
  ...jest.requireActual("./api.js"),
  fetchAPI: jest.fn(),
})); */

/* test("initialize items gives an array", () => {
  const mockTimes = ["timeA", "timeB", "timeC"];
  fetchAPI.mockReturnValue(mockTimes);
  const result = initializeTimes();

  expect(fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(mockTimes);
}); */
/* Update Times  */
/* test("Update times returns available dates", () => {
  const mockTimes = ["timeA", "timeB", "timeC"];
  fetchAPI.mockReturnValue(mockTimes);

  const result = updateTimes(null, "2025-12-05");
  expect(fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(mockTimes);
}); */

/* FORM */

describe("Form testing", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();
  const submitForm = jest.fn();
  const todayDate = new Date().toISOString().slice(0, 10);
  const nextYear = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365)
    .toISOString()
    .slice(0, 10);

  /* Date-input */
  test("Date input has the correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );
    const dateInput = screen.getByLabelText(/date/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("id", "res-date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("value", todayDate);
    expect(dateInput).toHaveAttribute("min", todayDate);
    expect(dateInput).toHaveAttribute("max", nextYear);
  });
  /* Time input */

  test("Time input has the correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );
    const timeInput = screen.getByLabelText(/time/);
    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveAttribute("id", "res-time");
    expect(timeInput).toHaveAttribute("required");
  });
  /* Number of guests */
  test("Number of guests input has the correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );
    const guestsInput = screen.getByLabelText(/guests/);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("id", "guests");
    expect(guestsInput).toHaveAttribute("placeholder", "1");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("value");
    expect(guestsInput).toHaveAttribute("required");
  });
  /* Occasion */
  test("occasion input has the correct attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );
    const occasionInput = screen.getByLabelText(/occasion/i);
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput).toHaveAttribute("id", "occasion");
    expect(occasionInput).toHaveAttribute("required");
  });
});
