import React from "react";
import emojiIcon from "../assets/images/tag_faces.svg";
import micIcon from "../assets/images/mic.svg";
import Avatar from "./subcomponents/Avatar";
import MessagesBox from "./subcomponents/MessagesBox";

const MainSection = ({ contactSelected, currentMessages }) => {
  console.log(currentMessages, contactSelected);
  return (
    <main>
      <header>
        <Avatar user={contactSelected} showName />
      </header>
      <MessagesBox messages={currentMessages} />
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
