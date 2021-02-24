export const ACCOUNT_DATA_SUCCESS: string = "ACCOUNT_DATA_SUCCESS";
export const ACCOUNT_DATA_LOADING: string = "ACCOUNT_DATA_LOADING";
export const ACCOUNT_DATA_ERROR: string = "ACCOUNT_DATA_ERROR";
export const TRANSACTION_TYPES_SUCCESS: string = "TRANSACTION_TYPES_SUCCESS";
export const TRANSACTION_ERROR: string = "TRANSACTION_ERROR";
export const DEBIT_TRANSACTION_SUCCESS: string = "DEBIT_TRANSACTION_SUCCESS";
export const CREDIT_TRANSACTION_SUCCESS: string = "CREDIT_TRANSACTION_SUCCESS";

export interface IPlanoConta {
  id: number;
  login: string;
  descricao: string;
  padrao: boolean;
  tipoMovimento: string;
}

export interface ILancamento {
  id: number;
  conta: number;
  data: string;
  descricao: string;
  tipo: string;
  valor: number;
  planoConta: IPlanoConta;
}

export interface ILancamentoRedux {
  id: string;
  conta: number;
  contaDestino?: string;
  data: string;
  descricao: string;
  login: string;
  planoConta: IPlanoConta;
  valor: number;
}

export interface IConta {
  id: number;
  saldo: number;
}

export interface IAccounts {
  contaBanco: IConta | null;
  contaCredito: IConta | null;
}

export interface ITransactionTypes {
  [key: string]: IPlanoConta;
}

export interface IDashboardState {
  fetchAccountsError: boolean;
  transactionError: boolean;
  loading: boolean;
  debitAccount: IConta | null;
  creditAccount: IConta | null;
  debitTransactions: ILancamento[] | null;
  creditTransactions: ILancamento[] | null;
  transactionTypes: ITransactionTypes | null;
}

export interface IAction {
  type:
    | typeof ACCOUNT_DATA_SUCCESS
    | typeof ACCOUNT_DATA_LOADING
    | typeof ACCOUNT_DATA_ERROR
    | typeof DEBIT_TRANSACTION_SUCCESS
    | typeof CREDIT_TRANSACTION_SUCCESS
    | typeof TRANSACTION_ERROR;
  payload?: any;
}
