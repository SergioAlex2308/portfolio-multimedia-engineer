import React from "react";
import { Button } from "../Button/Button";

function CardProject({ title, date, description, url, src, alt }) {
  const label = "Ver proyecto";
  const icon = true;

  return (
    <article className="card flex flex-col w-full h-full justify-between drop-shadow-lg rounded-lg px-10 py-10">
      <div className="card_image w-full">
        <img className="rounded-lg" src={require(`../../assets/Images/Covers/${src}`)} alt={alt} />
      </div>
      <div className="card_description flex flex-col text-gray-100">
        <h4 className="font-header text-2xl">{title}</h4>
        <span className="font-body font-light italic text-sm">{date}</span>
        <p className="font-body">{description}</p>
      </div>
      <Button label={label} icon={icon} url={url} />
    </article>
  );
}

export { CardProject };
