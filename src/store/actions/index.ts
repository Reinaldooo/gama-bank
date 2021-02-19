import { DashboardState } from "../reducers";

export const DASHBOARD_FETCH_SUCCESS: string = "DASHBOARD_FETCH_SUCCESS";

export const dashboardFetchSuccess = (data: DashboardState) => {
  return {
    type: DASHBOARD_FETCH_SUCCESS,
    payload: data,
  };
};
