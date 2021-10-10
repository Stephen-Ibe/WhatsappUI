import React from "react";
import doubleCheck from "../../assets/images/done_all.svg";
import Avatar from "./Avatar";

function ContactBox({ contact, setContactSelected }) {
  return (
    <>
      <div className="contact-box" onClick={() => setContactSelected(contact)}>
        <Avatar user={contact} />
        <div className="right-section">
          <div className="contact-box-header">
            <div className="avatar-title">{contact.name}</div>
            <div className="time-mark">yesterday</div>
          </div>
          <div className="last-msg">
            <img src={doubleCheck} className="icon-small" alt="" />
            <span className="text">Lorem ipsum dolor</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBox;
