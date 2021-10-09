import React from "react";

function MainSection() {
  return (
    <main>
      <header>
        <div className="avatar-component">
          <img
            className="avatar"
            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
            alt=""
          />
          <h3 className="avatar-title">Sofia</h3>
        </div>
      </header>
      <div className="chats">
        <div className="message received">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
          nulla.
          <div className="metadata">
            <span className="date">05/20/2020</span>
          </div>
        </div>
        <div className="message sent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          officiis!
        </div>
      </div>
    </main>
  );
}

export default MainSection;
