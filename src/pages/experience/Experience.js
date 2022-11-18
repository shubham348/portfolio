import React from "react";
import ExperienceAccordion from "../../components/experienceAccordion/ExperienceAccordion";
import "./Experience.css";
import { Fade } from "react-reveal";
import { useTheme } from "@mui/material/styles";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio";

function Experience(props) {
  const theme = useTheme();

  return (
    <div>
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
    </div>
  );
}

export default Experience;
