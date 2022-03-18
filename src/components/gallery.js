import React from "react";

function Gallery() {
  const handleClick = (e) => {
    removeActiveClasses();
    const element = e.target;
    element.classList.add("active");
  };

  function removeActiveClasses() {
    const panels = document.querySelectorAll(".gallery-images");
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  return (
    <section className="frame" id="gallery">
      <div className="gallery-images" id="img1" onClick={handleClick}></div>
      <div className="gallery-images" id="img2" onClick={handleClick}></div>
      <div className="gallery-images" id="img3" onClick={handleClick}></div>
      <div className="gallery-images" id="img4" onClick={handleClick}></div>
      <div className="gallery-images" id="img5" onClick={handleClick}></div>
      <div className="gallery-images" id="img6" onClick={handleClick}></div>
      <div className="gallery-images" id="img7" onClick={handleClick}></div>
      <div className="gallery-images" id="img8" onClick={handleClick}></div>
      <div className="gallery-images" id="img9" onClick={handleClick}></div>
    </section>
  );
}

export default Gallery;
