import {
  Accounts,
  AccountActions,
  ACCOUNT_DATA_SUCCESS,
  ACCOUNT_DATA_LOADING,
} from "../types";

export function accountDataSuccess(data: Accounts): AccountActions {
  return {
    type: ACCOUNT_DATA_SUCCESS,
    payload: data,
  };
}

export function accountDataLoading(): AccountActions {
  return {
    type: ACCOUNT_DATA_LOADING,
    payload: null,
  };
}
