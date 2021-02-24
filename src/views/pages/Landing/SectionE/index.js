import React from "react";
//importar todos componentes que compoem a secao quando for o caso 
import { ContainerE } from "./styled";
import img from '../../assets/CellPhone.png'


function Section5() {
  return (
    <ContainerE>
      <div className="LeftContent">
        <h1>
          Simplifique a sua vida.
          <br />
          Abra sua conta.
        </h1>

        <h6>
          GamaAcademy Bank Line S.A.- CNPJ 00.000.000/0000-00
          <br /> RFictícia, 999 - 00000-000 - São Paulo, SP
          <br /> Este é um projede avaliação | GamaAcademy | Accenture| 2021
        </h6>
      </div>

      <div className="RigthContent">
        <div>
          <img src={img} alt="image cell phone" />
        </div>
      </div>
    </ContainerE>
  );
}

export default Section5;

/*
const SectionE: React.FC = () => {
return(
  <ContainerE>
    <LeftContent>
      <h1>
          Simplifique a sua vida.<br/>
          Abra sua conta.
      </h1>
  
       <h6>
          GamaAcademy Bank Line S.A.- CNPJ 00.000.000/0000-00</br>
          Rua Fictícia, 999 - 00000-000 - São Paulo, SP</br>
          Este é um projeto de avaliação | GamaAcademy | Accenture| 2021
      </h6>
    </LeftContent>

   <RigthContent>
        <a href="/">
          <img src={cell-phone} alt="image cell phone" />
        </a>
   </RigthContent>
  </Container>

 );
}
export default sectionE;

*/
