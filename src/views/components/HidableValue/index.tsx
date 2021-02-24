import React from "react";
//
import * as S from "./styles";

interface HidableValueProps {
  condition: boolean;
  value?: any,
  large?: boolean
}

const HidableValue: React.FC<HidableValueProps> = ({ condition, value, large }) => {
  return condition ? <S.HideContainer large={large}/> : value;
};

export default HidableValue;
