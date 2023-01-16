import React from "react";
import reactPng from "./logo512.png";

export default function Navbar() {
  return (
    <nav>
      <img src={reactPng} />
      <h3 className="nav-logo-h3">ReactFacts</h3>
      <h4 className="nav-logo-h4">React Trial 1</h4>
    </nav>
  );
}
