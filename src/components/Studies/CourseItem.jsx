import React from "react";

function CourseItem({ img, name, url }) {
  return (
    <article className="flex items-center my-2">
      <figure>
        <img
          className="w-6 mr-3"
          src={require(`../../assets/Images/Courses/${img}`)}
          alt="Logo del curso"
        />
      </figure>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p className="font-body font-normal text-base text-gray-200 tablet:text-xl italic hover:not-italic hover:text-gray-100">{name}</p>
      </a>
    </article>
  );
}

export { CourseItem };
