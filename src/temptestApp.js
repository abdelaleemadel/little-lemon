import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./Pages/BookingPage";
import { fetchAPI } from "./api";
import { isValidDate, isValidGuests } from "./validation";
