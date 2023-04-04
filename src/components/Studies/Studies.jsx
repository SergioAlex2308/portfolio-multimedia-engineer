import React from "react";
import { Header } from "components/Header/Header";
import { CourseItem } from "./CourseItem";
import { Divider } from "components/Divider/Divider";

import { useTranslation } from "react-i18next";

function Studies() {
  const { t } = useTranslation();
  const title = t("studies.title");
  const urlBase = "https://platzi.com/p/semartinezc23/curso";

  const courses = [
    {
      name: t("studies.course.1"),
      img: `Course_frontend.webp`,
      url: `${urlBase}/2477-course/diploma/detalle/`,
    },
    {
      name: t("studies.course.2"),
      img: `Course_JavaScript.webp`,
      url: `${urlBase}/1642-course/diploma/detalle/`,
    },
    {
      name: t("studies.course.3"),
      img: `Course_Libraries.avif`,
      url: `${urlBase}/2239-frameworks-javascript/diploma/detalle/`,
    },
    {
      name: t("studies.course.4"),
      img: `Course_IntroReact.avif`,
      url: `${urlBase}/2444-react/diploma/detalle/`,
    },
    {
      name: t("studies.course.5"),
      img: `Course_RenderPatterns.avif`,
      url: `${urlBase}/2457-course/diploma/detalle/`,
    },
    {
      name: t("studies.course.6"),
      img: `Course_RenderPatterns.avif`,
      url: `${urlBase}/2597-react-estado/diploma/detalle/`,
    },
    {
      name: t("studies.course.7"),
      img: `Course_ReactRouter.png`,
      url: `${urlBase}/2444-react/diploma/detalle/`,
    },
    {
      name: t("studies.course.8"),
      img: `Course_Vue2.avif`,
      url: `${urlBase}/1752-vuejs2/diploma/detalle/`,
    },
    {
      name: t("studies.course.9"),
      img: `Course_Figma.avif`,
      url: `${urlBase}/2582-figma-avanzado/diploma/detalle/`,
    },
    {
      name: t("studies.course.10"),
      img: `Course_UIDesign.avif`,
      url: `${urlBase}/1493-course/diploma/detalle/`,
    },
  ];
  return (
    <section
      id="studies"
      className="snap-center h-screen bg-gray-500 flex flex-col justify-between items-center"
    >
      <Header title={title} />
      <div className="studies flex flex-col px-6 gap-10 self-center laptop:flex-row laptop:w-full laptop:justify-evenly tablet:w-9/12 desktop:w-8/12">
        <div className="studies_container flex flex-col justify-evenly gap-5">
          <div className="studies_career flex justify-start items-center">
            <div className="studies_svg w-6 tablet:w-10 laptop:w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-book w-full"
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
            </div>
            <div className="border-l-2 h-7 mx-2.5 laptop:h-12"></div>
            <div className="studies_career_info text-gray-100 text-left">
              <h4 className="font-header text-xl tracking-wide tablet:text-3xl laptop:text-4xl">
                {t("studies.carreer")}
              </h4>
              <p className="font-body text-xs italic tablet:text-base laptop:text-xl">
                {t("studies.university")} /{" "}
                <strong className="font-bold not-italic tablet:text-base laptop:text-xl">
                  2018 - 2022
                </strong>
              </p>
            </div>
          </div>
          <div className="studies_courses flex justify-start items-center">
            <div className="studies_svg w-6 tablet:w-10 laptop:w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-device-laptop w-full"
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
            </div>
            <div className="border-l-2 h-7 mx-2.5 laptop:h-12"></div>
            <div className="studies_career_info text-gray-100 text-left">
              <h4 className="font-header text-xl tracking-wide tablet:text-3xl laptop:text-4xl">
                Platzi
              </h4>
              <p className="font-body font-light text-xs italic tablet:text-base laptop:text-xl">
                Frontend con ReactJS
              </p>
            </div>
          </div>
        </div>
        <div className="studies_courses_list h-80 overflow-auto grid place-items-start pl-4 py-2 rounded-lg shadow-[inset_0_-59px_214px_-107px_rgba(0,16,16,1)] laptop:w-2/6">
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
