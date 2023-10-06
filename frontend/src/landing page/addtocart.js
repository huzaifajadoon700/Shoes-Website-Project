import React, { useContext } from "react";
import { Items } from "../App";
import { Link } from "react-router-dom";

function Addtocart() {
  const { cartx, setCartx } = useContext(Items);

  const handleIncrease = (index) => {
    const updatedCart = [...cartx];
    updatedCart[index].qun += 1;
    setCartx(updatedCart);
  };

  const handleDecrease = (index) => {
    const updatedCart = [...cartx];
    if (updatedCart[index].qun > 1) {
      updatedCart[index].qun -= 1;
      setCartx(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = cartx.filter((item, i) => i !== index);
    setCartx(updatedCart);
  };

  const calculateSubtotal = () => {
    return cartx.reduce((total, item) => total + item.price * item.qun, 0).toFixed(2);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="py-5 h-100">
        <div className="container">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-8">
              <div className="card card-registration-2" style={{ borderRadius: "15px" }}>
                <div className="card-body p-0">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <p className="mb-0 text-muted">{cartx.length} items</p>
                    </div>

                    {cartx.map((item, index) => (
                      <div
                        key={item.id}
                        className="mb-4 d-flex justify-content-between align-items-center"
                      >
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                          
                            src={`http://localhost:8000/${item.pic}`}

                            className="img-fluid rounded-3"
                            alt={item.title}
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Size: {item.size}</h6>
                          <h6 className="text-black mb-0">{item.title}</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 d-flex align-items-center">
                          <button
                            className="btn btn-link px-2"
                            onClick={() => handleDecrease(index)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={item.qun}
                            className="form-control form-control-sm"
                            readOnly
                          />
                          <button
                            className="btn btn-link px-2"
                            onClick={() => handleIncrease(index)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 text-end">
                          <h6 className="mb-0">€ {item.price * item.qun}</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <button
                            className="btn btn-link text-muted"
                            onClick={() => removeItem(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="pt-5">
                      <h6 className="mb-0">
                        <Link to="/" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i> Back to shop
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 bg-grey">
              {/* Summary Section */}
              <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-4">
                  <h5 className="text-uppercase">Items: {cartx.length}</h5>
                  <h5>$ {calculateSubtotal()}</h5>
                </div>

                <h5 className="text-uppercase mb-3">Shipping</h5>

                <div className="mb-4 pb-2">
                  <select className="form-select p-2 rounded bg-grey" style={{ width: "100%" }}>
                    <option value="1">Standard Delivery - $5.00</option>
                    {/* Add more shipping options if needed */}
                  </select>
                </div>

                <h5 className="text-uppercase mb-3">Discount Code</h5>

                <div className="mb-5">
                  <input type="text" className="form-control form-control-lg" placeholder="Enter your code" />
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-5">
                  <h5 className="text-uppercase">Total Price</h5>
                  <h5>$ {calculateSubtotal()}</h5>
                </div>

                <Link to="/checkout"><button className="btn btn-dark btn-lg w-100">Checkout</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Addtocart;
