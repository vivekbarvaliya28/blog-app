import React from "react";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <>
      <div className="about-container">
        <div className="personal-details">
          <h3>This Is Me...</h3>
          <h1>Vivek Barvaliya</h1>
          <h3>
            Hello i am a Front-End Developer. i love web development and i have
            a knowledge about HTMl, CSS, JAVASCRIPT, REACTJS
          </h3>
        </div>
        <div>
          <img id="dp" src="my_img.jpg" alt="" />
        </div>
      </div>
      <div>
        <div className="skill">
          <h2>Skills</h2>
        </div>
        <div className="skill-div">
          <img className="skills-img" src="html.png" alt="" />
          <img className="skills-img" src="css.png" alt="" />
          <img className="skills-img" src="react.png" alt="" />
          <img className="skills-img" src="js.png" alt="" />
          <img className="skills-img" src="github.png" alt="" />
          <img className="skills-img" src="node.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
