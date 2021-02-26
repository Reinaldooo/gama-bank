import React from "react";
//
import { Container } from "./style";
import IconHistoryCard from "../../../assets/icon-history-card.png";
import { ILancamento } from "../../../store/modules/accounts/types";
import { formatBRL, formatDate } from "../../../utils/formatter";

interface ITransactionsMap {
  [key: string]: string;
}

const transactionsMap: ITransactionsMap = {
  D: "Despesa",
  R: "Receita",
  TU: "Transferência entre usuários",
  TC: "Transferência entre contas",
};

interface ITransactionCardProps extends ILancamento {}

const TransactionCard: React.FC<ITransactionCardProps> = ({
  tipo,
  valor,
  descricao,
  data,
}) => {
  const formattedValue = formatBRL(valor);
  const formattedDate = formatDate(data);

  return (
    <Container>
      <div className="extract-account-history">
        <div className="row-historic-account">
          <div className="column-icon">
            <img
              src={IconHistoryCard}
              alt="Icon Coin"
              className="account-icon-history-card"
            />
          </div>
          <div className="column-description">
            <p className="historic-text">{transactionsMap[tipo]}</p>
            <p className="description-text">{descricao}</p>
            <p
              className={`value-text${
                valor < 0 ? " value-text--negative" : ""
              }`}
            >
              {formattedValue}
            </p>
          </div>
          <div className="column-date">
            <p className="date-text">{formattedDate}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TransactionCard;
