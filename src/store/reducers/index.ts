import { DASHBOARD_FETCH_SUCCESS } from "../actions";

interface PlanoConta {
  id: number;
  login: string;
  descricao: string;
  padrao: boolean;
  tipoMovimento: string;
}

interface Lancamento {
  id: number;
  conta: number;
  data: string;
  descricao: string;
  tipo: string;
  valor: number;
  planoConta: PlanoConta;
}

interface Conta {
  id: number;
  saldo: number;
  lancamentos: Lancamento[];
}

export interface DashboardState {
  contaBanco: Conta | null;
  contaCredito: Conta | null;
}

const initialState = {
  contaBanco: null,
  contaCredito: null,
};

type Action = {
  type: "DASHBOARD_FETCH_SUCCESS";
  payload: DashboardState;
};

export const reducer = (
  state: DashboardState = initialState,
  action: Action
) => {
  switch (action.type) {
    case DASHBOARD_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
