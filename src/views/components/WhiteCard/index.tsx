import React from "react";
//
import * as S from "./styles";

interface WhiteCardProps {
  title: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ title, children }) => {
  return (
    <S.Container _width="100%">
      <h4>{title}</h4>
      {children}
    </S.Container>
  );
};

export default WhiteCard;
