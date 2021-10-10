import React, { useEffect, useState } from "react";
import "./assets/css/App.css";
import SideNav from "./components/SideNav";
import MainSection from "./components/MainSection";
import { contactsMessages, mainUser } from "./generateFakeChats";

function App() {
  const [data, setData] = useState(contactsMessages);
  const [contactSelected, setContactSelected] = useState({});
  const [currentMessages, setCurrentMessages] = useState([]);

  useEffect(() => {
    const currContact = data.find((d) => d.contact.id === contactSelected.id);
    setCurrentMessages((currContact && currContact.messages) || []);
  }, [contactSelected, data]);

  return (
    <div className="app">
      <SideNav
        mainUser={mainUser}
        setContactSelected={setContactSelected}
        data={data}
      />
      <MainSection
        contactSelected={contactSelected}
        currentMessages={currentMessages}
      />
    </div>
  );
}

export default App;
