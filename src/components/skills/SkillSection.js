import React from "react";
import SoftwareSkill from "./SoftwareSkill";
import FullStackImg from "./FullStackImg";
import { useTheme } from "@mui/material/styles";
import "./Skills.css";
import FeelingProuds from "../greeting/FeellingProuds";
import { skills } from "../../portfolio";

function SkillSection() {
  const theme = useTheme();

  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
              <div className="skills-image-div">
                <FullStackImg theme={theme} />{" "}
              </div>

              <div className="skills-text-div">
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
                <SoftwareSkill logos={skill.softwareSkills} />
                <div style={{ textAlign: "center" }}>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
                <SoftwareSkill logos={skill.softwareSkills} />
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>{" "}
              <div className="skills-image-div">
                <FeelingProuds theme={theme} />{" "}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
