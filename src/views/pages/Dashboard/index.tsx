import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToast } from "../../../context/toastContext";
import { Route, Switch } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
//
import api from "../../../services/api";
import { isAuth } from "../../../services/auth";
import {
  accountDataSuccess,
  toggleTransactionVisibility,
  transactionTypesSuccess,
} from "../../../store/modules/accounts/actions";
import { IDashboardState } from "../../../store/modules/accounts/types";
import SideNav from "./Sidenav";
import WhiteCardDash from "../../components/WhiteCardDashboard";
import IconCoin from "../../../assets/icon-coin.png";
import { ContainerDashboard } from "./styles";
import SummaryCards from "../../components/SummaryCards";
import Deposit from "./Deposit";
import Transfer from "./Transfer";
import MoneyLoader from "../../components/MoneyLoader";
import TransactionCard from "../../components/TransactionCard";
import HidableValue from "../../components/HidableValue";
import Plans from "./Plans";
import { mainPurple } from "../../../styles";
import MonthChangeButtons from "./MonthChangeButtons";
import { getDateInfo } from "../../../utils/helpers";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToast();
  const { loading, transactions, hideInfo } = useSelector(
    (state: IDashboardState) => state
  );

  useEffect(() => {
    // In every route change the scroll position should be reset
    window.scrollTo(0, 0);
  }, [history.location.pathname]);

  useEffect(() => {
    const [currentMonth] = getDateInfo();
    async function getApiInfo() {
      try {
        const [{ data: accounts }, { data: tTypes }] = await Promise.all([
          api.get(`/dashboard`, {
            params: {
              inicio: `${currentMonth!.year}-${currentMonth!.month}-01`,
              fim: `${currentMonth!.year}-${currentMonth!.month}-${
                currentMonth!.lastDay
              }`,
              login: isAuth().login,
            },
          }),

          api.get("/lancamentos/planos-conta", {
            params: { login: isAuth().login },
          }),
        ]);
        dispatch(accountDataSuccess({ ...accounts, currentMonth }));
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
          return;
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

  const userName = isAuth().userName ? ` ${isAuth().userName}` : "";

  function toggleInfoVisibility() {
    dispatch(toggleTransactionVisibility());
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

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
                    <button
                      className="button-hidden-exit"
                      onClick={toggleInfoVisibility}
                    >
                      <div className="circle-icon-hidden-show">
                        {hideInfo ? (
                          <AiFillEye size={25} color={mainPurple} />
                        ) : (
                          <AiFillEyeInvisible size={25} color={mainPurple} />
                        )}
                      </div>
                    </button>
                    <button
                      className="button-hidden-exit"
                      onClick={handleLogout}
                    >
                      <div className="circle-icon-hidden-show">
                        <FiLogOut size={25} color={mainPurple} />
                      </div>
                    </button>
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
                  <Route path="/dashboard/plans" component={Plans} />
                </Switch>
              </div>
              <div className="cards-row last">
                <WhiteCardDash _maxWidth="100%">
                  <div className="section-account-history">
                    <div className="header-account">
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
                      <div className="title-account-history">
                        <div className="title-historic-account">
                          <MonthChangeButtons />
                        </div>
                      </div>
                    </div>

                    {hideInfo ? (
                      <HidableValue condition={hideInfo} large />
                    ) : (
                      <>
                        {transactions![0] ? (
                          transactions!.map((tr) => (
                            <TransactionCard key={tr.id} {...tr} />
                          ))
                        ) : (
                          <p className="text-historic-account-empty">
                            Não existem lançamentos.
                          </p>
                        )}
                      </>
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
