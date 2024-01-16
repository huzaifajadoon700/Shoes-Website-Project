import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useContext } from "react";
import { Items } from "../App";
import { BsCartPlusFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const { names } = useContext(Items);

  
  const isAuthenticated = false; // Replace this with your authentication logic
  const navigate = useNavigate();
  const handleAdminClick = () => {
    if (isAuthenticated) {
      // If authenticated, go to the admin dashboard
      navigate("/admin");
    } else {
      // If not authenticated, go to the sign-in page
      navigate("/signin");
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md shadow-lg border-bottom bg-white text-white"
        style={{
          fontWeight: "bolder",
          fontFamily: "poppins",
          // fontSize: "0.9rem",
          position: "fixed",
          top: "0",
          zIndex: "2000",
          width: "100vw",
          color: "white",
        }}
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="/images/logo.png"
              alt="Bootstrap"
              width="100"
              height="30"
            />
          </a>
          <a class="navbar-brand d-md-none" href="#">
            <svg class="bi" width="24" height="24">
              <use href="#aperture"></use>
            </svg>
            Aperture
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasLabel">
                Aperture
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav flex-grow-1 justify-content-between">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <svg class="bi" width="24" height="24">
                      <use href="#aperture"></use>
                    </svg>
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li> */}
                <li class="nav-item ">
                  <a class="nav-link " href="#">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Home
                    </Link>
                  </a>
                </li>

                <li class="nav-item ">
                  <a class="nav-link " href="#">
                    <Link
                      to="/aboutus"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      About us
                    </Link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link
                      to="/Contactus"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Contact us
                    </Link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link
                      to="/blogsection"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      Blogs
                    </Link>
                  </a>
                </li>
                {/* 
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link
                      to="/admin"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      Admin Dashboard
                    </Link>
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleAdminClick}>
                    <Link
                      to="#"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Admin Dashboard
                    </Link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link
                      to="/addtocart"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      {" "}
                      <BsCartPlusFill />
                      {/* {names} */}
                      <span
                        class="badge"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          padding: "0",
                          margin: "0",
                          fontSize: "10px",
                          position: "absolute",
                          borderRadius: "50%",
                        }}
                      >
                        {names}
                      </span>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <svg class="bi" width="24" height="24">
                      <use href="#cart"></use>
                    </svg>
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
