import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.jpg";

// import ME from '../../assets/Rasif Tagizade image.jpg';

const Intro = () => {
  return (
    <section id="about">
      <h2>Get to know About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Manivannan" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Teaching Experience</h5>
              <small>
                "I have nearly eight years of experience in the teaching
                profession, showcasing my expertise in educating and mentoring
                students."
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Administration,Designing & Front End Developer </h5>
              <small>
                I have six years of experience in administration and industry,
                showcasing my ability to manage operations efficiently and
                contribute to organizational success.{" "}
              </small>
            </article>
          </div>
          <p>
            "Passionate Computer Science educator with over 10 years of
            experience in creating engaging curricula and fostering student
            success. Proficient in programming, software development, and
            integrating technology into the classroom, with a strong commitment
            to inspiring and mentoring students at our institution. Seeking an
            opportunity to contribute to academic excellence and innovation."
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
