import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
//
import * as S from "./styles";

interface MoneySpinnerProps {
  size: number;
  color: string;
}

const MoneySpinner: React.FC<MoneySpinnerProps> = ({ size, color }) => {
  return (
    <S.Container>
      <RiMoneyDollarCircleLine size={size} color={color} />
    </S.Container>
  );
};

export default MoneySpinner;
