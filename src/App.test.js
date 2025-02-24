import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./Pages/BookingPage";
import { fetchAPI } from "./api";
import * as validationFunctions from "./validation";

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

/* */
describe("Input's Attributes testing", () => {
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

/* Validation functions */
/*  */
/* DATE INPUT */
describe("Testing date input validation", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();
  const submitForm = jest.fn();
  /* Valid Date */
  test("No error messages should appear when entering valid date", () => {
    const date = "2026-02-07";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/date/);
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.blur(dateInput);

    const dateError = screen.queryByText(/^Reservation/);
    expect(dateError).toBeNull();
  });
  /* No Date */
  test("Should show error message if there's no date", () => {
    const date = "";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/date/);
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.blur(dateInput);

    const dateError = screen.queryByText(/Reservation Date is Required/);
    expect(dateError).toBeInTheDocument();
  });
  /* Past Date */
  test("Should show error message when the date has passed", () => {
    const date = "2025-01-01";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/date/);
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.blur(dateInput);

    const dateError = screen.queryByText(
      /Reservation Date can't be in the Past/
    );
    expect(dateError).toBeInTheDocument();
  });
  /* Future Date */
  test("Should show error message when the date is after more than a year", () => {
    const date = "2027-01-01";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText(/date/);
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.blur(dateInput);

    const dateError = screen.queryByText(
      /Reservation is open for only a year from now/
    );
    expect(dateError).toBeInTheDocument();
  });
});

/* TIME INPUT */
describe("Testing time input validation", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();
  const submitForm = jest.fn();

  /* Valid Time */
  test("No error message when the time is from the availableTimes arrays", () => {
    const time = "17:00";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const timeInput = screen.getByLabelText(/time/);
    fireEvent.change(timeInput, { target: { value: time } });
    fireEvent.blur(timeInput);

    const timeError = screen.queryByText(/Reservation Time/);
    expect(timeError).toBeNull();
  });

  /* Not available Time */
  test("Should show error message when the time isn't in the availableTimes array", () => {
    const time = "33";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const timeInput = screen.getByLabelText(/time/);
    fireEvent.change(timeInput, { target: { value: time } });
    fireEvent.blur(timeInput);

    const timeError = screen.queryByText(/Reservation Time is Required/);
    expect(timeError).toBeInTheDocument();
  });

  /* No Time */
  test("Should show error message when the time isn't provided", () => {
    const time = "";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const timeInput = screen.getByLabelText(/time/);
    fireEvent.change(timeInput, { target: { value: time } });
    fireEvent.blur(timeInput);

    const timeError = screen.queryByText(/Reservation Time/);
    expect(timeError).toBeInTheDocument();
  });
});

/* NUMBER OF GUESTS INPUT */
describe("Testing number of guests input validation", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();
  const submitForm = jest.fn();

  /* Valid Number of guests */
  test("No error message when the number of guests is between 1 and 10", () => {
    const number = 3;

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/time/);
    fireEvent.change(guestsInput, { target: { value: number } });
    fireEvent.blur(guestsInput);

    const guestsError = screen.queryByText(/Guests' Number/);
    expect(guestsError).toBeNull();
  });

  /* Number of guests less than 1 */
  test("Should show error message when the number of guests is less than 1", () => {
    const number = -1;

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number/);
    fireEvent.change(guestsInput, { target: { value: number } });
    fireEvent.blur(guestsInput);

    const guestsError = screen.queryByText(
      /Guests' Number can't be less than 1/
    );
    expect(guestsError).toBeInTheDocument();
  });

  /* Number of guests more than 10 */
  test("Should show error message when the number of guests is more than 10", () => {
    const number = 11;

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number/);
    fireEvent.change(guestsInput, { target: { value: number } });
    fireEvent.blur(guestsInput);

    const guestsError = screen.queryByText(
      /Guests' Number can't be more than 10/
    );
    expect(guestsError).toBeInTheDocument();
  });

  /* Number of guests not provided */
  test("Should show error message when the number doesn't exist", () => {
    const number = "";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number/);
    fireEvent.change(guestsInput, { target: { value: number } });
    fireEvent.blur(guestsInput);

    const guestsError = screen.queryByText(/Guests' Number is Required/);
    expect(guestsError).toBeInTheDocument();
  });
});

/* OCCASION INPUT */
describe("Testing occasion input validation", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();
  const submitForm = jest.fn();

  /* Valid Occasion */
  test("No error message when the number of Occasion is valid", () => {
    const occasion = "Birthday";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });
    fireEvent.blur(occasionInput);

    const occasionError = screen.queryByText(/Occasion is Required/);
    const occasionError2 = screen.queryByText(
      /Occasion must be Birthday, Anniversary or Other/
    );
    expect(occasionError).toBeNull();
    expect(occasionError2).toBeNull();
  });

  /* Occasion is not provided */
  test("Should show error message when the Occasion doesn't exist", () => {
    const occasion = "";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });
    fireEvent.blur(occasionInput);

    const occasionError = screen.queryByText(/Occasion is Required/);
    expect(occasionError).toBeInTheDocument();
  });
  /* Occasion is not valid */
  test("Should show error message when the Occasion isn't valid", () => {
    const occasion = "hi you";

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    );

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });
    fireEvent.blur(occasionInput);

    const occasionError = screen.queryByText(/Occasion is Required/);
    expect(occasionError).toBeInTheDocument();
  });
});
