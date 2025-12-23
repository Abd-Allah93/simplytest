
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations for static UI elements
const resources = {
    en: {
        translation: {
            "nav": {
                "studio": "Studio",
                "projects": "Work",
                "about": "About",
                "contact": "Contact",
                "portfolio": "View Portfolio"
            },
            "footer": {
                "rights": "All Rights Reserved."
            },
            "common": {
                "scroll_down": "Scroll Down",
                "loading": "Loading..."
            }
        }
    },
    ar: {
        translation: {
            "nav": {
                "studio": "الاستوديو",
                "projects": "أعمالنا",
                "about": "عن الاستوديو",
                "contact": "اتصل بنا",
                "portfolio": "شاهد أعمالنا"
            },
            "footer": {
                "rights": "جميع الحقوق محفوظة."
            },
            "common": {
                "scroll_down": "تمرير للأسفل",
                "loading": "جاري التحميل..."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // Default language, will be overridden by App.tsx logic
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
