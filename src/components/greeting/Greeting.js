import React from "react";
import { useNavigate } from "react-router-dom";
import FeelingProuds from "./FeellingProuds";
import { style } from "glamor";
import { useTheme } from "@mui/material/styles";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./Greeting.css";
import { greeting } from "../../portfolio";

export default function Greeting() {
  const theme = useTheme();
  const navigate = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{greeting.title}</h1>
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              <span>I'm </span>
              <span style={{ color: theme.accentColor }}>
                {greeting.full_name}.{" "}
              </span>
            </p>
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <div className="portfolio-repo-btn-div">
              <button
                {...styles}
                className="button"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <FeelingProuds theme={theme} />
        </div>
      </div>
    </div>
  );
}
