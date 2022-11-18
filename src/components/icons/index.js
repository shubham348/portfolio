import React from "react";
import MaterialIcon from "./MaterialIcon";
import ReduxIcon from "./ReduxIcon";
import TailwindIcon from "./TailwindIcon";

const SVGIcon = ({ name, ...svgProps }) => {
  switch (name) {
    case "material-ui":
      return <MaterialIcon {...svgProps} />;
    case "redux":
      return <ReduxIcon {...svgProps} />;
    case "tailwind":
      return <TailwindIcon {...svgProps} />;
    default:
      return <></>;
  }
};

export default SVGIcon;
