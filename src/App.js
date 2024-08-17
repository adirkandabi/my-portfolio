import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Connect } from "./components/Connect.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
