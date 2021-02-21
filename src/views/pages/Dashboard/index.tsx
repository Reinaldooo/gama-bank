import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToast } from "../../../context/toastContext";
//
import api from "../../../services/api";
import { isAuth } from "../../../services/auth";
import {
  accountDataSuccess,
  transactionTypesSuccess,
} from "../../../store/modules/accounts/actions";
import { IDashboardState } from "../../../store/modules/accounts/types";
import SideNav from "./Sidenav";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToast();
  const accounts = useSelector((state: IDashboardState) => state);
  console.log(accounts);

  useEffect(() => {
    async function getApiInfo() {
      try {
        const { data: accounts } = await api.get(`/dashboard`, {
          params: {
            inicio: "2021-01-01",
            fim: "2021-01-31",
            login: isAuth().user,
          },
        });
        dispatch(accountDataSuccess(accounts));

        const { data: tTypes } = await api.get("/lancamentos/planos-conta", {
          params: { login: isAuth().user },
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

  return (
    <>
      <SideNav />
    </>
  );
};

export default Dashboard;
