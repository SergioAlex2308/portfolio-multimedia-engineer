import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './en.json';
import translationES from './es.json';

const resources = {
	es: {
		translation: translationES
	},
	en: {
		translation: translationEN
	}
};

i18n
	.use(detector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "es",
		keySeparator: false,
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;