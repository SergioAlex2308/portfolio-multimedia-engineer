import React from "react";
import { Header } from "../Header/Header";
import { Divider } from "../Divider/Divider";
// Design SVG
import { ReactComponent as AfterEffects } from "../../assets/Icons/Programs/AfterEffects.svg";
import { ReactComponent as Figma } from "../../assets/Icons/Programs/Figma.svg";
import { ReactComponent as Illustrator } from "../../assets/Icons/Programs/Illustrator.svg";
import { ReactComponent as Lightroom } from "../../assets/Icons/Programs/Lightroom.svg";
import { ReactComponent as Photoshop } from "../../assets/Icons/Programs/Photoshop.svg";
import { ReactComponent as Premier } from "../../assets/Icons/Programs/Premier.svg";
// Dev SVG
import { ReactComponent as Git } from "../../assets/Icons/Programs/Git.svg";
import { ReactComponent as Javascript } from "../../assets/Icons/Programs/Javascript.svg";
import { ReactComponent as ReactLogo } from "../../assets/Icons/Programs/ReactLogo.svg";
import { ReactComponent as Sass } from "../../assets/Icons/Programs/Sass.svg";
import { ReactComponent as Tailwind } from "../../assets/Icons/Programs/Tailwind.svg";
import { ReactComponent as Vue } from "../../assets/Icons/Programs/Vue.svg";

function Skills() {
  const title = "Habilidades";

  return (
    <section className="skill h-screen bg-gray-500 font-header text-3xl text-gray-100 flex flex-col gap-20 justify-between items-center">
      <Header title={title} />
      <div className="skill_design px-14">
        <h3 className="mb-8">Diseño</h3>
        <div className="skill_desing_logos w-full grid grid-cols-3 grid-rows-2 place-items-center gap-5">
          <Figma className="w-14 grayscale hover:grayscale-0" />
          <AfterEffects className="w-14 grayscale hover:grayscale-0" />
          <Illustrator className="w-14 grayscale hover:grayscale-0" />
          <Photoshop className="w-14 grayscale hover:grayscale-0" />
          <Lightroom className="w-14 grayscale hover:grayscale-0" />
          <Premier className="w-14 grayscale hover:grayscale-0" />
        </div>
      </div>
      <div className="skill_dev px-14">
        <h3 className="mb-8">Desarrollo</h3>
        <div className="skill_dev_logos w-full grid grid-cols-3 grid-rows-2 place-items-center gap-5">
          <Git className="w-14 grayscale hover:grayscale-0" />
          <Javascript className="w-14 grayscale hover:grayscale-0" />
          <ReactLogo className="w-14 grayscale hover:grayscale-0" />
          <Sass className="w-14 grayscale hover:grayscale-0" />
          <Tailwind className="w-14 grayscale hover:grayscale-0" />
          <Vue className="w-14 grayscale hover:grayscale-0" />
        </div>
      </div>
      <Divider />
    </section>
  );
}

export { Skills };
