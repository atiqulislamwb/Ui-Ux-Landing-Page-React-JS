import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Header,
  Features,
  WhatGPT3,
} from "./containers";

import { Navbar, Brand, CTA } from "./components";

const App = () => {
  return (
    <div className="App gradient__bg">
      <Navbar />
      <Header />

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
