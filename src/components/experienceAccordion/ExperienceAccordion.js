import React from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExperienceAccordion(props) {
  const theme = props.theme;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="experience-accord">
      {props.sections.map((section) => {
        return (
          <Accordion
            expanded={expanded === section["title"]}
            onChange={handleChange(section["title"])}
            className="accord-panel"
            key={section["title"]}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {section["title"]}
              </Typography>
            </AccordionSummary>
            {section["experiences"].map((experience) => {
              return (
                <AccordionDetails>
                  {" "}
                  <ExperienceCard experience={experience} theme={theme} />
                </AccordionDetails>
              );
            })}
          </Accordion>
        );
      })}
    </div>
  );
}

export default ExperienceAccordion;
