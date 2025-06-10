import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/ HeaderComponent _04.css";
import { useState } from "react";

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__left">
          <span className="header__logo">生徒管理システム</span>
        </div>
        <div className="header__right">
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
        </div>
      </header>

      <div className={`side-menu${open ? " side-menu--open" : ""}`}>
        <nav className="side-menu__nav">
          <ul className="side-menu__list">
            <li><a className="side-menu__link" href="#dashboard">Dashboard</a></li>
            <li><a className="side-menu__link" href="#students">Students</a></li>
            <li><a className="side-menu__link" href="#teachers">Teachers</a></li>
            <li><a className="side-menu__link" href="#classes">Classes</a></li>
            <li><a className="side-menu__link" href="#settings">Settings</a></li>
          </ul>
        </nav>
      </div>

      {/* 背景クリックで閉じる */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
};
