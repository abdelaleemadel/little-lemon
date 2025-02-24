import { useEffect, useState } from "react";

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

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};
      /* Validate Date */
      if (!date) {
        newErrors.date = "Reservation Date is Required";
      } else if (new Date(todayDate).getTime() > new Date(date).getTime()) {
        newErrors.date = "Reservation Date can't be in the Past";
      } else if (new Date(nextYear).getTime() < new Date(date).getTime()) {
        newErrors.date = "Reservation is open for only a year from now";
      }

      /* Validate Time */
      if (!time) {
        newErrors.time = "Reservation Time is Required";
      } else if (availableTimes.indexOf(time) === -1) {
        newErrors.time = "Reservation Time isn't available";
      }

      /* Validate Number of guests */
      if (!number) {
        newErrors.number = "Number of guests is Required";
      } else if (!Number(number)) {
        newErrors.nubmer = "Number of guests must be a number";
      } else if (number < 1) {
        newErrors.number = "Number of guests can't be less than 1";
      } else if (number > 10) {
        newErrors.number = "Number of guests can't be more than 10";
      }

      /* Validate Occasion */

      if (!occasion) {
        newErrors.occasion = "Occasion is Required";
      } else if (
        occasion !== "Birthday" &&
        occasion !== "Anniversary" &&
        occasion !== "Other"
      ) {
        newErrors.occasion = "Occasion must be Birthday, Anniversary or Other ";
      }

      setErrors(newErrors);
    };

    validateForm();
  }, [
    date,
    time,
    number,
    occasion,
    todayDate,
    availableTimes,
    nextYear,
    touched,
  ]);

  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        if (Object.keys(errors) === 0) {
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

      <button type="sumbit" disabled={Object.keys(errors).length !== 0}>
        Make your reservation
      </button>
    </form>
  );
}

export default BookingForm;
