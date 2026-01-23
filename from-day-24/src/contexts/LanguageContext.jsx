import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN"); // 'EN' or 'TA'

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  // Simple dictionary for demo
  const translations = {
    EN: { welcome: "Welcome", description: "This is a multi-language app." },
    TA: { welcome: "வணக்கம்", description: "இது ஒரு பல மொழி பயன்பாடு." },
  };

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, texts: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
