import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
//
import * as S from "./styles";

interface MoneyLoaderProps {
  size: number;
  color: string;
}

const MoneyLoader: React.FC<MoneyLoaderProps> = ({ size, color }) => {
  return (
    <S.Container>
      <RiMoneyDollarCircleLine size={size} color={color} />
    </S.Container>
  );
};

export default MoneyLoader;
