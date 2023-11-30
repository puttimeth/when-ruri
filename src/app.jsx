import "./app.scss";
import {
  FooterSection,
  HeaderSection,
  TimerSection,
  WantMoreSection,
} from "pages";
import React from "react";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <HeaderSection />
        <TimerSection />
        <WantMoreSection />
        <div className="div-line" />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
