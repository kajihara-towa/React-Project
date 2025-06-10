import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/headerComponent03.css";
import { useState } from "react";

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  return (
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

        {open && (
          <div className="header__modal">
            <ul className="header__nav-list">
              <li><a className="header__nav-link" href="#dashboard">Dashboard</a></li>
              <li><a className="header__nav-link" href="#students">Students</a></li>
              <li><a className="header__nav-link" href="#teachers">Teachers</a></li>
              <li><a className="header__nav-link" href="#classes">Classes</a></li>
              <li><a className="header__nav-link" href="#settings">Settings</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
