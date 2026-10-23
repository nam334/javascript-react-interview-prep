import { createContext, useState, type ReactNode } from "react";
interface ThemeContextType  {
  theme: string;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);


export const ThemeProvider = ({ children } :{children: ReactNode}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
