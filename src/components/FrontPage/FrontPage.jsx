import React from "react";
import { Button } from "../Button/Button";
//import SocialIcons from "../SocialIcons/SocialIcons";

function FrontPage() {
  return (
    <section className="h-screen">
      {/* <img
        src="../../assets/Images/photo-background.jpg"
        alt="man sit looking to the right"
      /> */}
      <div className="main flex flex-col pl-10 justify-center h-full bg-gray-600">
        <div className="main_info">
          <div className="main_info_text font-header text-left">
            <h2 className="text-2xl text-blue-300">!Hola! Soy</h2>
            <h1 className="text-3xl text-gray-100">Sergio Martínez</h1>
            <h5 className="text-base text-gray-100">Ingeniero en Multimedia</h5>
          </div>
          <div className="main_button">
            <Button label={'CV'} />
          </div>
        </div>
        <div className="main_contact">
          {/* <SocialIcons /> */}
          {/* <span>Scroll</span> */}
        </div>
      </div>
    </section>
  );
}

export { FrontPage };
