import React from "react";
import "./App.css";
import Home from "./components/home";
import Services from "./components/services/services";
import About from "./components/book/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
