import Logo from "./../assests/Logo.svg";
function Footer() {
  return (
    <footer className="py-5 bg-first">
      <div className="container">
        <div className="row align-items-center  gy-5">
          <div className="col-6 col-lg-3 align-self-lg-start">
            <img src={Logo} alt="footer-logo" />
          </div>
          <div className="col-6 col-lg-3  align-self-start">
            <h4>Contact</h4>
            <ul
              className="
            ps-0"
            >
              <li className="list-group-item">address</li>
              <li className="list-group-item">phone number</li>
              <li className="list-group-item">email</li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h4>Dormant Navigation</h4>
            <ul
              className="
            ps-0"
            >
              <li className="list-group-item">Home</li>
              <li className="list-group-item">About</li>
              <li className="list-group-item">menu</li>
              <li className="list-group-item">Reservations</li>
              <li className="list-group-item">Order Online</li>
              <li className="list-group-item">Login</li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 align-self-start">
            <h4>Social Media Links</h4>
            <ul
              className="
            ps-0"
            >
              <li className="list-group-item">address</li>
              <li className="list-group-item">phone number</li>
              <li className="list-group-item">email</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
