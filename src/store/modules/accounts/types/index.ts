export const ACCOUNT_DATA_SUCCESS: string = "ACCOUNT_DATA_SUCCESS";
export const ACCOUNT_DATA_LOADING: string = "ACCOUNT_DATA_LOADING";

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

export interface Accounts {
  contaBanco: Conta;
  contaCredito: Conta;
}

export interface IDashboardState {
  loading: boolean;
  accounts: Accounts | null;
}

interface AccountsDataSuccess {
  type: typeof ACCOUNT_DATA_SUCCESS;
  payload: Accounts;
}

interface AccountsDataLoading {
  type: typeof ACCOUNT_DATA_LOADING;
  payload: null;
}

export type AccountActions = AccountsDataSuccess | AccountsDataLoading;
