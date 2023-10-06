import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsChevronDown,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isProductsMenuOpen, setProductsMenuOpen] = useState(false);

  useEffect(() => {
    const sidebarLinks = document.querySelectorAll('.sidebar-list-item a');

    sidebarLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const activeLink = document.querySelector('.sidebar-list-item.active');
        if (activeLink) {
          activeLink.classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    });
  }, []);

  const toggleProductsMenu = () => {
    setProductsMenuOpen(!isProductsMenuOpen);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/dashboard" className="sidebar" style={{ textDecoration: "none" }}>
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        </Link>
        <li className="sidebar-list-item">
          <div className="menu-item" onClick={toggleProductsMenu}>
            <BsFillArchiveFill className="icon" /> Products
            <BsChevronDown className={`arrow-icon ${isProductsMenuOpen ? "open" : ""}`} />
          </div>
          {isProductsMenuOpen && (
            <ul className="submenu">
              <Link to="/addproducts" className="sidebar" style={{ textDecoration: "none" }}>
                <li className='sidebar-list-item'> <a href="">Add Products</a></li>
              </Link>

              <Link to="/viewproducts" className="sidebar" style={{ textDecoration: "none" }}>
                <li className="sidebar-list-item">
                  <a href="">View Products</a>
                </li>
              </Link>

              <Link to="/deleteproducts" className="sidebar" style={{ textDecoration: "none" }}>
                <li className="sidebar-list-item">
                  <a href="">Delete Products</a>
                </li>
              </Link>

              <Link to="/updateproducts/:productId" className="sidebar" style={{ textDecoration: "none" }}>
                <li className="sidebar-list-item">
                  <a href="">Update Products</a>
                </li>
              </Link>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
