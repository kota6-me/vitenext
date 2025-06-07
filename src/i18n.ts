import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ja: {
    translation: {
      タイトル: "タイトル",
      aaa: "あああ",
      // 他の日本語翻訳
    },
  },
  en: {
    translation: {
      タイトル: "Title",
      aaa: "aaa",
      // 他の英語翻訳
    },
  },
  kr: {
    translation: {
      タイトル: "제목",
      aaa: "아아아",
      // 他の韓国語翻訳
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja", // デフォルト言語
  fallbackLng: "ja",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
