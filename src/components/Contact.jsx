import React from "react";
import "../styles/pages/contact.css";
import contact from "../assets/logo/contact.svg";
import facebook from "../assets/logo/facebook.svg";
import instagram from "../assets/logo/instagram.svg";

const Contact = () => {
  return (
    <div>
      <div className="titlecontact">
        <h4>CONTACT</h4>
        <img className="contactsvg" src={contact} alt="Icône" />
      </div>
      <div className="allinfo">
        <div className="info">
          <h5>OPENING TIMES</h5>
          <p>Monday -Friday 7:00am - 6:OO pm </p> <p> Saturday 8:00 am - 5:00pm</p>
        </div>

        <div className="info2">
          <h5>LOCATION</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consectetur libero nec pharetra iaculis.
          </p>
        </div>
        <div className="info3">
          <h5>SOCIAL MEDIA</h5>
          <div className="social">
            <img src={facebook} alt="Icône" />
            <img src={instagram} alt="Icône" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
