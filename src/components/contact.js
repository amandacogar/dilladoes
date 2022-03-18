import React from "react";
import { Fade } from "react-awesome-reveal";

function Contact() {
  return (
    <section className="frame" id="contact">
      <div className="dark-layer"></div>
      <div id="contact-info">
        <Fade bottom>
          <div className="contact-link" id="location">
            <i className="fas fa-map-marker-alt"></i>
            <p>Hanford, CA</p>
          </div>
        </Fade>
        <Fade bottom>
          <a className="contact-link" href="https://instagram.com/aloha_dilla">
            <i className="fab fa-instagram"></i>
            <p>@aloha_dilla</p>
          </a>
        </Fade>
        <Fade bottom>
          <a className="contact-link" href="mailto:ryan@dilladoes.com">
            <i className="fas fa-envelope-open-text"></i>
            <p>ryan@dilladoes.com</p>
          </a>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
