import React from "react";
import "./Header.css";
import h from "../../img/1.png";

import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="image">
          <img src={h}></img>
        </div>
        <div className="intoduction-text">
          <h1>Life style smart watch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Vel eaque
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
