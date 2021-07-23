import React from "react";
import "../style/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img
          className="logomeFooter"
          src="./assets/icons/logo.png"
          alt="logo"
        />
        <div className="footerDetails">
          <div>
            <h4 className="headingFooter">Company Info</h4>
            <ol>
              <li>About us</li>
              <li>Store location</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ol>
          </div>
          <div>
            <h4 className="headingFooter">Help</h4>
            <ol>
              <li>Order Status</li>
              <li>FAQ</li>
              <li>Return Policy</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="contactLogo">
        <FaFacebook className="logoeach" />
        <FaInstagram className="logoeach" />
        <FaTwitter className="logoeach" />
        <MdEmail className="logoeach" />
      </div>

      <div className="boxMe">
        <form>
          <div className="labelMe">Send us your feedback</div>
          <input className="typeMe" type="text" name="name" />
          <input className="subButton" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
