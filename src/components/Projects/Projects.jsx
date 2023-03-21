import React from "react";
import { Header } from "../Header/Header";
import { Carrousel } from "./Carrousel";
import { Divider } from "../Divider/Divider";

function Projects() {
  const title = "Proyectos";
  return (
    <section className="h-screen bg-gray-500 flex flex-col justify-between">
      <Header title={title} />
      <div className="h-full w-full flex justify-items-end">
        <Carrousel />
      </div>
      <Divider />
    </section>
  );
}

export { Projects };
