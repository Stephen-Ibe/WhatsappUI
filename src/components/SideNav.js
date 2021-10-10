import React, { useState } from "react";
import { contactsMessages, mainUser } from "../generateFakeChats";
import Avatar from "./subcomponents/Avatar";
import ContactBox from "./subcomponents/ContactBox";

const SideNav = () => {
  const [data, setData] = useState(contactsMessages);
  return (
    <aside>
      {console.log(data)}
      <header>
        <Avatar user={mainUser} showName />
      </header>
      <div className="search">
        <input type="text" placeholder="Search or Start a new chat" />
      </div>
      <div className="contact-boxes">
        {data.map(({ contact }) => (
          <ContactBox contact={contact} />
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
