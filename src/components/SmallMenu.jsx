import { Link } from "react-router";
import CloseIcon from "./../assests/xmark-solid.svg";

function SmallMenu({ openMenu, setOpenMenu }) {
  /*  */
  function closeMenu() {
    setOpenMenu(false);
  }
  return (
    <ul
      className={`d-lg-none position-absolute  ${
        openMenu ? "open" : "close"
      } menu end-0   bg-body-tertiary top-0  bottom-0  min-vh-100 vw-100  align-items-end py-4 px-5 `}
    >
      <li className="list-group-item text-end  container">
        <img
          src={CloseIcon}
          alt="close-menu"
          height={"40px"}
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      </li>
      <li className="list-group-item my-5 ">
        <Link
          className="text-decoration-none text-black"
          onClick={closeMenu}
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="list-group-item my-5">
        <Link
          className="text-decoration-none text-black"
          onClick={closeMenu}
          to="/"
        >
          About
        </Link>
      </li>
      <li className="list-group-item my-5">
        <Link
          className="text-decoration-none text-black"
          onClick={closeMenu}
          to="/"
        >
          Menu
        </Link>
      </li>
      <li className="list-group-item my-5">
        <Link
          className="text-decoration-none text-black"
          onClick={closeMenu}
          to="/booking"
        >
          Reservations
        </Link>
      </li>
      <li className="list-group-item my-5">
        <Link
          className="text-decoration-none text-black"
          onClick={closeMenu}
          to="/"
        >
          Order Online
        </Link>
      </li>
      <li className="list-group-item my-5">
        <Link
          className="text-decoration-none text-black"
          onClick={closeMenu}
          to="/"
        >
          Login
        </Link>
      </li>
    </ul>
  );
}

export default SmallMenu;
