import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Connect } from "./components/Connect.jsx";
import { Projects } from "./components/Projects.jsx";
import slides from "./projects.json";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects slides={slides} />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
