import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
    <div className="menu-icon">
      <BsJustify className="icon" onClick={OpenSidebar} />
    </div>
    <div className="header-left" style={{display:"flex"}}>
      <img src="/images/logo.png" alt="" width="130" height="35" />

      <div className="search-container" style={{marginLeft:"100px"}}>
      
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <BsSearch style={{ fontSize: "15px",marginLeft:"5px"}} className="search-icon" />
      </div>
      
    </div>
    <div className="header-right">
        {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/> 
            <BsPersonCircle className='icon'/>  */}
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/images/adminlogo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Huzaifa khan</strong>
            
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
