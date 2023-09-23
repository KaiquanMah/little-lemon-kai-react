import React from "react";
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a cosy cafe that serves simple foods in a casual
            environment. We offer a selection of foods with daily specials. Our
            menu is cooked using the freshest, locally sourced produce to
            support local farmers and reduce our carbon footprint
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Thailand: Bangkok</li>
                <li>Malaysia: Kuala Lumpur, Langkawi & Penang</li>
                <li>Singapore</li>
                <li>Brunei</li>
                <li>Indonesia: Bali, Jakarta</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Tue - Thu: 11:00AM - 9:00PM</li>
                <li>Fri - Sat: 11:00AM - 10:00PM</li>
                <li>Sun - Mon: Closed</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul id="location">
                <li>13 Northie Building, North Road, Singapore 123413</li>
                <li>Call Us: 1234 5678</li>
                <li>Email: reservations@littlelemon.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
