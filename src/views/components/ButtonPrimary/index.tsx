import React from "react";
//
import "./styles.scss";
import rightArrow from "../../../assets/right-arrow.png";

interface SectionProps {
  title: string;
  _width?: string;
}

const SectionA: React.FC<SectionProps> = ({ title, _width }) => {
  return (
    <button
      type="button"
      className="button-primary"
      style={_width ? { width: _width, marginTop: "2.5rem" } : undefined}
    >
      {title}
      <img src={rightArrow} alt="" />
    </button>
  );
};

export default SectionA;
