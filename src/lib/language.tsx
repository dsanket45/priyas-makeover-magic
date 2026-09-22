import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "kn";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  pick: <T>(english: T, kannada: T) => T;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("priya-language");
    if (saved === "kn") setLanguageState("kn");
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("priya-language", next);
    document.documentElement.lang = next === "kn" ? "kn" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = language === "kn" ? "kn" : "en";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, pick: <T,>(english: T, kannada: T) => (language === "kn" ? kannada : english) }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
