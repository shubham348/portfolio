import React from "react";
import { style } from "glamor";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/header";
import Footer from "../../components/footer/Footer";
import Experience from "../experience/Experience";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";

function Education(props) {
  const theme = useTheme();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="education-main">
      <Header />
      <div className="basic-education">
        <div className="heading-div">
          <div className="heading-img-div">
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Basic Qualification
            </h1>
            <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Graphic Era (Deemed to be University)
            </h3>
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              Bachelors in Computer Science and Engineering (2014-2018)
            </p>
            <div className="portfolio-repo-btn-div">
              <button
                {...styles}
                className="button"
                onClick={() => {
                  window.open("https://www.geu.ac.in/", "_blank");
                }}
              >
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
