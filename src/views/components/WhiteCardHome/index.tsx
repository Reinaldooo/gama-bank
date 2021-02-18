import React from "react";
//
import * as S from "./styles";

interface WhiteCardHomeProps {
  title: string;
}

const WhiteCardHome: React.FC<WhiteCardHomeProps> = ({ title, children }) => {
  return (
    <S.Container _width="100%">
      <h4>{title}</h4>
      {children}
    </S.Container>
  );
};

export default WhiteCardHome;
