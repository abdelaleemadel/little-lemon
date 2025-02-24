import { Link, useLocation } from "react-router";

function ConfirmedBooking() {
  const location = useLocation();
  const { date, time, number, occasion } = location.state || {};
  return (
    <main className="flex-grow-1 d-flex flex-column justify-content-evenly">
      <div className="d-flex justify-content-center flex-column alert alert-success container">
        <h2 className="text-center w-auto alert">
          The booking has been confirmed.
        </h2>
        {date && <p className="fs-4">Date: {date}</p>}
        {time && <p className="fs-4">Time: {time}</p>}
        {number && <p className="fs-4">Number of guests: {number}</p>}
        {occasion && <p className="fs-4">Number of guests: {occasion}</p>}
      </div>
      <div className="container my-3 ps-0">
        <Link
          to={"/booking"}
          className="border text-decoration-none px-5 py-3 fs-5 ms-0 bg-second text-black fw-bold rounded rounded-4"
        >
          Edit Reservation
        </Link>
      </div>
    </main>
  );
}

export default ConfirmedBooking;
