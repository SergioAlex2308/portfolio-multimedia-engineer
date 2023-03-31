import React, { useRef } from "react";
import { Header } from "../Header/Header";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Input } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function Contact() {
  const SERVICE = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE = process.env.REACT_APP_TEMPLATE_ID;
  const KEY = process.env.REACT_APP_PUBLIC_KEY;

  const currentLanguage = i18n.language;
  const textContact = require(currentLanguage === "es"
    ? "language/es.json"
    : "language/en.json");
  const textMessage = textContact["contact.action"];
  const arrayMessage = textMessage.split(" ");
  let keyword = currentLanguage === "es" ? "correo" : "email";

  const { t } = useTranslation();
  const title = t("contact.title");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.promise(emailjs.sendForm(SERVICE, TEMPLATE, form.current, KEY), {
      loading: t("contact.notify.loading"),
      success: () =>
        t("contact.notify.success"),
      error: (err) => `This just happened: ${err.text}`,
    });
  };

  const notifyCopyText = () => {
    const mail = "smartinez.ing.mul@gmail.com";
    navigator.clipboard.writeText(mail).then(function () {
      toast.success(t("contact.notify.copy"), {
        id: "clipboard",
        duration: 1000,
        icon: "📎",
      });
    });
  };
  return (
    <section
      id="contact"
      className="snap-center h-screen bg-gray-500 flex flex-col justify-between items-center pb-14"
    >
      <Header title={title} />
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          success: {
            style: {
              background: "white",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <div className="contact flex flex-col gap-y-14 items-center">
        <div className="contact_info flex items-center px-12">
          <SocialIcons />
          <div className="contact_info_divider h-24 border-l-2 mx-4"></div>
          <div className="contact_info_text text-left text-gray-100">
            <h4 className="font-header text-xl">{t("contact.calltoaction")}</h4>
            <p className="font-body">
              {arrayMessage.map((word, index) =>
                word.toLowerCase().includes(keyword.toLowerCase()) ? (
                  <span
                    key={index}
                    className="text-blue-300"
                    onClick={notifyCopyText}
                  >
                    {word}{" "}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </p>
          </div>
        </div>
        <div className="contact_form w-5/6 shadow-2xl px-6 py-8">
          <form ref={form} className="flex flex-col gap-8" onSubmit={sendEmail}>
            <Input
              variant="standard"
              label={t("contact.form.name")}
              name="user_name"
              required
            />
            <Input
              variant="standard"
              label={t("contact.form.email")}
              name="user_email"
              required
            />
            <Input
              variant="standard"
              label={t("contact.form.message")}
              name="message"
              required
            />
            <button
              type="submit"
              className="border border-blue-300 text-blue-300 py-2 rounded-md hover:bg-blue-300 hover:text-gray-100 font-header "
            >
              {t("contact.form.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export { Contact };
