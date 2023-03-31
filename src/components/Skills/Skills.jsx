import React from "react";
import { Header } from "../Header/Header";
import { Divider } from "../Divider/Divider";
import { Tooltip } from "@material-tailwind/react";
// Design SVG
import { ReactComponent as AfterEffects } from "assets/Icons/Programs/AfterEffects.svg";
import { ReactComponent as Figma } from "assets/Icons/Programs/Figma.svg";
import { ReactComponent as Illustrator } from "assets/Icons/Programs/Illustrator.svg";
import { ReactComponent as Lightroom } from "assets/Icons/Programs/Lightroom.svg";
import { ReactComponent as Photoshop } from "assets/Icons/Programs/Photoshop.svg";
import { ReactComponent as Premier } from "assets/Icons/Programs/Premier.svg";
// Dev SVG
import { ReactComponent as Git } from "assets/Icons/Programs/Git.svg";
import { ReactComponent as Javascript } from "assets/Icons/Programs/Javascript.svg";
import { ReactComponent as ReactLogo } from "assets/Icons/Programs/ReactLogo.svg";
import { ReactComponent as Sass } from "assets/Icons/Programs/Sass.svg";
import { ReactComponent as Tailwind } from "assets/Icons/Programs/Tailwind.svg";
import { ReactComponent as Vue } from "assets/Icons/Programs/Vue.svg";

import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const title = t("skills.title");

  const styleLogo =
    "w-14 grayscale transition ease-in-out hover:grayscale-0 hover:scale-110";

  return (
    <section id="skills" className="skill snap-center h-screen bg-gray-500 font-header text-3xl text-gray-100 flex flex-col justify-between">
      <Header title={title} />
      <div className="skill_design px-14">
        <h3 className="mb-14">{t("skills.design")}</h3>
        <div className="skill_desing_logos w-full grid grid-cols-3 grid-rows-2 place-items-center gap-5">
          <Tooltip
            content="Figma"
            animate={{
              mount: { scale: 1, y: -5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Figma className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="After Effects"
            animate={{
              mount: { scale: 1, y: -5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <AfterEffects className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Illustrator"
            animate={{
              mount: { scale: 1, y: -5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Illustrator className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Photoshop"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 5 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Photoshop className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Lightroom"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 5 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Lightroom className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Premier Pro"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 5 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Premier className={styleLogo} />
          </Tooltip>
        </div>
      </div>
      <div className="skill_dev px-14 mb-12">
        <h3 className="mb-14">{t("skills.dev")}</h3>
        <div className="skill_dev_logos w-full grid grid-cols-3 grid-rows-2 place-items-center gap-5">
          <Tooltip
            content="Git"
            animate={{
              mount: { scale: 1, y: -5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Git className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Javascript"
            animate={{
              mount: { scale: 1, y: -5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Javascript className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="React JS"
            animate={{
              mount: { scale: 1, y: -5 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <ReactLogo className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Sass"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 5 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Sass className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Tailwind CSS"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 5 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Tailwind className={styleLogo} />
          </Tooltip>
          <Tooltip
            content="Vue JS"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 5 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <Vue className={styleLogo} />
          </Tooltip>
        </div>
      </div>
      <Divider />
    </section>
  );
}

export { Skills };
