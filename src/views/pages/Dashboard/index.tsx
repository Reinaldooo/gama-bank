import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToast } from "../../../context/toastContext";
import { Route, Switch } from "react-router-dom";
//
import api from "../../../services/api";
import { isAuth } from "../../../services/auth";
import {
  accountDataSuccess,
  transactionTypesSuccess,
} from "../../../store/modules/accounts/actions";
import { IDashboardState } from "../../../store/modules/accounts/types";
import SideNav from "./Sidenav";
import WhiteCardDash from "../../components/WhiteCardDashboard";
import IconHidden from "../../../assets/icon-hidden.png";
import IconCoin from "../../../assets/icon-coin.png";
import { ContainerDashboard } from "./styles";
import SummaryCards from "../../components/SummaryCards";
import Deposit from "./Deposit";
import Transfer from "./Transfer";
import MoneyLoader from "../../components/MoneyLoader";
import TransactionCard from "./TransactionCard";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToast();
  const { loading, debitTransactions } = useSelector(
    (state: IDashboardState) => state
  );

  useEffect(() => {
    async function getApiInfo() {
      try {
        const { data: accounts } = await api.get(`/dashboard`, {
          params: {
            inicio: "2021-01-01",
            fim: "2021-01-31",
            login: isAuth().login,
          },
        });
        dispatch(accountDataSuccess(accounts));

        const { data: tTypes } = await api.get("/lancamentos/planos-conta", {
          params: { login: isAuth().login },
        });
        dispatch(transactionTypesSuccess(tTypes));
      } catch (err) {
        // Expired token errors will be handled here
        if (err.response?.data.error === "ExpiredJwtException") {
          localStorage.removeItem("@tokenApp");
          addToast({
            type: "error",
            title: "Favor realizar o login novamente.",
          });
          history.push("/login");
        }
        // Other errors will end up here, is this case is probably a network issue
        addToast({
          type: "error",
          title: "Ops, algo deu errado! Tente novamente.",
        });
      }
    }
    getApiInfo();
  }, [dispatch, addToast, history]);

  const userName = isAuth().userName ? ` ${isAuth().userName} ` : "";

  return (
    <>
      <SideNav />
      <ContainerDashboard>
        {loading ? (
          <MoneyLoader color="white" size={150} />
        ) : (
          <>
            <div className="div-row">
              <div className="cards-row">
                <div className="container-header">
                  <div className="bloco-welcome-hide-data">
                    <p className="texto-welcome">
                      Olá<strong>{userName}</strong>, seja bem vindo!
                    </p>
                  </div>
                  <div className="bloco-welcome-hide-data">
                    <div className="circle-icon-hidden-show">
                      <img
                        src={IconHidden}
                        alt="Icon Hidden"
                        className="icon-hidden-show"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-row">
              <div className="cards-row">
                <Switch>
                  <Route path="/dashboard" exact component={SummaryCards} />
                  <Route path="/dashboard/deposit" component={Deposit} />
                  <Route path="/dashboard/transfer" component={Transfer} />
                </Switch>
              </div>
              <div className="cards-row last">
                <WhiteCardDash _maxWidth="100%">
                  <div className="section-account-history">
                    <div className="title-account-history">
                      <div className="title-historic-account">
                        <img
                          src={IconCoin}
                          alt="Icon Coin"
                          className="account-icon-card"
                        />
                        <p className="text-historic-account">
                          Últimos lançamentos
                        </p>
                      </div>
                    </div>

                    {debitTransactions![0] ? (
                      debitTransactions!.map((tr) => (
                        <TransactionCard key={tr.id} {...tr} />
                      ))
                    ) : (
                      <p className="text-historic-account-empty">
                        Não existem lançamentos.
                      </p>
                    )}
                  </div>
                </WhiteCardDash>
              </div>
            </div>
          </>
        )}
      </ContainerDashboard>
    </>
  );
};

export default Dashboard;
