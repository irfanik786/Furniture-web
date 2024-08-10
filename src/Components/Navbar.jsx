import React, { useEffect, useState } from "react";
import "./navbar.css";
// import { logos } from '../assets/logos.webp';
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll"; // npm i react-scroll

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsSticky(scrolled > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`main-nav ${isSticky ? "sticky" : ""}`}>
      <div className="nav-1">
        <img
          src={
            isSticky
              ? "https://preview.colorlib.com/theme/furn/assets/img/logo/logo2.png"
              : "https://preview.colorlib.com/theme/furn/assets/img/logo/logo.png.webp"
          }
          alt="logo"
          className="logo"
        />
        <ul className={openMenu ? "ull active" : "ull"}>
          <li><Link to="hero" smooth={true} duration={1000}>Home</Link></li>
          <li><Link to="product1" smooth={true} duration={1000}>Product</Link></li>
          <li><Link to="product2" smooth={true} duration={1000}>About</Link></li>
          <li
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Page
          {isOpen && (
            <div className="dropdown-menu" 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
              <a href="#option1" className="dropdown-item">
                Login
              </a>
              <a href="#option2" className="dropdown-item">
                Card
              </a>
              <a href="#option3" className="dropdown-item">
                Categories
              </a>
              <a href="#option4" className="dropdown-item">
                Checkout
              </a>
              <a href="#option5" className="dropdown-item">
                Product Details
              </a>
            </div>
          )}
          </li>
          <li
            onMouseEnter={() => setIsOpen2(true)}
            onMouseLeave={() => setIsOpen2(false)}
          >
            Blog
          {isOpen2 && (
            <div className="dropdown-menu2"
            onMouseEnter={() => setIsOpen2(true)}
            onMouseLeave={() => setIsOpen2(false)}>
              <a href="#option1" className="dropdown-item2">
                Blog
              </a>
              <a href="#option2" className="dropdown-item2">
                Blog Details
              </a>
              <a href="#option3" className="dropdown-item2">
                Elements
              </a>
            </div>
          )}
          </li>
          <li>
          <Link to="footer" smooth={true} duration={1000}>Contact</Link></li>
        </ul>
      </div>
      <div className="nav-2">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search products"
            className="search-input"
          />
          <span>
            <CiSearch className="ser-icon" />
          </span>
        </div>
        <a className="my-ac">My Account</a>
        <div className="cart">
          <a>
            <LiaShoppingBagSolid className="cart-icon" />
          </a>
          <span>0</span>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          MENU{" "}
          <span>
            <GiHamburgerMenu />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
