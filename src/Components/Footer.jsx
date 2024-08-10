import React from "react";
import "./footer.css";
import services1 from "../assets/services1.svg";
import services2 from "../assets/services2.svg";
import services3 from "../assets/services3.svg";
import services4 from "../assets/services4.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="services">
        <div className="serv">
          <img src={services1} alt="services1" />
          <h5>Fast & Free Delivery</h5>
          <p>Free Delivery on all orders</p>
        </div>
        <div className="serv">
          <img src={services2} alt="services2" />
          <h5>Secure Payment</h5>
          <p>Free delivery on all orders</p>
        </div>
        <div className="serv">
          <img src={services3} alt="services3" />
          <h5>Money Back Guarantee</h5>
          <p>Free Delivery on all orders</p>
        </div>
        <div className="serv">
          <img src={services4} alt="services4" />
          <h5>Online Support</h5>
          <p>Free Delivery on all orders</p>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer">
          <div className="footer-content-1">
            <img
              src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo2_footer.png.webp"
              alt="logo-2"
            />
            <p>
              Suspendisse varius enim in<br /> eros elementum tristique. Duis<br /> cursus,
              mi quis viverra ornare,<br /> eros dolor interdum nulla.
            </p>
            <div className="footer-social">
              <a className="footer-icon">
                <FaTwitter/>
              </a>
              <a className="footer-icon">
                <FaFacebookF />
              </a>
              <a className="footer-icon footer-icon-3">
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="footer-content-2">
            <h4>Quick links</h4>
            <a className="cont">Image Licensin</a>
            <a className="cont">Style Guide</a>
            <a className="cont">Privacy Policy</a>
          </div>
          <div className="footer-content-2">
            <h4>Shop Category</h4>
            <a className="cont">Image Licensin</a>
            <a className="cont">Style Guide</a>
            <a className="cont">Privacy Policy</a>
          </div>
          <div className="footer-content-2">
            <h4>Pertners</h4>
            <a className="cont">Image Licensin</a>
            <a className="cont">Style Guide</a>
            <a className="cont">Privacy Policy</a>
          </div>
        </div>
            <p className="last-line">Copyright ©2024 All rights reserved | This template is made with 🧡 by <span className="ik">Irfan-Ik</span></p>
      </div>
    </div>
  );
};

export default Footer;
