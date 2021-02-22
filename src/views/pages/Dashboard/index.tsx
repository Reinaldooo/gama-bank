import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
//
import api from "../../../services/api";
import {accountDataSuccess} from "../../../store/modules/accounts/actions";
import SideNav from "./Sidenav";
import WhiteCardDash from "../../components/WhiteCardDashboard";
import IconHidden from "../../../assets/icon-hidden.png"
import IconCoin from "../../../assets/icon-coin.png"
import IconHistoryCard from "../../../assets/icon-history-card.png"
import {ContainerDashboard} from "./styles"
import {Route, Switch} from "react-router-dom";
import SummaryCards from "../../components/SummaryCards";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        api
            .get(`/dashboard`, {
                params: {
                    inicio: "2021-01-01",
                    fim: "2021-01-31",
                    login: "reinaldo",
                },
                headers: {
                    Authorization: localStorage.getItem("@tokenApp"),
                },
            })
            .then(({data}) => {
                dispatch(accountDataSuccess(data));
            })
            .catch((err) => console.log(err));
    }, [dispatch]);

    return (
        <>
            <SideNav/>
            <ContainerDashboard>
                <div className="div-row">
                    <div className="cards-row">
                        <div className="container-header">
                            <div className="bloco-welcome-hide-data">
                                <p className="texto-welcome">Olá <strong>Usuário</strong>, seja bem vindo!</p>
                            </div>
                            <div className="bloco-welcome-hide-data">
                                <div className="circle-icon-hidden-show">
                                    <img src={IconHidden} alt="Icon Hidden" className="icon-hidden-show"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-row">
                    <div className="cards-row">
                        <Switch>
                            <Route path="/dashboard" exact component={SummaryCards}/>
                        </Switch>
                    </div>
                    <div className="cards-row last">
                        <WhiteCardDash _maxWidth="100%">
                            <div className="section-account-history">
                                <div className="title-account-history">
                                    <div className="title-historic-account">
                                        <img src={IconCoin} alt="Icon Coin" className="account-icon-card"/>
                                        <p className="text-historic-account">Últimos lançamentos</p>
                                    </div>
                                </div>
                                <div className="extract-account-history">
                                    <div className="row-historic-account">
                                        <div className="column-icon">
                                            <img src={IconHistoryCard} alt="Icon Coin"
                                                 className="account-icon-history-card"/>
                                        </div>
                                        <div className="column-description">
                                            <p className="historic-text">Compra no débito</p>
                                            <p className="description-text">GamaAcademy</p>
                                            <p className="value-text">R$: 298,55</p>
                                        </div>
                                        <div className="column-date">
                                            <p className="date-text">Dia 24 de Jan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </WhiteCardDash>
                    </div>
                </div>
            </ContainerDashboard>

        </>
    )
}

export default Dashboard;
