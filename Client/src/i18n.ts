import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ArmenianTranslations from "./translations/hy.json";
import EnglishTranslations from "./translations/en.json";
import RussianTranslations from "./translations/ru.json";
const resources = {
    en: {
        translation: EnglishTranslations,
    },
    hy: {
        translation: ArmenianTranslations,
    },
    ru: {
        translation: RussianTranslations
    }
};

i18next.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;