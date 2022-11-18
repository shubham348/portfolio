import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { useTheme } from "@mui/material/styles";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer() {
  const theme = useTheme();

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img">❤️</span> by Shubham Gupta
        </p>
      </Fade>
    </div>
  );
}
