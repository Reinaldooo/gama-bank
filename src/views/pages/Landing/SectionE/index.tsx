import React from "react";
//
import {ContainerE} from "./styles";
import img from "../../../../assets/sectionE-back.png";


export function SectionE() {
    return (
        <ContainerE>
            <div className="LeftContent">
                <div className="container-text">
                    <p className="text-title">
                        Simplifique a sua vida.
                        <br/>
                        Abra sua conta.
                    </p>
                    <p className="text-address"> GamaAcademy Bank Line S.A.- CNPJ 00.000.000/0000-00
                        <br/> Rua Fictícia, 999 - 00000-000 - São Paulo, SP
                        <br/> Este é um proje de avaliação | GamaAcademy | Accenture| 2021
                    </p>
                </div>
            </div>

            <div className="RigthContent">
                <img src={img} alt="cell phone"/>
            </div>
        </ContainerE>
    );
}

export default SectionE;