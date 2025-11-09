import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import en from "src/Components/Local/en.json";
// import hi from "./locales/hi.json";

import hi from "./Components/Local/hi.json";
import en from "./Components/Local/en.json";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi }
    },
    lng: localStorage.getItem("lang") || "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
