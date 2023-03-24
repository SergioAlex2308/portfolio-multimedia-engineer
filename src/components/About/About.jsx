import React from "react";

import { Divider } from "../Divider/Divider";
import { Header } from "../Header/Header";

function About() {
  const title = "Sobre mí";
  return (
    <section
      id="aboutme"
      className="about snap-center h-screen bg-gray-500 font-header text-3xl text-gray-100 flex flex-col justify-between"
    >
      <Header title={title} />
      <div className="about_info flex flex-col h-full items-center justify-evenly px-6">
        <div className="about_photo w-3/5">
          <img
            className="rounded-xl drop-shadow-xl"
            src={require("../../assets/Images/Background/Profile.png")}
            alt="Hombre con lentes sonriendo"
          />
        </div>
        <p className="about_text font-body text-left text-sm px-8">
          Soy <strong className="text-blue-300">Ingeniero en Mutimedia</strong> con un enfoque en el y
          diseño de interfaces, elaborando vistas, sistemas de diseño y
          prototipos en Figma.
          <br />
          <br />
          Aplico mis habilidades para la creación de contenido digital teniendo
          una visión crítica y objetiva, aplicándola en los proyectos a
          realizar.
        </p>
      </div>
      <Divider />
    </section>
  );
}

export { About };
