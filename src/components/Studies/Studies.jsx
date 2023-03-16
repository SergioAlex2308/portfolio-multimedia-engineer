import React from "react";
import { Header } from "../Header/Header";

function Studies() {
  const title = "Formación";
  return (
    <section>
      <Header title={title} />
      <div className="studies_career">
        <img src="#" alt="Icono de un libro" />
        <span>----</span>
        <div className="studies_career_info">
          <h3>Ingeniería en Multimedia</h3>
          <p>
            Universidad Militar Nueva Granada <strong>2018 - 2022</strong>
          </p>
        </div>
      </div>
      <div className="studies_courses">
        <div className="studies_courses_platzi">
          <img src="#" alt="Icono de un libro" />
          <span>----</span>
        </div>
        <div className="studies_courses_list">
          <ul>
            <li>
              <img src="#" alt="Imagen curso platzi desarrollo web" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export { Studies };
