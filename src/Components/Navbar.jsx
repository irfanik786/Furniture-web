import React, { useState } from "react";
import './navbar.css';
// import { logos } from '../assets/logos.webp';
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prevOpenMenu => !prevOpenMenu);
  };
  return (
      <div className="main-nav">
        <div className="nav-1">
          <img src='https://preview.colorlib.com/theme/furn/assets/img/logo/logo.png.webp' alt="logo" className="logo"/>
          <ul className={openMenu ? "ull active" : "ull"}>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Page</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-2">
          <div className="search-bar">
          <input type="search" placeholder="Search products" className="search-input"/>
          <span><CiSearch className="ser-icon"/></span>
          </div>
          <a className="my-ac">My Account</a>
          <div className="cart">
          <a><LiaShoppingBagSolid className="cart-icon" /></a>
          <span>0</span>
          </div>
          <button className="hamburger" onClick={toggleMenu} >
            MENU <span><GiHamburgerMenu /></span>
          </button>
        </div>
      </div>
  );
};

export default Navbar;
