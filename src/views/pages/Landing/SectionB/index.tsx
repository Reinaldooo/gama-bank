import React from 'react'

import appBg1 from '../../../../assets/appBg1.png'
import appBg2 from '../../../../assets/appBg2.png'

import * as S from "./styles";

const SectionB = () => {
    return (
        <S.ContainerSection>
            <S.ContainerContent>
                <S.DarkPart>
                    <h2>Conta digital do Gama Academy</h2>
                    <div>
                        <img src={appBg1} alt="Conta digital do Gama Academy"></img>
                    </div>
                    <h3>
                        Rende mais que a poupança,<br />sem taxa de manutenção<br />nem tarifas escondidas.
                    </h3>
                </S.DarkPart>
                <S.LightPart>
                    <h2>Cartão de Crédito</h2>
                    <div>
                        <img src={appBg2} alt="Cartão de crédito"></img>
                    </div>
                    <h3>
                        Rende mais que a poupança,<br />sem taxa de manutenção<br />nem tarifas escondidas.
                    </h3>
                </S.LightPart>
            </S.ContainerContent>

        </S.ContainerSection>

    )
}

export default SectionB
