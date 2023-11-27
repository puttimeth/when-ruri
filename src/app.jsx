import "./app.scss";
import { FooterSection, HeaderSection, TimerSection } from "pages";
import React from "react";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <HeaderSection />
        <TimerSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
