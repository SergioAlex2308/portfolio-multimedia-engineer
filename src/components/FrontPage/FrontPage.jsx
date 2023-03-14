import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

function FrontPage() {
  return (
    <section className="h-screen object-fill">
      <img src="./assets/Images/photo-background.jpg" alt="man sit looking to the right"/>
      <div className="main  bg-gray-200">
        <div className="main_info">
          <h2>!Hola! Soy</h2>
          <h1>Sergio Martínez</h1>
          <h5>Ingeniero en Multimedia</h5>
        </div>
        <div className="main_button">
          <button>CV</button>
        </div>
        <div className="main_contact">
          <SocialIcons />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}

export { FrontPage };
