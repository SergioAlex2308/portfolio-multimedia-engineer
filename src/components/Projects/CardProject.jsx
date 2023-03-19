import React from "react";
import { Button } from "../Button/Button";

function CardProject({ title, description, url, src, alt }) {
  const label = "Ver proyecto";
  const icon = true;

  return (
    <article>
      <div className="card_image w-full">
        <img src={require(`../../assets/Images/Covers/${src}`)} alt={alt} />
      </div>
      <div className="card_description">
        <h4 className="font-header">{title}</h4>
        <p className="font-body">{description}</p>
      </div>
      <Button label={label} icon={icon} url={url} />
    </article>
  );
}

export { CardProject };
