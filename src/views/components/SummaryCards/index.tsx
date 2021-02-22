import React from "react";
import {SummaryCardsDashboard} from "./styles";
import WhiteCardDash from "../WhiteCardDashboard";
import IconCoin from "../../../assets/icon-coin.png";
import IconCard from "../../../assets/icon-card.png";

const SummaryCards: React.FC = () => {

    return (
        <SummaryCardsDashboard>
            <WhiteCardDash _maxWidth="407px" _Height="270px">
                <div className="section-account">
                    <div className="title-account">
                        <img src={IconCoin} alt="Icon Coin" className="account-icon-coin"/>
                        <p className="text-title-account">Conta</p>
                    </div>
                    <div className="balance-account">
                        <p className="balance-title">Saldo disponível</p>
                        <p className="balance-number">R$: 10.000,00</p>
                    </div>
                    <div className="transaction-account">
                        <p className="transaction-title">Transações</p>
                        <p className="transaction-value">R$: 2.120,21</p>
                    </div>
                </div>
            </WhiteCardDash>
            <WhiteCardDash _maxWidth="407px" _Height="270px">
                <div className="section-account">
                    <div className="title-account">
                        <img src={IconCard} alt="Icon Coin" className="account-icon-card"/>
                        <p className="text-title-account">Conta Crédito</p>
                    </div>
                    <div className="balance-account">
                        <p className="balance-title">Fatura atual</p>
                        <p className="balance-number__blue">R$: 120,88</p>
                    </div>
                    <div className="transaction-account">
                        <p className="transaction-title">Limite disponível</p>
                        <p className="transaction-value">R$: 9.120,88</p>
                    </div>
                </div>
            </WhiteCardDash>
        </SummaryCardsDashboard>
    );
};

export default SummaryCards;