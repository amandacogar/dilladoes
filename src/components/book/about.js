import React from "react";
import { Image, Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <section className="frame" id="about">
      <div className="divider"></div>
      <Fade bottom>
        <p id="about-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
          libero, consectetur volutpat quis eget mi. Eget eros, egestas
          elementum odio ipsum.
        </p>
      </Fade>
      <Fade bottom>
        <div id="book-circle">
          <Image
            src={
              "https://images.unsplash.com/photo-1635273052107-90bc358f3a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt="barber shop work station"
            id="book-image"
          />
          <div className="dark-layer" id="dark-layer-book"></div>
          <Button className="book" href="/book">
            book
          </Button>
        </div>
      </Fade>
      <div className="divider"></div>
    </section>
  );
}

export default About;
