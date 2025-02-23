import Salad from "./../assests/salad.jpg";
import Delivery from "./../assests/delivery.png";
function Specials() {
  return (
    <div className="my-5">
      <div className="container">
        <h2>Specials</h2>
        <div className="my-5 row gx-5 gy-5 border boder-1 border-warning justify-content-center">
          <div className="col-12 col-md-8 col-lg-7 col-xl-4  border boder-2 border-warning">
            <div className="border boder-3  border-warning">
              <img
                src={Salad}
                className="w-100 rounded rounded-5 rounded-bottom-0"
                alt=""
              />
              <div className="bg-secondary-subtle overflow-auto px-5">
                <div className="d-flex justify-content-between my-5">
                  <h3>Greek Salad</h3>
                  <h3 className="color-second">$12.99</h3>
                </div>
                <p className="mb-5">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.{" "}
                </p>
                <button className="my-5">
                  Order Delievery{" "}
                  <span>
                    <img src={Delivery} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-7 col-xl-4  border boder-2 border-warning">
            <div className="border boder-3  border-warning">
              <img
                src={Salad}
                className="w-100 rounded rounded-5 rounded-bottom-0"
                alt=""
              />
              <div className="bg-secondary-subtle overflow-auto px-5">
                <div className="d-flex justify-content-between my-5">
                  <h3>Greek Salad</h3>
                  <h3 className="color-second">$12.99</h3>
                </div>
                <p className="mb-5">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.{" "}
                </p>
                <button className="my-5">
                  Order Delievery{" "}
                  <span>
                    <img src={Delivery} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-7 col-xl-4  border boder-2 border-warning">
            <div className="border boder-3  border-warning">
              <img
                src={Salad}
                className="w-100 rounded rounded-5 rounded-bottom-0"
                alt=""
              />
              <div className="bg-secondary-subtle overflow-auto px-5">
                <div className="d-flex justify-content-between my-5">
                  <h3>Greek Salad</h3>
                  <h3 className="color-second">$12.99</h3>
                </div>
                <p className="mb-5">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.{" "}
                </p>
                <button className="my-5">
                  Order Delievery{" "}
                  <span>
                    <img src={Delivery} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
