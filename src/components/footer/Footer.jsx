import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-contact" id="Contact">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>

          <div className="footer__container-contact-address">
            <BiMap color="#6096B4" size={26} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="footer__container-contact-tel">
            <BsTelephone color="#6096B4" size={26} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="footer__container-contact-email">
            <AiOutlineMail color="#6096B4" size={26} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="footer__container-links">
          <a href="#Home">HOME</a>
          <a href="#Appartments">APPARTMENTS</a>
          <a href="#Aboutus">ABOUT US</a>
          <a href="#Contact">CONTACT</a>
        </div>

        <div className="footer__container-social">
          <AiFillFacebook color="#6096B4" size={26} />
          <AiFillInstagram color="#6096B4" size={26} />
          <AiFillYoutube color="#6096B4" size={26} />
        </div>
      </div>
      <hr className="line" />
      <div className="footer__copyright">
        <p>©Developed by stzivel</p>
      </div>
    </div>
  );
}

export default Footer;
