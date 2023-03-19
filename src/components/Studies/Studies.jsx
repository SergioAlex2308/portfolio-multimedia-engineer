import React from "react";
import { Header } from "../Header/Header";
import { CourseItem } from "../CourseItem/CourseItem";
import { Divider } from "../Divider/Divider";

function Studies() {
  const title = "Formación";
  const urlBase = "https://platzi.com/p/semartinezc23/curso";

  const courses = [
    {
      name: "Curso Frontend Developer",
      img: `Course_frontend.webp`,
      url: `${urlBase}/2477-course/diploma/detalle/`,
    },
    {
      name: "Curso Profesional de JavaScript",
      img: `Course_JavaScript.webp`,
      url: `${urlBase}/1642-course/diploma/detalle/`,
    },
    {
      name: "Curso Librerias JavaScript",
      img: `Course_Libraries.avif`,
      url: `${urlBase}/2239-frameworks-javascript/diploma/detalle/`,
    },
    {
      name: "Curso Introducción a ReactJS",
      img: `Course_IntroReact.avif`,
      url: `${urlBase}/2444-react/diploma/detalle/`,
    },
    {
      name: "Curso Patrones de Render",
      img: `Course_RenderPatterns.avif`,
      url: `${urlBase}/2457-course/diploma/detalle/`,
    },
    {
      name: "Curso Estado en ReactJS",
      img: `Course_RenderPatterns.avif`,
      url: `${urlBase}/2597-react-estado/diploma/detalle/`,
    },
    {
      name: "Curso React Router",
      img: `Course_ReactRouter.png`,
      url: `${urlBase}/2444-react/diploma/detalle/`,
    },
    {
      name: "Curso Básico VueJS 2",
      img: `Course_Vue2.avif`,
      url: `${urlBase}/1752-vuejs2/diploma/detalle/`,
    },
    {
      name: "Curso Figma avanzado",
      img: `Course_Figma.avif`,
      url: `${urlBase}/2582-figma-avanzado/diploma/detalle/`,
    },
    {
      name: "Curso Diseño de interfaces",
      img: `Course_UIDesign.avif`,
      url: `${urlBase}/1493-course/diploma/detalle/`,
    },
  ];
  return (
    <section className="h-screen bg-gray-500 flex flex-col justify-between items-center">
      <Header title={title} />
      <div className="studies flex flex-col px-6 gap-10 self-center">
        <div className="studies_career flex justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-book"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FAFAFA"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <line x1="3" y1="6" x2="3" y2="19" />
            <line x1="12" y1="6" x2="12" y2="19" />
            <line x1="21" y1="6" x2="21" y2="19" />
          </svg>
          <div className="border-l-2 h-7 mx-2.5"></div>
          <div className="studies_career_info text-gray-100 text-left">
            <h4 className="font-header text-xl tracking-wide">
              Ingeniería en Multimedia
            </h4>
            <p className="font-body text-xs italic">
              Universidad Militar Nueva Granada /{" "}
              <strong className="font-bold not-italic">2018 - 2022</strong>
            </p>
          </div>
        </div>
        <div className="studies_courses flex justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-device-laptop"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FAFAFA"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="3" y1="19" x2="21" y2="19" />
            <rect x="5" y="6" width="14" height="10" rx="1" />
          </svg>
          <div className="border-l-2 h-7 mx-2.5"></div>
          <div className="studies_career_info text-gray-100 text-left">
            <h4 className="font-header text-xl tracking-wide">Platzi</h4>
            <p className="font-body font-light text-xs italic">
              Frontend con ReactJS
            </p>
          </div>
        </div>
        <div className="studies_courses_list grid place-items-start pl-4">
          {courses.map((course) => (
            <CourseItem
              key={course.name}
              img={course.img}
              name={course.name}
              url={course.url}
            />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}

export { Studies };
