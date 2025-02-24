import { useEffect, useState } from "react";
import {
  isValidDate,
  isValidGuests,
  isValidOccasion,
  isValidTime,
} from "../validation";

function BookingForm({ availableTimes, dispatchTimes, submitForm }) {
  const todayDate = new Date().toISOString().slice(0, 10);
  const nextYear = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365)
    .toISOString()
    .slice(0, 10);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [date, setDate] = useState(todayDate);
  const [time, setTime] = useState(availableTimes[0]);
  const [number, setNumber] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  /* Validate Date */
  useEffect(() => {
    const validateDate = () => {
      const { isValid, error } = isValidDate(date, todayDate, nextYear);
      console.log(isValid, error);
      if (isValid) {
        setErrors((prev) => {
          const newState = { ...prev };
          delete newState.date;
          return newState;
        });
      } else if (!isValid) {
        setErrors((prev) => ({ ...prev, date: error }));
      }
    };

    validateDate();
  }, [date, todayDate, nextYear]);

  /* Validate Times */
  useEffect(() => {
    const validateTime = () => {
      const { isValid, error } = isValidTime(time, availableTimes);
      console.log(isValid, error);
      if (isValid) {
        setErrors((prev) => {
          const newState = { ...prev };
          delete newState.time;
          return newState;
        });
      } else if (!isValid) {
        setErrors((prev) => ({ ...prev, time: error }));
      }
    };

    validateTime();
  }, [time, availableTimes]);

  /* Validate Number of Guests */
  useEffect(() => {
    const validateGuests = () => {
      const { isValid, error } = isValidGuests(number);
      console.log(isValid, error);
      if (isValid) {
        setErrors((prev) => {
          const newState = { ...prev };
          delete newState.number;
          return newState;
        });
      } else if (!isValid) {
        setErrors((prev) => ({ ...prev, number: error }));
      }
    };
    validateGuests();
  }, [number]);
  /* Validate Occasion */
  useEffect(() => {
    const validateOccasion = () => {
      const { isValid, error } = isValidOccasion(occasion);
      console.log(isValid, error);
      if (isValid) {
        setErrors((prev) => {
          const newState = { ...prev };
          delete newState.occasion;
          return newState;
        });
      } else if (!isValid) {
        setErrors((prev) => ({ ...prev, occasion: error }));
      }
    };
    validateOccasion();
  }, [occasion]);
  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(errors);
        if (Object.keys(errors).length === 0) {
          submitForm({ date, time, number, occasion });
        }
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={todayDate}
        max={new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365)
          .toISOString()
          .slice(0, 10)}
        required
        value={date}
        onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
        onChange={(e) => {
          setDate(e.target.value);
          dispatchTimes(e.target.value);
        }}
      />
      {errors.date && touched.date && (
        <p className="text-danger">{errors.date}</p>
      )}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        value={time}
        onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes?.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>
      {errors.time && touched.time && (
        <p className="text-danger">{errors.time}</p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        required
        min="1"
        max="10"
        id="guests"
        value={number}
        onBlur={() => setTouched((prev) => ({ ...prev, number: true }))}
        onChange={(e) => setNumber(e.target.value)}
      />
      {errors.number && touched.number && (
        <p className="text-danger">{errors.number}</p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onBlur={() => setTouched((prev) => ({ ...prev, occasion: true }))}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>
      {errors.occasion && touched.occasion && (
        <p className="text-danger">{errors.occasion}</p>
      )}

      <button type="submit" disabled={Object.keys(errors).length !== 0}>
        Make your reservation
      </button>
    </form>
  );
}

export default BookingForm;
