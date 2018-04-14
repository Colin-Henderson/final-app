import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center", backgroundImage: "url(/images/jumbo.png)",
    backgroundSize: "cover", color: "white", textShadow: "2px 2px black" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
