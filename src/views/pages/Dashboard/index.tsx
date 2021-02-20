import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
//
import api from "../../../services/api";
import {accountDataSuccess} from "../../../store/modules/accounts/actions";
import SideNav from "./Sidenav";
import WhiteCardDash from "../../components/WhiteCardDashboard";
import {ContainerDashboard} from "./styles"

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
                                <p className="texto-welcome">Olá Usuário, seja bem vindo!</p>
                            </div>
                            <div className="bloco-welcome-hide-data">
                                aaa
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-row">
                    <div className="cards-row">
                        <WhiteCardDash _maxWidth="407px" _Height="300px">
                            <p>aa</p>
                        </WhiteCardDash>
                        <WhiteCardDash _maxWidth="407px" _Height="300px">
                            <p>aa</p>
                        </WhiteCardDash>
                    </div>
                    <div className="cards-row">
                        <WhiteCardDash _maxWidth="100%" _Height="300px">
                            <p>aa</p>
                        </WhiteCardDash>
                    </div>
                </div>
            </ContainerDashboard>

        </>
    )
}

export default Dashboard;
