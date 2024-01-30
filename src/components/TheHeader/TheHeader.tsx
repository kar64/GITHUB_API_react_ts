import "./TheHeader.scss";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const TheHeader = () => (
  <div className="theHeader">
    <div className="logo">devfinder</div>
    <ThemeSwitcher/>
  </div>
);
