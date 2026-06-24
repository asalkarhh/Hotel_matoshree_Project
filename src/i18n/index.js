import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import mr from './mr.js';
import en from './en.js';

const LANG_KEY = 'matoshree-lang';
const savedLang =
  typeof window !== 'undefined' ? localStorage.getItem(LANG_KEY) || 'mr' : 'mr';

i18n.use(initReactI18next).init({
  resources: {
    mr: { translation: mr },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: 'mr',
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

// Sync <html lang> attribute with active language
const syncLang = (lang) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
  }
};

syncLang(i18n.language);

i18n.on('languageChanged', (lang) => {
  syncLang(lang);
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANG_KEY, lang);
  }
});

export default i18n;
