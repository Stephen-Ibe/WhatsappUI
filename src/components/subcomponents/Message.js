import React from "react";
import doubleCheck from "../../assets/images/done_all.svg";

function Message({ message }) {
  console.log(message);
  return (
    <div className={`message ${message.isMainUser ? "sent" : "received"}`}>
      {/* {message.msg} */}
      <div className="metadata">
        <span className="date">{message.date.toLocaleString()}</span>
        <img src={doubleCheck} className="icon-small" alt="" />
      </div>
    </div>
  );
}

export default Message;
