import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useContext } from "react";
import { Items } from "../App";
import { BsCartPlusFill } from "react-icons/bs";
function Navbar() {
  const { names } = useContext(Items);
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
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li>

                <li class="nav-item ">
                  <a class="nav-link " href="#footersec">
                    <Link
                      to="aboutus"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      About us
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link
                      to="contactus"
                      className
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
                
{/* dummy */}
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link
                      to="/admindashboard1"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
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

//  import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
//         <div class="container">
//           <a class="navbar-brand d-md-none" href="#">
//             <svg class="bi" width="24" height="24"><use href="#aperture"></use></svg>
//             Aperture
//           </a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
//             <div class="offcanvas-header">
//               <h5 class="offcanvas-title" id="offcanvasLabel">Aperture</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div class="offcanvas-body">
//               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item">
//                   <a class="nav-link active" aria-current="page" href="#">
//                     Home
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     <Link to="/aboutus" style={{ textDecoration: "none", color: "black" }}>About us</Link>
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     <Link to="/contactus" className="your-class-name" style={{ textDecoration: "none", color: "black" }}>Contact us</Link>
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     <Link to="/blogsection" style={{ textDecoration: "none", color: "black" }}>Blogs</Link>
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     <Link to="/admindashboard" style={{ textDecoration: "none", color: "black" }}>Admin Dashboard</Link>
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">
//                     <Link to="/products" style={{ textDecoration: "none", color: "black" }}>Products</Link>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
