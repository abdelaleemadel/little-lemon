import CloseIcon from "./../assests/xmark-solid.svg";

function SmallMenu({ openMenu, setOpenMenu }) {
  /*  */
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
      <li className="list-group-item my-5">Home</li>
      <li className="list-group-item my-5">About</li>
      <li className="list-group-item my-5">Menu</li>
      <li className="list-group-item my-5">Reservations</li>
      <li className="list-group-item my-5">Order Online</li>
      <li className="list-group-item my-5">Login</li>
    </ul>
  );
}

export default SmallMenu;
