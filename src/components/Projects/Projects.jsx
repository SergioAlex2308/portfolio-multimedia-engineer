import React from "react";
import { Header } from "../Header/Header";
import { Carrousel } from "./Carrousel";
import { Divider } from "../Divider/Divider";

import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const title = t("projects.title");

  const Projects = [
    {
      title: t("projects.ferriel.title"),
      date: "Feb. 2022 - May. 2022",
      description: t("projects.ferriel.description"),
      url: "https://www.behance.net/gallery/150069589/Ferriel-Web",
      img: {
        src: "Ferriel.jpg",
        alt: "Imagen de dos pantallas desde una vista frontal mostrando el sitio web con un texto con el titulo del proyecto a la izquierda",
      },
    },
    {
      title: t("projects.vida.title"),
      date: "Oct. 2022 - Nov. 2022",
      description: t("projects.vida.description"),
      url: "https://www.behance.net/gallery/157835069/Cortometraje-VIDA",
      img: {
        src: "Vida.png",
        alt: "Mujer de espaldas a la cámara observando una pared llena de dibujos en papel",
      },
    },
    {
      title: t("projects.pizza.title"),
      date: "Dic. 2022",
      description: t("projects.pizza.description"),
      url: "https://www.behance.net/gallery/159676859/UI-Design-practice",
      img: {
        src: "RocketPizza.png",
        alt: "Dos teléfonos puestos opuestamente en donde en uno de ellos se ve una aplicación del pedido de comida.",
      },
    },
    {
      title: t("projects.ph.title"),
      date: "2022",
      description: t("projects.ph.description"),
      url: "https://www.behance.net/gallery/158727003/Photography-portfolio-2022",
      img: {
        src: "PortfolioPhotography.jpg",
        alt: "Dos teléfonos puestos opuestamente en donde en uno de ellos se ve una aplicación del pedido de comida.",
      },
    },
    {
      title: t("projects.todo.title"),
      date: "Feb. 2023",
      description: t("projects.todo.description"),
      url: "https://www.behance.net/gallery/164340927/ToDo-Machine",
      img: {
        src: "TodoMachine.png",
        alt: "Sobre un fondo blanco se ve una computadora y un teléfono móvil, en la pantalla de cada uno se observa el sitio web.",
      },
    },
  ];
  return (
    <section
      id="projects"
      className="snap-center h-screen bg-gray-500 flex flex-col justify-between"
    >
      <Header title={title} />
      <div className="h-full w-full flex px-2">
        <Carrousel data={Projects} />
      </div>
      <Divider />
    </section>
  );
}

export { Projects };
