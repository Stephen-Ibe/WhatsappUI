import React from "react";
import Message from "./Message";

function MessagesBox({ messages }) {
//   console.log(messages);
  return (
    <>
      <div className="chats">
        <Message />
        {messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}
      </div>
    </>
  );
}

export default MessagesBox;
