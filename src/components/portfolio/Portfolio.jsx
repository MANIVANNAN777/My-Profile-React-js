import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/MANIVANNAN777/education",
    },
    {
      id: 2,
      title: "E-Commerce-Website",
      img: IMG4,
      description:
        "The e-commerce website project is a full-stack web development project that involves creating a responsive website",
      technologies: "HTML | CSS | JavaScript |",
      link: "https://e-commerce-website-nine-coral.vercel.app/",
      github: "https://github.com/MANIVANNAN777/E-Commerce-Website.git",
    },
    {
      id: 3,
      title: "Responsive Login Form",
      img: IMG2,
      description:
        "Responsive Login & Registration Form Using HTML CSS And JavaScript You can switch between signing in and creating an account.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://responsive-login-form-five.vercel.app/",
      github: "https://github.com/MANIVANNAN777/Responsive-Login-Form-.git",
    },
    {
      id: 4,
      title: "Travel Landing Page",
      img: IMG3,
      description:
        "I created a landing page for a travel website by just using html and css. I tried to make a simple and user friendly interface.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://travel-website-ten-chi.vercel.app/#home",
      github: "https://github.com/MANIVANNAN777/Travel-Website",
    },
    {
      id: 5,
      title: "Udemy Clone Project",
      img: IMG5,
      description:
        "I created a landing page for a udemy clone  website by just using html and css..",
      technologies: "Html | Styled-components",
      link: "https://manivannan777.github.io/Udemy-Clone_project/",
      github: "https://github.com/MANIVANNAN777/Udemy-Clone_project",
    },
    {
      id: 6,
      title: "Mjash-E-Comm-Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide E-Commerce platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://mjash-e-com-website.vercel.app/",
      github: "https://github.com/MANIVANNAN777/Mjash-E-com-Website",
    },
  ];

  return (
    <section id="portfolio">
      
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
