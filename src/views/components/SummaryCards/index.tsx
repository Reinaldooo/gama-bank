import React, { useMemo } from "react";
import {SummaryCardsDashboard} from "./styles";
import WhiteCardDash from "../WhiteCardDashboard";
import IconCoin from "../../../assets/icon-coin.png";
import IconCard from "../../../assets/icon-card.png";
import { useSelector } from "react-redux";
import { IDashboardState } from "../../../store/modules/accounts/types";
import { formatBRL } from "../../../utils/formatter";

const SummaryCards: React.FC = () => {
    const {
        debitAccount,
        debitTransactions,
        creditAccount,
    } = useSelector((state: IDashboardState) => state)

    const debitBalance = formatBRL(debitAccount!.saldo) || "R$ 0"
    const debitTransactionsSum = formatBRL(debitTransactions!.reduce(
        (accum,item) => accum + item.valor, 0)) || "R$ 0"

    const creditBalance = formatBRL(creditAccount!.saldo) || "R$ 0"
    // Creating a fake value because the API don't provide this information
    // useMemo is used here just to avoid the number changing with updates on the store
    const creditBill = useMemo(
        () => formatBRL(Math.random() * 1500), []
    )

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
                        <p className="balance-number">{debitBalance}</p>
                    </div>
                    <div className="transaction-account">
                        <p className="transaction-title">Transações</p>
                        <p className="transaction-value">{debitTransactionsSum}</p>
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
                        <p className="balance-number__blue">{creditBill}</p>
                    </div>
                    <div className="transaction-account">
                        <p className="transaction-title">Limite disponível</p>
                        <p className="transaction-value">{creditBalance}</p>
                    </div>
                </div>
            </WhiteCardDash>
        </SummaryCardsDashboard>
    );
};

export default SummaryCards;