import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//
import api from "../../../services/api";
import { dashboardFetchSuccess } from "../../../store/actions";

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
      .then(({ data }) => {
        dispatch(dashboardFetchSuccess(data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return <div />;
};

export default Dashboard;
