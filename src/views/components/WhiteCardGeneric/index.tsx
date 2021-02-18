import React from "react";
import { ContainerCard } from "./styles";

interface WhiteCardLoginRegisterProps {
  title: string;
  subtitle: string | null;
}

const WhiteCard: React.FC<WhiteCardLoginRegisterProps> = ({ title, subtitle, children }) => {
  return (
    <ContainerCard>
      <div className="section-login">
        <div className="white-card">
          <p className="titulo-card">{title}</p>
          {subtitle ? (<p className="subtitulo-card">{subtitle}</p>) : null }
          {children}
        </div>
      </div>
    </ContainerCard>
  );
};

export default WhiteCard;
