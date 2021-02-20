import {
  IDashboardState,
  ACCOUNT_DATA_LOADING,
  ACCOUNT_DATA_SUCCESS,
  AccountActions,
} from "../types";

const initialState: IDashboardState = {
  loading: true,
  accounts: null,
};

export default function reducer(
  state = initialState,
  { type, payload }: AccountActions
): IDashboardState {
  switch (type) {
    case ACCOUNT_DATA_SUCCESS:
      return { ...state, accounts: payload, loading: false };
    case ACCOUNT_DATA_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
