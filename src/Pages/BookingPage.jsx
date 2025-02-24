import { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router";

export const initializeTimes = () => {
  let res = fetchAPI(new Date());
  return res;
};

export function updateTimes(state, action) {
  if (action) {
    state = fetchAPI(new Date(action));
  }
  return state;
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  function submitForm(formData) {
    console.log(formData);

    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;
