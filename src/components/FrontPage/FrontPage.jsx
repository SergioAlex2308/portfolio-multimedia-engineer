import React from "react";
import { Button } from "components/Button/Button"
import { SocialIcons } from "../SocialIcons/SocialIcons";

function FrontPage() {
  const label = "CV";
  const icon = false;
  const url = '../../assets/Pdf/CV_SergioMartínez.pdf';
  const download = true;

  return (
    <section id="home" className="h-screen snap-center scroll-mt-20 relative">
      <div className="main grid align-center justify-items-start items-end h-full z-10 bg-photo-main-small tablet:bg-photo-main-large bg-cover bg-no-repeat bg-center">
        <div className="main_overlay absolute w-full h-full bg-gray-600 opacity-50"></div>
        <div className="main_info pl-10 z-20">
          <div className="main_info_text font-header text-left">
            <h2 className="text-2xl text-blue-300">!Hola! Soy</h2>
            <h1 className="text-3xl text-gray-100">Sergio Martínez</h1>
            <h5 className="text-base text-gray-100">Ingeniero en Multimedia</h5>
          </div>
          <div className="main_button w-20 h-7">
            <Button label={label} icon={icon} url={url} download={download} />
          </div>
        </div>
        <div className="main_contact pl-10 w-full py-9 z-20">
          <div className="flex justify-between">
            <SocialIcons />
            <div className="flex items-center text-gray-200 rotate-90">
              <span className="border-t-2 w-5"></span>
              <p className="text-gray-100 px-2 font-body font-normal italic tracking-widest">
                Scroll
              </p>
              <span className="border-t-2 w-5"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FrontPage };
