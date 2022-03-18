import React from "react";
import { Image, Nav } from "react-bootstrap";
import logo from "./logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="frame" id="home">
      <div className="dark-layer"></div>
      <Nav>
        <Image id="mustache" src={logo} alt="white mustache icon" />
        <div id="links">
          <Nav.Link as={HashLink} smooth to="#services">
            services
          </Nav.Link>
          <a
            id="external"
            href="https://squareup.com/appointments/book/0itng16mdbdjvc/LE9QWM3TGQV9Q/start"
          >
            <Nav.Link>book</Nav.Link>
          </a>
          <Nav.Link as={HashLink} smooth to="#gallery">
            gallery
          </Nav.Link>
          <Nav.Link as={HashLink} smooth to="#contact">
            contact
          </Nav.Link>
        </div>
      </Nav>
      <div className="logo">
        <h1>Dilla Does</h1>
        <h2>hair. tattoos. art.</h2>
      </div>
    </section>
  );
}

export default Home;
