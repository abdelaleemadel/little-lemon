export const isValidDate = (date, minDate, maxDate) => {
  let error;
  if (!date) {
    error = "Reservation Date is Required";
  } else if (new Date(minDate).getTime() > new Date(date).getTime()) {
    error = "Reservation Date can't be in the Past";
  } else if (new Date(maxDate).getTime() < new Date(date).getTime()) {
    error = "Reservation is open for only a year from now";
  }

  return error ? { isValid: false, error } : { isValid: true };
};

export const isValidTime = (time, availableTimes) => {
  let error;
  if (!time) {
    error = "Reservation Time is Required";
  } else if (availableTimes.indexOf(time) === -1) {
    error = "Reservation Time isn't available";
  }
  return error ? { isValid: false, error } : { isValid: true };
};

export const isValidGuests = (number) => {
  let error;
  if (!number) {
    error = "Guests' Number is Required";
  } else if (isNaN(number)) {
    error = "Guests' Number must be a number";
  } else if (number < 1) {
    error = "Guests' Number can't be less than 1";
  } else if (number > 10) {
    error = "Guests' Number can't be more than 10";
  }
  return error ? { isValid: false, error } : { isValid: true };
};

export const isValidOccasion = (occasion) => {
  let error;

  if (!occasion) {
    error = "Occasion is Required";
  } else if (
    occasion !== "Birthday" &&
    occasion !== "Anniversary" &&
    occasion !== "Other"
  ) {
    error = "Occasion must be Birthday, Anniversary or Other";
  }

  return error ? { isValid: false, error } : { isValid: true };
};
