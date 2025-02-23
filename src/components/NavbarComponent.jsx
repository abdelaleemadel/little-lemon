import { Link } from "react-router";
import Logo from "./../assests/Logo.svg";
import MenuIcon from "./../assests/menu-icon.png";
import LargeMenu from "./LargeMenu";
import SmallMenu from "./SmallMenu";
import { useState } from "react";
function NavbarComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="position-relative py-4">
        <div className="container overflow d-flex justify-content-between align-items-center ">
          <img src={Logo} alt="logo" />
          <img
            src={MenuIcon}
            alt="menu icon"
            className="d-lg-none"
            height={"20px"}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
          <LargeMenu />
          <SmallMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
