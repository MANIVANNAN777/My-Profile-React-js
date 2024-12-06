import "./contact.css";

import React, { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_k2qawqh",
        "template_c6rkpn6",
        formRef.current,
        "X7K7ebhIeOy3YwHki"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      {/* <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5> */}
      <h2>Get In Touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h4>manijas7486@gmail.com</h4>
            <a href="mailto:manijas7486@gmail.com">Send a message</a>
            <h4>Call Me </h4>
            <h3>8610257427</h3>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && (
            <span>
              Thanks, I don't link with my mail you call my number : 8610257427
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
