import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConfirmedBooking from "./Pages/ConfirmedBooking";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
