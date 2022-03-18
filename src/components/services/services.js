import React from "react";
import { Image } from "react-bootstrap";

function Services() {
  return (
    <section className="frame" id="services">
      <div className="service">
        <Image
          src={
            "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          alt=""
          className="service-photo"
          id="tattoo-img"
        />
        <div className="dark-layer"></div>
        <h3 className="service-title">tattoos</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium
          justo quis volutpat venenatis. Cras vitae justo magna. Curabitur vel
          interdum ipsum. Vestibulum ac dignissim massa, vel maximus quam.
          Vivamus sit amet orci ex. Suspendisse ac porta nisi, vel ornare
          ligula. Sed sed sollicitudin augue. Pellentesque et augue eros.
          Vestibulum eu felis libero.
        </p>
      </div>
      <div className="service">
        <Image
          src={
            "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt=""
          className="service-photo"
          id="barber-img"
        />
        <div className="dark-layer"></div>
        <h3 className="service-title">barber</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium
          justo quis volutpat venenatis. Cras vitae justo magna. Curabitur vel
          interdum ipsum. Vestibulum ac dignissim massa, vel maximus quam.
          Vivamus sit amet orci ex. Suspendisse ac porta nisi, vel ornare
          ligula. Sed sed sollicitudin augue. Pellentesque et augue eros.
          Vestibulum eu felis libero.
        </p>
      </div>
      <div className="service">
        <Image
          src={
            "https://images.unsplash.com/photo-1569926257332-d01840deba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          }
          alt=""
          className="service-photo"
          id="art-img"
        />
        <div className="dark-layer"></div>
        <h3 className="service-title">art</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium
          justo quis volutpat venenatis. Cras vitae justo magna. Curabitur vel
          interdum ipsum. Vestibulum ac dignissim massa, vel maximus quam.
          Vivamus sit amet orci ex. Suspendisse ac porta nisi, vel ornare
          ligula. Sed sed sollicitudin augue. Pellentesque et augue eros.
          Vestibulum eu felis libero.
        </p>
      </div>
    </section>
  );
}

export default Services;
