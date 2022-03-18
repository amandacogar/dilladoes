import React, { useState } from "react";
import { Image, Nav } from "react-bootstrap";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function Book() {
  const [question, setQuestion] = useState("select your service.");

  return (
    <section className="frame" id="book">
      <Nav id="book-nav">
        <Image id="mustache" src={logo} alt="white mustache icon" />
        <div id="book-links">
          <Nav.Link as={Link} smooth to="/#services">
            services
          </Nav.Link>
          <Nav.Link as={Link} smooth to="/book">
            book
          </Nav.Link>
          <Nav.Link as={Link} smooth to="/#gallery">
            gallery
          </Nav.Link>
          <Nav.Link as={Link} smooth to="/#contact">
            contact
          </Nav.Link>
        </div>
      </Nav>
      <div id="book-content">
        <div id="question">{question}</div>
      </div>
      <div id="footer">
        <div className="contact-link">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <a className="contact-link" href="https://instagram.com/aloha_dilla">
          <i className="fab fa-instagram"></i>
        </a>
        <a className="contact-link" href="mailto:ryan@dilladoes.com">
          <i className="fas fa-envelope-open-text"></i>
        </a>
      </div>
    </section>
  );
}

export default Book;
