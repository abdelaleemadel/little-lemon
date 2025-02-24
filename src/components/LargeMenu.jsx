import { Link } from "react-router";
import MenuIcon from "./../assests/menu-icon.png";

function LargeMenu() {
  return (
    <ul className="d-none my-auto d-lg-flex justify-content-evenly flex-grow-1 alig-items-center">
      <li className="list-group-item">
        <Link className="text-decoration-none text-black" to="/">
          Home
        </Link>
      </li>
      <li className="list-group-item">
        <Link className="text-decoration-none text-black" to="/">
          About
        </Link>
      </li>
      <li className="list-group-item">
        <Link className="text-decoration-none text-black" to="/">
          Menu
        </Link>
      </li>
      <li className="list-group-item">
        <Link className="text-decoration-none text-black" to="/booking">
          Reservations
        </Link>
      </li>
      <li className="list-group-item">
        <Link className="text-decoration-none text-black" to="/">
          Order Online
        </Link>
      </li>
      <li className="list-group-item">
        <Link className="text-decoration-none text-black" to="/">
          Login
        </Link>
      </li>
    </ul>
  );
}

export default LargeMenu;
