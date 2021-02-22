import {
  IAccounts,
  IAction,
  IPlanoConta,
  ILancamentoRedux,
  ACCOUNT_DATA_SUCCESS,
  ACCOUNT_DATA_LOADING,
  ACCOUNT_DATA_ERROR,
  TRANSACTION_TYPES_SUCCESS,
  DEBIT_TRANSACTION_SUCCESS,
  CREDIT_TRANSACTION_SUCCESS,
} from "../types";

export function accountDataSuccess(data: IAccounts): IAction {
  return {
    type: ACCOUNT_DATA_SUCCESS,
    payload: data,
  };
}

export function accountDataLoading(): IAction {
  return {
    type: ACCOUNT_DATA_LOADING,
  };
}

export function accountDataError(): IAction {
  return {
    type: ACCOUNT_DATA_ERROR,
  };
}

export function transactionTypesSuccess(tTypes: IPlanoConta[]): IAction {
  return {
    type: TRANSACTION_TYPES_SUCCESS,
    payload: tTypes,
  };
}

export function debitTransactionSuccess(lancamento: ILancamentoRedux): IAction {
  // ILancamento wasn't used here because the obj sent to API !== ILancamento obj
  return {
    type: DEBIT_TRANSACTION_SUCCESS,
    payload: lancamento,
  };
}

export function creditTransactionSuccess(
  lancamento: ILancamentoRedux
): IAction {
  // ILancamento wasn't used here because the obj sent to API !== ILancamento obj
  return {
    type: CREDIT_TRANSACTION_SUCCESS,
    payload: lancamento,
  };
}
