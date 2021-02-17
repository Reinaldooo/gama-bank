import React from "react";
//
import * as S from "./styles";
import rightArrow from "../../../assets/right-arrow.png";

interface SectionProps {
  title: string;
  _width?: string;
}

const SectionA: React.FC<SectionProps> = ({ title, _width }) => {
  return (
    <S.Button
      type="button"
      className="button-primary"
      _width={_width}
      _marTop="2.5rem"
    >
      {title}
      <img src={rightArrow} alt="" />
    </S.Button>
  );
};

export default SectionA;
