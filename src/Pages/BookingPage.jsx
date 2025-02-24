import { useReducer } from "react";
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
    if (submitAPI(formData)) {
      navigate("/confirmed", { state: formData });
    }
  }

  return (
    <main className="flex-grow-1">
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;
