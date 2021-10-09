import React from "react";
import doubleCheck from "../assets/images/done_all.svg";

const SideNav = () => {
  return (
    <aside>
      <header>
        <div className="avatar-component">
          <img
            className="avatar"
            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
            alt=""
          />
        </div>
      </header>
      <div className="search">
        <input type="text" placeholder="Search or Start a new chat" />
      </div>
      <div className="contact-boxes">
        <div className="contact-box">
          <div className="avatar-component">
            <img
              className="avatar"
              src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
              alt=""
            />
          </div>
          <div className="right-section">
            <div className="contact-box-header">
              <div className="avatar-title">Jessica</div>
              <div className="time-mark">yesterday</div>
            </div>
            <div className="last-msg">
              <img src={doubleCheck} className="icon-small" alt="" />
              <span className="text">Lorem ipsum dolor</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
