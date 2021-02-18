import React from 'react';
import {BlockSection} from './styles';

const SectionC: React.FC = () => {
  return (
    <>
      <BlockSection>
        <div className="home-03">
          <div className="elementos-anuidade">
            <div className="interno">
              <div className="bloco01">
                <p className="titulo-anuidade">Zero Anuidade</p>
                <p className="subtitulo-anuidade">
                  Burocracia custa caro. Somos eficientes para você não ter que
                  pagar tarifas.
                </p>
              </div>
            </div>
            <div className="interno">
              <div className="bloco02">
                <p className="titulo-valor-anuidade">0,00</p>
              </div>
            </div>
          </div>
        </div>
      </BlockSection>
    </>
  );
}

export default SectionC;
