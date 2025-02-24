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
    <div className="container  mx-auto row justify-content-center">
      <h1 className="my-5 fs-1 fw-bold text-center">Reserve a Table</h1>
      <form
        className=" row "
        onSubmit={(e) => {
          e.preventDefault();
          if (Object.keys(errors).length === 0) {
            submitForm({ date, time, number, occasion });
          }
        }}
      >
        <div className="row my-4  mx-auto col-12 col-lg-8 col-xl-7">
          <label htmlFor="res-date" className="ps-1 fs-5 fw-bold">
            Choose date*
          </label>
          <input
            className="mb-2 rounded rounded-3 mt-1 px-3 py-2"
            type="date"
            id="res-date"
            aria-required="true"
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
            <p className="text-danger ps-1" aria-live="assertive">
              {errors.date}
            </p>
          )}
        </div>
        <div className="row my-4  mx-auto col-12 col-lg-8 col-xl-7">
          <label htmlFor="res-time" className="ps-1 fs-5 fw-bold">
            Choose time*
          </label>
          <select
            id="res-time"
            className="mb-2 rounded rounded-3 mt-1 px-3 py-2"
            aria-required="true"
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
            <p className="text-danger ps-1" aria-live="assertive">
              {errors.time}
            </p>
          )}
        </div>
        <div className="row my-4  mx-auto col-12 col-lg-8 col-xl-7">
          <label htmlFor="guests" className="ps-1 fs-5 fw-bold">
            Number of guests*
          </label>
          <input
            type="number"
            className="mb-2 rounded rounded-3 mt-1 px-3 py-2"
            placeholder="1"
            required
            min="1"
            aria-required="true"
            max="10"
            id="guests"
            value={number}
            onBlur={() => setTouched((prev) => ({ ...prev, number: true }))}
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && touched.number && (
            <p className="text-danger ps-1" aria-live="assertive">
              {errors.number}
            </p>
          )}
        </div>
        <div className="row my-4  mx-auto col-12 col-lg-8 col-xl-7">
          <label htmlFor="occasion" className="ps-1 fs-5 fw-bold">
            Occasion*
          </label>
          <select
            id="occasion"
            aria-required="true"
            className="mb-2 rounded rounded-3 mt-1 px-3 py-2"
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
            <p className="text-danger" aria-live="assertive">
              {errors.occasion}
            </p>
          )}
        </div>

        <div className=" mx-auto col-12 col-lg-8 col-xl-7 text-center">
          <button
            type="submit"
            className="bg-second  my-5 w-auto py-2 px-4  rounded rounded-3 fw-bolder"
            aria-label="on Click"
            disabled={Object.keys(errors).length !== 0}
            aria-disabled={Object.keys(errors).length !== 0}
          >
            Make your reservation
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
