import React from "react";
import "./SoftwareSkill.css";
import SVGIcon from "../icons";
function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <li className="software-skill-inline" name={logo.skillName}>
                {logo?.type === "svg" ? (
                  <div style={{ height: "40px", width: "40px" }}>
                    <SVGIcon name={logo.fontAwesomeClassname} />
                  </div>
                ) : (
                  <i class={logo.fontAwesomeClassname} style={logo.style} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
