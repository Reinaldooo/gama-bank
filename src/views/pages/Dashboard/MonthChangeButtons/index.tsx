import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../../../../context/toastContext";
//
import api from "../../../../services/api";
import { isAuth } from "../../../../services/auth";
import {
  accountDataSuccess,
  setActiveMonth,
} from "../../../../store/modules/accounts/actions";
import {
  DateInfo,
  IDashboardState,
} from "../../../../store/modules/accounts/types";
import { mainPurple } from "../../../../styles";
import MoneyLoader from "../../../components/MoneyLoader";
import * as S from "./styles";

const MonthChangeButtons: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("current");
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const { currentMonth, previousMonth } = useSelector(
    (state: IDashboardState) => state
  );

  async function getApiInfo(info: DateInfo) {
    try {
      const { data: accounts } = await api.get(`/dashboard`, {
        params: {
          inicio: `${info.year}-${info!.month}-01`,
          fim: `${info!.year}-${info!.month}-${info!.lastDay}`,
          login: isAuth().login,
        },
      });
      dispatch(accountDataSuccess(accounts));
      dispatch(setActiveMonth(info.month));
      setLoading(false);
    } catch (err) {
      // Errors will end up here, is this case is probably a network issue
      setLoading(false);
      addToast({
        type: "error",
        title: "Ops, algo deu errado! Tente novamente.",
      });
    }
  }

  function handleMonthChange(previous?: boolean) {
    if (previous) {
      setLoading(true);
      getApiInfo(previousMonth!);
      setSelected("previous");
      return;
    }
    setLoading(true);
    setSelected("current");
    getApiInfo(currentMonth!);
  }

  const isCurrentSelected = selected === "current";

  return (
    <S.Buttons>
      {loading ? (
        <MoneyLoader size={30} color={mainPurple} />
      ) : (
        <>
          <S.Button
            _active={!isCurrentSelected}
            onClick={() => handleMonthChange(true)}
            disabled={loading}
          >
            Mês Anterior
          </S.Button>
          <S.Button
            _active={isCurrentSelected}
            onClick={() => handleMonthChange()}
            disabled={loading}
          >
            Mês Atual
          </S.Button>
        </>
      )}
    </S.Buttons>
  );
};

export default MonthChangeButtons;
