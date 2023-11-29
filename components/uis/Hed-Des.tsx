import React from "react";
interface HeadingDescriptionProps {
  time?: string;
  readmore?: string;
  heading?: string;
  description?: string;
  fontSizeheading?: string;
  fontSizedescription?: string;
  color?: string;
  textalign?: string;
  fontweight?: number;
}

const HeadingDescription: React.FC<HeadingDescriptionProps> = ({
  fontweight,
  textalign,
  fontSizeheading,
  heading,
  description,
  color,
  fontSizedescription,
}) => {
  const headingStyle: React.CSSProperties = {
    textAlign: (textalign as React.CSSProperties["textAlign"]) || "center",
    fontSize: fontSizeheading || "36px",
    marginBlockStart: "0em",
    marginBlockEnd: "0em",
    color: color || "#333",
  };
  const descriptionStyle: React.CSSProperties = {
    textAlign: (textalign as React.CSSProperties["textAlign"]) || "center",
    fontSize: fontSizedescription || "15px",
    fontWeight: fontweight || 600,
    color: "#b1b4b9",
  };

  return (
    <div className="head-desc">
      <h2 className="heading" style={headingStyle}>
        {heading}
      </h2>
      <div className="description" style={descriptionStyle}>
        {description}
      </div>
    </div>
  );
};

export default HeadingDescription;
