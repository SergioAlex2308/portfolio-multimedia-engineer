import React from "react";
import { Header } from "../Header/Header";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Input } from "@material-tailwind/react";
import { Button } from "../Button/Button";

function Contact() {
  const title = "Contacto";
  const icon = false;
  const label = "Enviar";
  return (
    <section className="h-screen bg-gray-500 flex flex-col justify-between items-center pb-14">
      <Header title={title} />
      <div className="contact flex flex-col gap-y-14 items-center">
        <div className="contact_info flex items-center px-12">
          <SocialIcons />
          <div className="contact_info_divider h-24 border-l-2 mx-4"></div>
          <div className="contact_info_text text-left text-gray-100">
            <h4 className="font-header text-xl">!Enviame un mensaje!</h4>
            <p className="font-body">
              Por <span className="text-blue-300">correo</span> o a través de
              mis
              <span className="text-blue-300">redes sociales</span>
            </p>
          </div>
        </div>
        <div className="contact_form w-5/6 shadow-2xl px-6 py-8">
          <form action="" className="flex flex-col gap-8">
            <Input variant="standard" label="Nombre Completo" />
            <Input variant="standard" label="Correo" />
            <Input variant="standard" label="Teléfono" />
            <Input variant="standard" label="¿Cómo puedo ayudarte?" />
            <Button icon={icon} label={label} />
          </form>
        </div>
      </div>
    </section>
  );
}

export { Contact };
