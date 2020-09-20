import React from "react";
import "./Section.css";
import f1 from "../../img/f1.jpg";
import f2 from "../../img/f2.jpg";

import Navbar from "../Navbar/Navbar";

const Section = () => {
  return (
    <div>
      <Navbar />
      <div className="features">
        <div className="container">
          <div className="feature">
            <div className="image-box">
              <img src={f1} />
            </div>
            <div className="text">
              <h1>
                <span>meet with our </span> splendid features
              </h1>
              {/* tite */}
              <div className="title">
                <h2>Voice Recognition</h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
              {/* tite */}
              <div className="title">
                <h2>Connect with your phone</h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
              {/* tite */}
              <div className="title">
                <h2>Any task at hand</h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="text">
              <h1>
                <span>NOW UPGRADED FOR </span> BEST EXPERIENCE
              </h1>
              {/* tite */}
              <div className="title">
                <h2>+ Increased storage</h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
              <div className="title">
                <h2>+ Battery life</h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
              {/* tite */}
              <div className="title">
                <h2>+ Display surface</h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
            <div className="image-box">
              <img src={f2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
