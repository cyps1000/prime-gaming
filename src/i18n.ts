import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en_ro } from "./translations/en_ro";
import { en_en } from "./translations/en_en";

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: en_en,
    },
    RO: {
      translation: en_ro,
    },
  },
  lng: "RO",
  fallbackLng: "EN",
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
