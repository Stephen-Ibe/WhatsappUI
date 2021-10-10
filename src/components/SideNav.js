import React from "react";
import Avatar from "./subcomponents/Avatar";
import ContactBox from "./subcomponents/ContactBox";

const SideNav = ({ mainUser, setContactSelected, data }) => {
  return (
    <aside>
      <header>
        <Avatar user={mainUser} showName />
      </header>
      <div className="search">
        <input type="text" placeholder="Search or Start a new chat" />
      </div>
      <div className="contact-boxes">
        {data.map(({ contact }) => (
          <ContactBox
            contact={contact}
            key={contact.id}
            setContactSelected={setContactSelected}
          />
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
