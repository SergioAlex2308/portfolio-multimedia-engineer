import React from "react";

import { Divider } from "../Divider/Divider";
import { Header } from "../Header/Header";

function About() {
  const title = "Sobre mí";
  return (
    <section id="aboutme" className="about snap-center h-screen bg-gray-500 font-header text-3xl text-gray-100 flex flex-col justify-between">
      <Header title={title} />
      <div className="about_info flex flex-col h-full items-center justify-between px-6">
        <div className="about_photo w-2/5">
          <img
            src={require("../../assets/Images/Background/Profile.png")}
            alt="Hombre con lentes sonriendo"
          />
        </div>
        <p className="about_text font-body text-sm">
          Soy Ingeniero en multimedia con un enfoque en el desarrollo frontend y
          diseño de interfaces, he realizado algunos proyectos utilizando
          tecnologías web utilizando librerias como ReactJS, VueJS y Bootstrap,
          preprocesadores como Sass, frameworks de estilos como Tailwind CSS.
          También elaborando vistas, sistemas de diseño y prototipos en Figma.
          Gracias a mis estudios desarrollé habilidades para la creación de
          contenido digital teniendo una visión crítica y objetiva, aplicándola
          en los proyectos a realizar.
        </p>
      </div>
      <Divider />
    </section>
  );
}

export { About };
