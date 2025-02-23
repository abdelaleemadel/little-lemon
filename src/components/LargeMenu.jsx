import MenuIcon from "./../assests/menu-icon.png";

function LargeMenu() {
  return (
    <ul className="d-none my-auto d-lg-flex justify-content-evenly flex-grow-1 alig-items-center">
      <li className="list-group-item">Home</li>
      <li className="list-group-item">About</li>
      <li className="list-group-item">Menu</li>
      <li className="list-group-item">Reservations</li>
      <li className="list-group-item">Order Online</li>
      <li className="list-group-item">Login</li>
    </ul>
  );
}

export default LargeMenu;
