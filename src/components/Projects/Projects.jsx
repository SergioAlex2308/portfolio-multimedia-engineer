import React from "react";
import { Header } from "../Header/Header";
import { Carrousel } from "./Carrousel";

function Projects() {
  const title = "Proyectos";
  return (
    <section className="h-screen bg-gray-500">
      <Header title={title} />
      <div className="bg-gray-200 h-80 w-full flex justify-center">
        <Carrousel />
      </div>
    </section>
  );
}

export { Projects };
