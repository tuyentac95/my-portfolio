import React from "react";
import Navbar from "./components/navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;
