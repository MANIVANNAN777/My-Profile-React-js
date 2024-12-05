import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.jpg";

// import ME from '../../assets/Rasif Tagizade image.jpg';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Teaching Experience</h5>
              <small>I had arround 8 year Experiance in teaching Field</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Administration,Designing & Front End Developer </h5>
              <small>
                I had 6 Years Experiance in Administration And Industry{" "}
              </small>
            </article>
          </div>
          <p>
            "Passionate Computer Science educator with 10+ years of experience
            in developing engaging curricula and fostering student success.
            Skilled in programming & designing, software development, and
            integrating technology into the classroom. Dedicated to inspiring
            and mentoring students at ourinstitution . Seeking to contribute to
            our academic
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
