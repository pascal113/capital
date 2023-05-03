import i18n from "i18next";

// npm install react-i18next i18next --save
import { initReactI18next } from "react-i18next";

// # if you'd like to detect user language and load translation
// npm install i18next-http-backend i18next-browser-languagedetector --save
import detector from "i18next-browser-languagedetector";
import de from './locales/de';
import gb from './locales/gb';


i18n
// .use(Backend)
.use(detector)  // https://github.com/i18next/i18next-browser-languageDetect
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // for all options read: https://www.i18next.com/overview/configuration-options
    resources: {
        de:de,
        gb:gb
    },
    // lng: "de", 
    fallbackLng: "de",
    detection: { // languagedetector option
        order: ['querystring', 'htmlTag', 'cookie'],
        lookupQueryString: 'lang', // ?lang=
        lookupCookie: 'i18n_lang' // cookie name
    },
    debug: true,
    saveMissing: true, 
    // keySeparator: false,
    // ns:['pageKo','pageEn','pageCn'],
    interpolation: {
        escapeValue: false  
    }
}, function(err) {
    if(err) console.error(err);
});

export default i18n