import React from 'react';
import { Container } from './style';
import img from '../../../img/5b2d2ad9768f2 1.png'
import pix from '../../../img/Pix.png'
import { Link } from "react-router-dom";


// import { Container } from './styles';

const SideNav: React.FC = () => {
  return (
      <>
      <Container>
          <div className="div-SideNav">
              <img src={img} alt="logo-gama"/>
                <div className="menu-option">
                     <Link className="link" to="/deposit">
                        <img className="pix" src={pix} alt="dep"/>
                        <p>Depositos</p>
                     </Link>
                </div>
              <div className="menu-option">
                <Link className="link" to="/plans">
                    <img className="pix" src={pix} alt="plan"/>
                    <p>Planos</p>
                </Link>

              </div>
              <div className="menu-option">
                <Link to="/payments">
                    <img className="pix" src={pix} alt="payment"/>
                    <p>Pagamentos</p>
                </Link>
              </div>
              <div className="menu-option">
                <Link to="/transactions">
                    <img className="pix" src={pix} alt="transaction"/>
                    <p>Transações</p>
                </Link>

              </div>
          </div>
      </Container>

      </>
  )
}

export default SideNav;