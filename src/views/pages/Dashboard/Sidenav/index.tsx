import React from 'react';
import { Link } from "react-router-dom";


import img from '../../../../assets/5b2d2ad9768f2 1.png'
import pix from '../../../../assets/Pix.png'
import { Container } from './style';


const SideNav: React.FC = () => {
  return (
      <>
      <Container>
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
      </Container>

      </>
  )
}

export default SideNav;