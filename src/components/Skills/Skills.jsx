import React from "react";
import { Header } from "../Header/Header";

function Skills() {
  const title = "Habilidades";

  return (
    <section className="skill h-screen">
      <Header title={title} />
      <div className="skill_design">
        <h3>Diseño</h3>
        <div className="skill_desing_logos"></div>
      </div>
      <div className="skill_dev">
        <h3>Desarrollo</h3>
        <div className="skill_dev_logos"></div>
      </div>
    </section>
  );
}

export { Skills };
