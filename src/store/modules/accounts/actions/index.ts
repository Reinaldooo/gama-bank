import {
  IAccounts,
  IAction,
  IPlanoConta,
  ILancamentoRedux,
  ACCOUNT_DATA_SUCCESS,
  TRANSACTION_TYPES_SUCCESS,
  DEBIT_TRANSACTION_SUCCESS,
  CREDIT_TRANSACTION_SUCCESS,
  TOGGLE_TRANSACTION_VISIBILITY,
  SET_ACTIVE_MONTH,
} from "../types";

export function accountDataSuccess(data: IAccounts): IAction {
  return {
    type: ACCOUNT_DATA_SUCCESS,
    payload: data,
  };
}

export function transactionTypesSuccess(tTypes: IPlanoConta[]): IAction {
  return {
    type: TRANSACTION_TYPES_SUCCESS,
    payload: tTypes,
  };
}

export function setActiveMonth(month: string): IAction {
  return {
    type: SET_ACTIVE_MONTH,
    payload: month,
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

export function toggleTransactionVisibility(): IAction {
  return {
    type: TOGGLE_TRANSACTION_VISIBILITY,
  };
}
