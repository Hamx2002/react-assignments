import { createContext, useState } from "react";

export const AppSettingsContext = createContext();

export const AppSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: "blue",
    fontSize: "16px",
  });

  const updateTheme = (newTheme) => {
    setSettings((prev) => ({ ...prev, theme: newTheme }));
  };

  const updateFontSize = (newSize) => {
    setSettings((prev) => ({ ...prev, fontSize: newSize }));
  };

  return (
    <AppSettingsContext.Provider
      value={{ settings, updateTheme, updateFontSize }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
};
