import React, { useState } from "react";
import "./assets/css/App.css";
import SideNav from "./components/SideNav";
import MainSection from "./components/MainSection";

function App() {
  const [contactSelected, setContactSelected] = useState({});

  return (
    <div className="app">
      <SideNav setContactSelected={setContactSelected} />
      <MainSection contactSelected={contactSelected} />
    </div>
  );
}

export default App;
