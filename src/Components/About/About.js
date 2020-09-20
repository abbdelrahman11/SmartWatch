import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import g1 from "../../img/gallery5.jpg";
import g2 from "../../img/gallery6.jpg";
import g3 from "../../img/gallery7.jpg";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="info-box">
        <h2>
          <span>new , improved</span> design aand performance{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptates unde veniam maiores labore quas vero, facere architecto,
        </p>
      </div>
      <div className="gallery">
        <div className="card">
          <div className="image">
            <div className="overlay">
              <img src={g1} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <div className="overlay">
              <img src={g2}></img>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <div className="overlay">
              <img src={g3}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
