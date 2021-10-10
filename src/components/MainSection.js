import React from "react";
import doubleCheck from "../assets/images/done_all.svg";
import emojiIcon from "../assets/images/tag_faces.svg";
import micIcon from "../assets/images/mic.svg";
import Avatar from "./subcomponents/Avatar";

const MainSection = ({ contactSelected }) => {
  return (
    <main>
      <header>
        <Avatar user={contactSelected} />
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
          <div className="metadata">
            <span className="date">05/20/2020</span>
            <img src={doubleCheck} className="icon-small" alt="" />
          </div>
        </div>
      </div>
      <div className="chat-input-box">
        <div className="icon emoji-selector">
          <img src={emojiIcon} alt="" />
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a messsage" />
        </div>
        <div className="icon send">
          <img src={micIcon} alt="" />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
