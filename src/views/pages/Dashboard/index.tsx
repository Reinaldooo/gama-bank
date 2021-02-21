import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToast } from "../../../context/toastContext";
//
import api from "../../../services/api";
import { isAuth } from "../../../services/auth";
import { accountDataSuccess } from "../../../store/modules/accounts/actions";
import SideNav from "./Sidenav";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    api
      .get(`/dashboard`, {
        params: {
          inicio: "2021-01-01",
          fim: "2021-01-31",
          login: isAuth().user,
        },
      })
      .then(({ data }) => {
        dispatch(accountDataSuccess(data));
      })
      .catch(({ response }) => {
        // Expired token errors will be handled here
        if (response.data.error === "ExpiredJwtException") {
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
      });
  }, [dispatch, addToast, history]);

  return (
    <>
      <SideNav />
    </>
  );
};

export default Dashboard;
