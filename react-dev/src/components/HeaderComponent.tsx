import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/headerComponent.css";
import { useState } from "react";

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <span className="header__title">生徒管理システム</span>
      <button
        className="header__menu-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <CloseRoundedIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </button>
      <div
        className={`header__menu-container${
          open ? " header__menu-container--open" : ""
        }`}
      >
        <nav>
          <ul
            className={`header__nav-list${
              open ? " header__nav-list--open" : ""
            }`}
          >
            <li>
              <a className="header__nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="header__nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header__nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
