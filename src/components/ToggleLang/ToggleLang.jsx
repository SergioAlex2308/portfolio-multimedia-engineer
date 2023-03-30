import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("es");

  const handleLangChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select onChange={handleLangChange} value={language}>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};

export { ChangeLanguage };
