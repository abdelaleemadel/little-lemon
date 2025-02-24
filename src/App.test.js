import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./Pages/BookingPage";
import { fetchAPI } from "./api";

/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("app");
  expect(linkElement).toBeInTheDocument();
}); */
test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
/* ================================================================ */
/* intializeTimes */
jest.mock("./api.js", () => ({
  ...jest.requireActual("./api.js"),
  fetchAPI: jest.fn(),
}));

test("initialize items gives an array", () => {
  const mockTimes = ["timeA", "timeB", "timeC"];
  fetchAPI.mockReturnValue(mockTimes);
  const result = initializeTimes();

  expect(fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(mockTimes);
});
/* Update Times  */
test("Update times returns available dates", () => {
  const mockTimes = ["timeA", "timeB", "timeC"];
  fetchAPI.mockReturnValue(mockTimes);

  const result = updateTimes(null, "2025-12-05");
  expect(fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(mockTimes);
});
