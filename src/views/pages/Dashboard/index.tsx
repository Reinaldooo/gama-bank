import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import api from "../../../services/api";
import { accountDataSuccess } from "../../../store/modules/accounts/actions";
import { IDashboardState } from "../../../store/modules/accounts/types";
import SideNav from "./Sidenav";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state: IDashboardState) => state.accounts);
  console.log(accounts);
  

  useEffect(() => {
    api
      .get(`/dashboard`, {
        params: {
          inicio: "2021-01-01",
          fim: "2021-01-31",
          login: "jeque",
        },
        headers: {
          Authorization: localStorage.getItem("@tokenApp"),
        },
      })
      .then(({ data }) => {
        dispatch(accountDataSuccess(data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
      <>
        <SideNav/>
        {accounts?.contaBanco.saldo}
      </>
  );
};

export default Dashboard;
