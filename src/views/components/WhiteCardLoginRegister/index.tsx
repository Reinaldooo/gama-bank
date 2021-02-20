import React from "react";
import { ContainerCard } from "./styles";

interface WhiteCardGenericLoginRegisterProps {
  title: string | null;
  subtitle: string | null;
}

const WhiteCardLoginRegister: React.FC<WhiteCardGenericLoginRegisterProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <ContainerCard>
      <div className="section-login">
        <div className="white-card">
          {title ? <p className="titulo-card">{title}</p> : null}
          {subtitle ? <p className="subtitulo-card">{subtitle}</p> : null}
          {children}
        </div>
      </div>
    </ContainerCard>
  );
};

export default WhiteCardLoginRegister;
