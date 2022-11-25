import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { useTheme } from "@mui/material/styles";

export default function Skills() {
  const theme = useTheme();
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <h1 className="skills-header" style={{ color: theme.text }}>
          Here's what I do
        </h1>
      </div>
      <SkillSection />
    </div>
  );
}
