import "./ThemeSwitcher.scss";
import { MoonIcon } from "../MoonIcon";
import { SunIcon } from "../SunIcon";
import { useState, useEffect } from "react";




export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <div className="themeSwitcher" onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon />
    </div>
  );
};
