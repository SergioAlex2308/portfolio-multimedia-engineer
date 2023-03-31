import React from "react";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";

function CardProject({ title, date, description, url, src, alt }) {
  const { t } = useTranslation(); 
  const label = t("projects.button");
  const download = false;

  return (
    <article className="card flex flex-col justify-between items-center w-full h-4/5 drop-shadow-lg rounded-lg">
      <div className="card_image w-4/5">
        <img className="rounded-lg" src={require(`../../assets/Images/Covers/${src}`)} alt={alt} />
      </div>
      <div className="card_description flex flex-col text-gray-100 px-4">
        <h4 className="font-header text-2xl">{title}</h4>
        <span className="font-body font-light italic text-sm">{date}</span>
        <p className="font-body">{description}</p>
      </div>
      <Button label={label} download={download} url={url} />
    </article>
  );
}

export { CardProject };
