import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../App";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./Header.css";

function Header(props) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="headerContainer">
      <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              className="homei"
              to="/"
              tag={Link}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ec"
              to="/education"
              tag={Link}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Education & Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cr"
              to="/contact"
              tag={Link}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Contact and Resume
            </NavLink>
          </li>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </ul>
      </header>
    </div>
  );
}

export default Header;
