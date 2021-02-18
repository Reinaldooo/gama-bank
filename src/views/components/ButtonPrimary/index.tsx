import React, { ButtonHTMLAttributes } from "react";
//
import * as S from "./styles";
import rightArrow from "../../../assets/right-arrow.png";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  _width?: string;
};

const SectionA: React.FC<ButtonProps> = ({ title, _width, ...rest }) => {
  return (
    <S.Button
      type="button"
      className="button-primary"
      _width={_width}
      _marTop="2.5rem"
      {...rest}
    >
      {title}
      <img src={rightArrow} alt="" />
    </S.Button>
  );
};

export default SectionA;
