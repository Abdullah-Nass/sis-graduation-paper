import { useEffect, useState } from "react";
import { LocaleContext } from "./LocaleContext";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

const messages: Record<string, Record<string, string>> = { ar, en };

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState(localStorage.getItem("lang") || "ar");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.title = messages[locale]["meta.title"];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", messages[locale]["meta.description"]);
  }, [locale]);

  const switchLanguage = () => {
    const newLang = locale === "ar" ? "en" : "ar";
    setLocale(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
