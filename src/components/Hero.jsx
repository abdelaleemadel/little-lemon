import { Link } from "react-router";
import HeroImage from "./../assests/hero.jpg";
function Hero() {
  return (
    <div className="bg-first p-5 d-flex justify-content-center">
      <div className="container row border border-2 justify-content-center justify-content-lg-between">
        <div className="col-12 gy-5 col-md-8 col-lg-6 col-xl-4 py-5">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="mt-3 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="./booking">
            {" "}
            <button className="bg-second mt-5">Reserve a Table</button>
          </Link>
        </div>
        <div className=" col-12 col-md-8 gy-5  col-lg-6 g-0 text-center border">
          <img src={HeroImage} alt="" className="w-75 rounded rounded-5 " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
