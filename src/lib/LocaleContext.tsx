import React, { createContext, useContext, useState, useEffect } from "react";
import { TranslationSchema, translations } from "./translations";

export type Locale = "en" | "fa";

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSchema;
  isRtl: boolean;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    const newPath = newLocale === "fa" ? "/fa" : "/";
    window.history.pushState({}, "", newPath);
    updateHtmlAttributes(newLocale);
  };

  const updateHtmlAttributes = (lang: Locale) => {
    if (lang === "fa") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "fa";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.startsWith("/fa") || path === "/fa/") {
        setLocaleState("fa");
        updateHtmlAttributes("fa");
      } else {
        setLocaleState("en");
        updateHtmlAttributes("en");
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    
    // Polyfill or hook for pushState/replaceState so page clicks update locale without reloads
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  const t = translations[locale];
  const isRtl = locale === "fa";

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, isRtl }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
