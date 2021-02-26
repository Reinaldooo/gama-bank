import React from "react";
//
import { ContainerE } from "./styles";
import img from "../../../../assets/sectionE-back.png";


export function SectionE() {
  return (
    <ContainerE>
      <div className="LeftContent">
        <h1 className= "text">
          Simplifique a sua vida.
          <br />
          Abra sua conta.
        </h1>

        <h6 className= "text"> GamaAcademy Bank Line S.A.- CNPJ 00.000.000/0000-00
          <br /> Rua Fictícia, 999 - 00000-000 - São Paulo, SP
          <br /> Este é um proje de avaliação | GamaAcademy | Accenture| 2021
        </h6>
      </div>

      <div className="RigthContent">
        <div>
          <img src={img} alt="cell phone" />
        </div>
      </div>
    </ContainerE>
  );
}

export default SectionE;